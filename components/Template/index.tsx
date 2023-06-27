import React, { Fragment } from 'react';
import Footer from '../Footer';
import { MenuType } from '../../globals/Menu';
import { ContactType } from '../../globals/Contact';
import { SocialsType } from '../../globals/Socials';

type Props = {
  menu: MenuType,
  contact: ContactType,
  socials: SocialsType,
}

const Template: React.FC<Props> = ({ children, menu, contact, socials }) => {
  return (
    <Fragment>
      {children}
      <Footer
        menu={menu}
        contact={contact}
        socials={socials}
      />
    </Fragment>
  );
};

export default Template;
