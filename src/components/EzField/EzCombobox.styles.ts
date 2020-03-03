import {css} from '@emotion/core';
import styled from '../../themes/styled';

const errorIconPosition = ({hasError}) =>
  hasError &&
  css`
    + * > svg {
      right: 1em;
    }
  `;

const hideErrorMessageWhenOpen = ({hasError, opened}) =>
  hasError &&
  opened &&
  css`
    + * + * {
      display: none;
    }
  `;

export const Container = styled.div<any>`
  position: relative;

  input {
    cursor: default;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  ${errorIconPosition};
  ${hideErrorMessageWhenOpen};
`;

const iconColor = p =>
  p.disabled ? p.theme.colors.interactive.disabled.foreground : p.theme.colors.interactive.base;

export const Combobox = styled.div`
  position: relative;

  && input {
    padding-right: 2em;
  }

  svg {
    stroke: ${iconColor};
    transition: transform 0.3s;
  }
`;
