import { Block } from 'payload/types';
import link, { LinkType } from '../../fields/link';
import { Option } from 'payload/dist/fields/config/types';
import { MediaType } from '../../collections/Media';

export type BannerBlockType = {
  headline: string,
  description: string,
  type: Option,
  image: MediaType,
} & LinkType

export const BannerBlock: Block = {
  slug: 'banner',
  labels: {
    singular: 'Banner',
    plural: 'Banners',
  },
  fields: [
    {
      name: 'type',
      label: 'Banner type',
      type: 'radio',
      required: true,
      defaultValue: 'page',
      options: [
        {
          label: 'Main banner',
          value: 'main',
        },
        {
          label: 'Page banner',
          value: 'page',
        },
      ],
    },
    {
      name: 'image',
      label: 'Banner image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'imageOverlay',
      label: 'Banner image overlay',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'main', 
      },
    },
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    link(),
  ],
};


export default BannerBlock;
