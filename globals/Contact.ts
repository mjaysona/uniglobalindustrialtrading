import { GlobalConfig } from 'payload/types';
import link, { LinkType } from '../fields/link';

export type AddressType = {
  name: string,
  id: string,
  address: {
    link: LinkType,
  },
  contactNumber: string,
}

export type ContactType = {
  email: string,
  addresses: AddressType[]
}

const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
    },
    {
      name: 'addresses',
      label: 'Addresses',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'address',
          label: 'Address',
          type: 'group',
          fields: [
            link(),
          ]
        },
        {
          name: 'contactNumber',
          label: 'Contact Number',
          type: 'text',
        },
      ],
    },
  ],
};

export default Contact;
