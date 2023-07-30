import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type BasicMultipleColumnsBlockType = {
  title?: string,
  description?: unknown,
  background?: string,
  columnCount: '2' | '3',
  hasImages: boolean,
  imagesType?: 'vector' | 'photo',
  columns: {
    image?: MediaType,
    title?: string,
    description: string,
    id: string,
  }[],
}

export const BasicMultipleColumnsBlock: Block = {
  slug: 'basicMultipleColumns',
  labels: {
    singular: 'Multiple Columns',
    plural: 'Multiple Columns',
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
      name: 'columnCount',
      label: 'Column count',
      type: 'radio',
      defaultValue: '3',
      required: true,
      options: [
        {
          label: '2 columns',
          value: '2',
        },
        {
          label: '3 columns',
          value: '3',
        },
      ],
    },
    {
      name: 'hasImages',
      label: 'Show images?',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'imagesType',
      label: 'What kind of images?',
      type: 'radio',
      defaultValue: 'vector',
      required: true,
      options: [
        {
          label: 'Vectors / Logos',
          value: 'vector',
        },
        {
          label: 'Photos',
          value: 'photo',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.hasImages,
      },
    },
    {
      name: 'columns',
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
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
          required: true,
        },
      ]
    },
  ],
};


export default BasicMultipleColumnsBlock;
