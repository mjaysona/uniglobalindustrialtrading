import React from 'react';
import Link from 'next/link';
import { MenuType } from '../../globals/Menu';
import { ContactType } from '../../globals/Contact';
import UniglobalLogo from '../UniglobalLogo';
import classes from './index.module.scss';
import Container from '../Container';

type Props = {
  menu: MenuType,
  contact: ContactType,
};

const Header: React.FC<Props> = ({ menu, contact }) => {
  return (
    <header className={[classes.header, classes.header__home].join(' ')}>
      <Container>
        <div className={classes.header__logo}>
          <UniglobalLogo />
        </div>
        <div className={classes.header__menu}>
          {menu.menuItems.map((item) => {
            return (
              <Link
                href={`/${item.link.page.slug}`}
                key={item.id}
              >
                {item.link.label}
              </Link>
            )
          })}
        </div>
        {contact.addresses && (
          <div className={classes.header__contact}>
            { contact.addresses[0].contactNumber }
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
