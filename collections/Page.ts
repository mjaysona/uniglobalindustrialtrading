import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import { Image } from '../blocks/Image/Config';
import { Type as ImageType } from '../blocks/Image/Component';
import { CallToAction } from '../blocks/CallToAction/Config';
import { Type as CallToActionType } from '../blocks/CallToAction/Component';
import slug from '../fields/slug';
import link, { LinkType } from '../fields/link';

export type Layout = CallToActionType | ImageType

export type PageType = {
  slug: string
  title: string
  image?: MediaType
  headline: string
  description: string
  buttons: LinkType[],
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
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
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      fields: [
        link(),
      ],
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Image,
      ],
    },
    {
      name: 'meta',
      label: 'Page Meta',
      type: 'group',
      fields: [
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
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    slug,
  ],
};

export default Page;
