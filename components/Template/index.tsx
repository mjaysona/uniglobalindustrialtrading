import React, { Fragment } from 'react';
import Footer from '../Footer';
import { GlobalProps } from '../../pages/_app';

const Template: React.FC<GlobalProps> = ({
  children,
  menu,
  contact,
  socials,
  brands,
}) => {
  return (
    <Fragment>
      {children}
      <Footer
        menu={menu}
        contact={contact}
        socials={socials}
        brands={brands}
      />
    </Fragment>
  );
};

export default Template;
