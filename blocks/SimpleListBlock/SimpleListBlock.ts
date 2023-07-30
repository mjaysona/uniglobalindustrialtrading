import { Block } from 'payload/types';

export type SimpleListBlockType = {
  title?: string,
  description?: unknown,
  background?: string,
  columnCount: number,
  items: {
    id: string,
    name: string,
  }[],
};

export const SimpleListBlock: Block = {
  slug: 'simpleList',
  labels: {
    singular: 'Simple List',
    plural: 'Simple List',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
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
      ],
    },
  ],
};


export default SimpleListBlock;
