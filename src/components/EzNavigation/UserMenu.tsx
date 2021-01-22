import React, {useRef} from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {useMenuTrigger, useMenuTriggerState} from '../Overlays';
import {menuStyles} from './Menu';
import EzLink from '../EzLink';
import {wrapEvents} from '../../utils';
import EzPopover from '../EzPopover';

type MenuProps = {
  name: string;
  links: any;
  sidebarToggle: (ev: React.SyntheticEvent<any>) => void;
};

const buttonReset = () => css`
  background: none;
  border: none;
  text-align: left;

  && {
    appearance: none;
  }
`;

const nestedStyles = () => css`
  background-color: #373d43;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(#1b2023, 0.6);
  width: calc(100% - 8px);
  margin-left: -4px;
  outline: none;
`;

const nestedMenuItem = () => css`
  color: #b8bdc2;
  display: block;
  font-weight: normal;
  font-size: 14px;
  padding: 12px 18px;
  width: 100%;
  :hover:enabled {
    color: white;
    text-decoration: none;
  }
`;

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M15.989 17.579c-1.723 0-3.127-.861-4.211-2.584-.659-1.106-.989-2.441-.989-4.004s.505-2.967 1.515-4.211c1.01-1.244 2.233-1.866 3.669-1.866s2.659.622 3.669 1.866c1.01 1.244 1.515 2.733 1.515 4.467s-.505 3.222-1.515 4.467c-1.01 1.244-2.228 1.866-3.653 1.866zM13.628 7.96c-.638.883-.957 1.861-.957 2.935s.154 1.967.463 2.68c.308.713.728 1.271 1.26 1.675s1.048.606 1.547.606c.5 0 .92-.074 1.26-.223s.654-.367.941-.654c.287-.287.537-.611.75-.973.468-.787.702-1.601.702-2.441s-.101-1.547-.303-2.122a4.647 4.647 0 0 0-.814-1.468c-.723-.893-1.553-1.34-2.489-1.34s-1.723.441-2.361 1.324zm-3.86-6.684C11.746.425 13.825 0 16.005 0s4.265.425 6.253 1.276c1.989.851 3.701 1.989 5.137 3.414s2.568 3.127 3.398 5.105c.829 1.978 1.234 4.047 1.212 6.205s-.452 4.227-1.292 6.205c-.84 1.978-1.978 3.685-3.414 5.121s-3.143 2.574-5.121 3.414C20.2 31.58 18.131 32 15.973 32s-4.227-.42-6.205-1.26c-1.978-.84-3.68-1.978-5.105-3.414S2.1 24.183 1.249 22.205C.398 20.227-.027 18.158-.027 16s.425-4.227 1.276-6.205C2.1 7.817 3.238 6.115 4.663 4.69S7.79 2.127 9.768 1.276zm6.221.606c-1.914 0-3.743.372-5.488 1.117S7.257 4.754 6.003 6.03c-1.255 1.276-2.244 2.797-2.967 4.562s-1.074 3.616-1.053 5.551c0 3.233 1.01 6.168 3.031 8.806 1.446-1.808 3.137-3.196 5.073-4.163s3.951-1.452 6.046-1.452 4.11.484 6.046 1.452 3.616 2.356 5.041 4.163c2.021-2.637 3.031-5.573 3.031-8.806 0-1.936-.378-3.786-1.133-5.551s-1.776-3.286-3.063-4.562c-1.287-1.276-2.808-2.286-4.562-3.031s-3.589-1.117-5.503-1.117zM6.035 26.257c1.34 1.255 2.861 2.239 4.562 2.951s3.499 1.069 5.392 1.069c1.893 0 3.69-.356 5.392-1.069s3.222-1.696 4.562-2.951c-1.297-1.659-2.813-2.941-4.546-3.844s-3.536-1.356-5.408-1.356c-2.531 0-4.881.787-7.051 2.361a14.079 14.079 0 0 0-2.903 2.839z"
    />
  </svg>
);

const iconMenuItem = () => css`
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`;

const Trigger = styled.button(menuStyles, buttonReset, iconMenuItem) as any;
const StyledMenu = styled.div(nestedStyles) as any;
const StyledMenuItem = styled.button(nestedMenuItem, buttonReset) as any;

const UserMenu: React.FC<MenuProps> = props => {
  const ref = useRef();
  const menuState = useMenuTriggerState();
  const {menuTriggerProps, menuProps} = useMenuTrigger(menuState);

  return (
    <>
      {menuState.isOpen && (
        <EzPopover targetRef={ref} placement="top-start" matchWidth shouldCloseOnBlur onClose={menuState.close}>
          <StyledMenu {...menuProps} aria-label="User options">
            {props.links.map((link, i) => (
              <StyledMenuItem
                key={i}
                {...link}
                as={EzLink}
                {...wrapEvents(link, {
                  onClick: props.sidebarToggle,
                })}
              >
                {link.label}
              </StyledMenuItem>
            ))}
          </StyledMenu>
        </EzPopover>
      )}
      <Trigger ref={ref} {...menuTriggerProps}>
        <ProfileIcon />
        {props.name}
      </Trigger>
    </>
  );
};

export default UserMenu;
