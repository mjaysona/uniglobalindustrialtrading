import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { Option } from 'payload/dist/fields/config/types';
import { MediaType } from '../../collections/Media';

export type ImageContentRowBlockType = {
  layout: Option,
  image: MediaType,
  title: string,
  description: unknown,
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
