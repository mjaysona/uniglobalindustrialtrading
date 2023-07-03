import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { Option } from 'payload/dist/fields/config/types';
import { Upload } from 'payload/dist/uploads/types';

export type ImageContentRowBlockType = {
  layout: Option,
  image: Upload,
  title: string,
  description: unknown,
  list: LinkType[],
} & LinkType

export const ImageContentRowBlock: Block = {
  slug: 'imageContentRow',
  labels: {
    singular: 'Image with Content Row',
    plural: 'Image with Content Rows',
  },
  fields: [
    {
      name: 'layout',
      label: 'Layout',
      type: 'radio',
      defaultValue: '',
      required: true,
      options: [
        {
          label: 'Image left - Content right',
          value: 'imgRight',
        },
        {
          label: 'Image right - Content left',
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
    {
      name: 'list',
      label: 'List',
      type: 'array',
      required: false,
      fields: [
        link(),
      ],
    },
    link(),
  ],
};


export default ImageContentRowBlock;
