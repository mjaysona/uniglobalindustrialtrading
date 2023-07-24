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
  isHomepage: boolean,
};

const Header: React.FC<Props> = ({ menu, contact, isHomepage }) => {
  return (
    <header className={[
      classes['header'],
      classes[isHomepage ? 'header__home' : 'header__default'],
    ].join(' ')}>
      <Container>
        <div className={classes['header__content']}>
          <div className={classes['header__logo']}>
            <Link href="/"><UniglobalLogo /></Link>
          </div>
          <div className={classes['header__menu']}>
            {menu.menuItems.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    href={`/${item.page.slug}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
          {contact.addresses && (
            <h4 className={classes['header__contact']}>
              <Link href={`tel:${contact.addresses[0].contactNumber}`}>
                {contact.addresses[0].contactNumber}
              </Link>
            </h4>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
