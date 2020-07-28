import React, {useEffect, useRef, useCallback} from 'react';
import {TextInputWrapper, OverlayFieldWrapper} from './EzSelect.styles';
import {useJumpToOption, useAllCallbacks} from '../../utils/hooks';
import {
  useMenuTriggerState,
  useMenuTrigger,
  useOverlayPosition,
  useListState,
  useSelectableCollection,
} from './Overlays';
import EzTextInput from './EzTextInput';
import EzPopover from '../EzPopover';
import {ChevronIcon, InsetIcon} from '../Icons';
import EzListBox, {getItemId} from './EzListBox';

const EzSelect = props => {
  const {options, onChange} = props;
  const ariaLabelledBy = props['aria-labelledby'];
  const {collection, selectionManager, keyboardDelegate} = useListState(props);

  const timeout = useRef(null);

  useEffect(() => () => clearTimeout(timeout.current), []);

  const state = useMenuTriggerState();
  const {close, isOpen} = state;

  const containerRef = useRef<HTMLDivElement>();
  const listboxRef = useRef<HTMLElement>();

  const combobox = {
    'aria-haspopup': 'listbox' as 'listbox',
    className: props.className,
    disabled: props.disabled,
    error: props.error,
    touched: props.touched,
    opened: isOpen,
  };

  const {collectionProps} = useSelectableCollection({selectionManager, keyboardDelegate});

  const onKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const currentlyFocusedItem = collection.index.get(selectionManager.focusedKey);
      selectItem(currentlyFocusedItem ? currentlyFocusedItem.value : null);
    }
  };

  const {menuTriggerProps, menuProps} = useMenuTrigger(state);

  const {selected} = selectionManager;
  const focusedKeyId = getItemId(menuProps.id, selectionManager.focusedKey);

  const inputProps = {
    ...menuTriggerProps,
    'aria-labelledby': ariaLabelledBy,
    value: selected ? selected.label : '',
    'aria-activedescendant': focusedKeyId,
    onKeyDown: useAllCallbacks(
      isOpen && collectionProps.onKeyDown,
      isOpen && onKeyDown,
      menuTriggerProps.onKeyDown
    ),
    onSelect: e => (e.target as HTMLInputElement).setSelectionRange(0, 0),
    id: props.id,
    name: props.name,
    disabled: props.disabled,
    placeholder: props.placeholder,
    error: props.error,
    touched: props.touched,
    readOnly: true,
    ref: useRef<HTMLInputElement>(),
  };

  const changeEvent = useCallback(
    optionValue => {
      const event = new Event('change');
      // this is a hack to allow event.target.value to exist for the select onchange event
      // depsite being published from a div element
      // TODO: replace onChange with something like onSelectionChange
      (containerRef.current as any).value = optionValue;
      containerRef.current.dispatchEvent(event);
      return event;
    },
    [containerRef]
  );

  function selectItem(optionValue) {
    onChange(changeEvent(optionValue));
    timeout.current = setTimeout(close, 100);
  }

  const move = useCallback(
    option => {
      if (isOpen) selectionManager.setFocusedKey(keyboardDelegate.getKeyForSearch(option.label));
      else onChange(changeEvent(option.value));
    },
    [isOpen, onChange, changeEvent, selectionManager, keyboardDelegate]
  );

  useJumpToOption(inputProps.ref, {options, move});

  const overlayPosition = useOverlayPosition({
    targetRef: inputProps.ref,
    placement: 'bottom-start',
  });

  return (
    <OverlayFieldWrapper ref={containerRef} hasError={props.touched && props.error} opened={isOpen}>
      <TextInputWrapper {...combobox}>
        <EzTextInput {...inputProps} />
        <InsetIcon insetY0 right0 pr2>
          <ChevronIcon flip={isOpen} />
        </InsetIcon>
      </TextInputWrapper>
      {isOpen && (
        <EzPopover shouldCloseOnBlur onClose={close} {...overlayPosition}>
          <EzListBox
            {...menuProps}
            aria-labelledby={[ariaLabelledBy, props.id].join(' ')}
            ref={listboxRef as any}
            onClick={() => inputProps.ref.current.focus()}
            items={collection.items}
            onSelectionChange={selectItem}
            focusProps={selectionManager}
          />
        </EzPopover>
      )}
    </OverlayFieldWrapper>
  );
};

export default EzSelect;
