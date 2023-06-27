import React from 'react';
import Link from 'next/link';
import { MenuType } from '../../globals/Menu';
import { ContactType } from '../../globals/Contact';
import UniglobalLogo from '../UniglobalLogo';

type Props = {
  menu: MenuType,
  contact: ContactType,
};

const Header: React.FC<Props> = ({ menu, contact }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <UniglobalLogo />
      </div>
      <div className="header__menu">
        {menu.menuItems.map((item) => {
          return (
            <Link
              href={`/${item.link.page.slug}`}
              key={item.link.page.slug}
            >
              {item.link.label}
            </Link>
          )
        })}
      </div>
      {contact.addresses && (
        <div className="header__contact">
          { contact.addresses[0].contactNumber }
        </div>
      )}
    </header>
  );
};

export default Header;
