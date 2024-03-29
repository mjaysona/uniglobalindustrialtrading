import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { MediaType } from '../../collections/Media';

export type CardImagesType = {
  title?: string,
  description?: string,
  background?: string,
  link: LinkType,
  items: {
    id: string,
    name: string,
    image: MediaType,
  }[],
};

export const CardImagesBlock: Block = {
  slug: 'cardImages',
  labels: {
    singular: 'Images inside cards',
    plural: 'Images inside cards',
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
      type: 'textarea',
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
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};


export default CardImagesBlock;
