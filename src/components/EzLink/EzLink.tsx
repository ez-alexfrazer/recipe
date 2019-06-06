import React, {forwardRef} from 'react';
import {StyledLink, StyledAnchor} from './EzLink.styles';
import {AnchorProps, LinkProps} from './EzLink.types';

type Props = AnchorProps | LinkProps;

function isAnchor(props: AnchorProps | LinkProps): props is AnchorProps {
  return (props as any).href !== undefined;
}

const EzLink = forwardRef<HTMLElement, Props>((props, ref) => {
  if (isAnchor(props)) return <StyledAnchor {...props} innerRef={ref} />;

  const {as: Component, ...rest} = props;
  const Link = Component as any;

  return (
    <StyledLink>
      <Link innerRef={ref} {...rest} />
    </StyledLink>
  );
});

export const Link = forwardRef<HTMLElement, Props>((props, ref) => {
  if (isAnchor(props)) {
    return (
      <a {...props} ref={ref as any}>
        {props.children}
      </a>
    );
  }
  const {as: Component, ...rest} = props;
  const LinkComponent = Component as any;

  return <LinkComponent innerRef={ref} {...rest} />;
});

export default EzLink;
