import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type SlidingCardsBlockType = {
  title?: string,
  description?: unknown,
  background?: string,
  card: {
    logoHeader?: MediaType,
    title: string,
    description: string,
    id: string,
  }[],
}

export const SlidingCardsBlock: Block = {
  slug: 'slidingCards',
  labels: {
    singular: 'Sliding Cards',
    plural: 'Sliding Cards',
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
    {
      name: 'card',
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      type: 'array',
      required: true,
      fields: [
        {
          name: 'logoHeader',
          label: 'Logo Header',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
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
      ],
    },
  ],
};


export default SlidingCardsBlock;
