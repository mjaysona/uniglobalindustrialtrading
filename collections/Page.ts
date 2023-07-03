import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import { Type as ImageType } from '../blocks/Image/Component';
import { Type as CallToActionType } from '../blocks/CallToAction/Component';
import slug from '../fields/slug';
import link, { LinkType } from '../fields/link';
import BannerBlock from '../blocks/BannerBlock/BannerBlock';
import CardImagesBlock from '../blocks/CardImagesBlock/CardImagesBlock';
import FeaturedProductsBlock from '../blocks/FeaturedProductsBlock/FeaturedProductsBlock';
import BasicMultipleColumnsBlock from '../blocks/BasicMultipleColumnsBlock/BasicMultipleColumnsBlock';
import ImageContentRowBlock from '../blocks/ImageContentRowBlock/ImageContentRowBlock';
import MessageBubblesBlock from '../blocks/MessageBubblesBlock/MessageBubblesBlock';
import SlidingCardsBlock from '../blocks/SlidingCardsBlock/SlidingCardsBlock';
import VerticalTabsBlock from '../blocks/VerticalTabsBlock/VerticalTabsBlock';

export type Layout = CallToActionType | ImageType

export type PageType = {
  slug: string,
  title: string,
  image?: MediaType,
  buttons: LinkType[],
  layout: Layout[],
  meta: {
    title?: string,
    description?: string,
    keywords?: string,
  },
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
        BannerBlock,
        CardImagesBlock,
        FeaturedProductsBlock,
        BasicMultipleColumnsBlock,
        ImageContentRowBlock,
        MessageBubblesBlock,
        SlidingCardsBlock,
        VerticalTabsBlock,
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
