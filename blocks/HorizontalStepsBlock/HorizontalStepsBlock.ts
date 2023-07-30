import { Block } from 'payload/types';
import { LinkType } from '../../fields/link';
import { MediaType } from '../../collections/Media';

export type HorizontalStepsBlockType = {
  title?: string,
  description?: unknown,
  background?: string,
  link: LinkType,
  steps: {
    description?: unknown,
    steps: {
      id: string,
      name: 'image',
      image: MediaType,
    }[],
  },
};

export const HorizontalStepsBlock: Block = {
  slug: 'horizontalSteps',
  labels: {
    singular: 'Horizontal Steps',
    plural: 'Horizontal Steps',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
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
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'steps',
      type: 'group',
      fields: [
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
        },
        {
          name: 'steps',
          labels: {
            singular: 'Step',
            plural: 'Steps',
          },
          type: 'array',
          required: true,
          minRows: 2,
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
    },
  ],
};


export default HorizontalStepsBlock;
