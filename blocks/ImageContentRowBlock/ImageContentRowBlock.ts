import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { Option } from 'payload/dist/fields/config/types';
import { MediaType } from '../../collections/Media';

export type ImageContentRowBlockType = {
  layout: Option,
  image: MediaType,
  title: string,
  description: unknown,
  background?: string,
  list: {
    link: LinkType,
    id: string,
  }[],
  link: LinkType,
}

export const ImageContentRowBlock: Block = {
  slug: 'imageContentRow',
  labels: {
    singular: 'Image with Content Row',
    plural: 'Image with Content Rows',
  },
  fields: [
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
      name: 'layout',
      label: 'Layout',
      type: 'radio',
      defaultValue: '',
      required: true,
      options: [
        {
          label: 'Image right - Content left',
          value: 'imgRight',
        },
        {
          label: 'Image left - Content right',
          value: 'imgLeft',
        },
      ],
    },
    {
      name: 'image',
      label: 'Image',
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
      type: 'richText',
    },
    link({ required: false }),
    {
      name: 'list',
      label: 'List',
      type: 'group',
      fields: [
        {
          name: 'items',
          label: {
            singular: 'Item',
            plural: 'Items',
          },
          type: 'relationship',
          relationTo: 'products',
        },
      ],
    },
  ],
};


export default ImageContentRowBlock;
