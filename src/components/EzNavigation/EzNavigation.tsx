import React, {SFC, useState} from 'react';
import en from './en';
import Logo, {LogoType} from './Logo';
import Menu from './Menu';
import Hamburger from './Hamburger';
import UserMenu from './UserMenu';
import {NotificationCounter} from './Notifications';
import {Wrapper, NavWrapper, Menus, MenuContent, ContentContainer} from './EzNavigation.styles';
import {LabelledLink, Labelled} from '../EzLink/EzLink.types';
import {useTranslation} from '../../utils/hooks';

const countNotifications = links =>
  links.reduce((sum, link) => {
    if (!link.notifications) return sum;
    const count = Number.isInteger(link.notifications) ? Number(link.notifications) : 0;
    return sum + count;
  }, 0);

type HomeLink = LabelledLink & {
  logo?: LogoType;
};

type LinkGroup = Labelled & {
  links: LabelledLink[];
};

type LinkOrGroup = LabelledLink | LinkGroup;

type NavLink = LinkOrGroup & {
  notifications?: number | '★';
};

type UserMenu = {
  links: LabelledLink[];
  name: string;
};

type Props = {
  links: NavLink[];
  utilityLinks?: NavLink[];
  userMenu?: UserMenu;
  home: HomeLink;
};

const Links = ({links}) => links.map((link, i) => <Menu key={i} link={link} />);

const EzNavigation: SFC<Props> = ({
  children,
  links,
  utilityLinks,
  userMenu,
  home: {logo, ...homeLink},
}: any) => {
  const {t} = useTranslation(en);
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(s => !s);

  const notificationSummary = countNotifications(links) + countNotifications(utilityLinks || []);

  return (
    <Wrapper>
      <NavWrapper opened={hidden}>
        <Hamburger opened={!hidden} onClick={toggle} />
        {notificationSummary > 0 && (
          <NotificationCounter onClick={toggle} opened={!hidden}>
            {notificationSummary}
          </NotificationCounter>
        )}
        <Logo link={homeLink} logo={logo} />
        <MenuContent opened={!hidden}>
          <Menus primary aria-label={t('Primary navigation')} onClick={toggle}>
            <Links links={links} />
          </Menus>
          {utilityLinks && (
            <Menus aria-label={t('Utility navigation')} onClick={toggle}>
              <Links links={utilityLinks} />
            </Menus>
          )}
          {userMenu && (
            <Menus aria-label={t('User menu')}>
              <UserMenu name={userMenu.name} links={userMenu.links} sidebarToggle={toggle} />
            </Menus>
          )}
        </MenuContent>
      </NavWrapper>
      <ContentContainer opened={hidden}>{children}</ContentContainer>
    </Wrapper>
  );
};

export default EzNavigation;
