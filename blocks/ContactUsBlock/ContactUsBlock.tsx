import { Block } from 'payload/types';
import widthField, { WidthFieldType } from '../../fields/widthField';

export type ContactUsBlockType = {
  slug: string,
  name: string,
} & WidthFieldType;

export const ContactUsBlock: Block = {
  slug: 'contactUs',
  labels: {
    singular: 'Contact Us',
    plural: 'Contact Us',
  },
  fields: [
    widthField,
    {
      name: 'name',
      label: 'Name',
      defaultValue: 'Contact us',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
};


export default ContactUsBlock;
