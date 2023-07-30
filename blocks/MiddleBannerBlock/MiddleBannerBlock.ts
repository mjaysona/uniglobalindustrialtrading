import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type MiddleBannerBlockType = {
  headline?: string,
  images: {
    id: string,
    image: MediaType,
  }[],
  items: {
    id: string,
    name: string,
    description: string,
  }[],
}

export const MiddleBannerBlock: Block = {
  slug: 'middleBanner',
  labels: {
    singular: 'Inside banner',
    plural: 'Inside banner',
  },
  fields: [
    {
      name: 'headline',
      label: 'Headline',
      type: 'textarea',
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      required: true,
      maxRows: 2,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};


export default MiddleBannerBlock;
