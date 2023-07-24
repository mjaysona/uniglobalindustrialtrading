import React, { Fragment } from 'react';
import ContactUsComponent from '../../components/ContactUs';
import { SocialsType } from '../../globals/Socials';
import { ContactType } from '../../globals/Contact';

export type ContactUsBlockComponentProps = {
  socials: SocialsType,
  contact: ContactType,
};

export const Component: React.FC<ContactUsBlockComponentProps> = ({
  socials,
  contact,
}) => {
  return (
    <Fragment>
      <ContactUsComponent socials={socials} contact={contact} />
    </Fragment>
  );
};
