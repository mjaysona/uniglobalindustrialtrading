import { CollectionConfig } from 'payload/types';

export type MediaType = {
  filename: string
  width: number
  height: number
  alt: string
  sizes: {
    card?: {
      filename: string
      width: number
      height: number
    }
    feature?: {
      filename: string
      width: number
      height: number
    }
  }
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true,
  },
  upload: {
    adminThumbnail: 'card',
  },
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default Media;
