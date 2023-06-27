import { GlobalConfig } from 'payload/types';

export type ContactType = {
  email: string,
  addresses: {
    name: string,
    id: string,
    address: string,
    contactNumber: string,
  }[]
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
          type: 'text',
        },
        {
          name: 'contactNumber',
          label: 'Contact Number',
          type: 'text',
        },
      ]
    },
  ],
};

export default Contact;
