import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { MediaType } from '../../collections/Media';

export type CardLogosBlockType = {
  title?: string,
  description?: unknown,
  background?: string,
  link: LinkType,
  items: {
    name: string,
    logo: MediaType,
  }[],
};

export const CardLogosBlock: Block = {
  slug: 'cardLogos',
  labels: {
    singular: 'Logo inside card',
    plural: 'Logos inside cards',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'background',
      label: 'Background',
      type: 'select',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Gray',
          value: 'gray',
        },
      ],
    },
    link({ required: false }),
    {
      name: 'items',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};


export default CardLogosBlock;
