import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import slug from '../fields/slug';
import { LinkType } from '../fields/link';
import BannerBlock from '../blocks/BannerBlock/BannerBlock';
import CardImagesBlock from '../blocks/CardImagesBlock/CardImagesBlock';
import ContentBlock from '../blocks/ContentBlock/ContentBlock';
import FeaturedProductsBlock from '../blocks/FeaturedProductsBlock/FeaturedProductsBlock';
import FormBlock from '../blocks/FormBlock/FormBlock';
import BasicMultipleColumnsBlock from '../blocks/BasicMultipleColumnsBlock/BasicMultipleColumnsBlock';
import ImageContentRowBlock from '../blocks/ImageContentRowBlock/ImageContentRowBlock';
import MessageBubblesBlock from '../blocks/MessageBubblesBlock/MessageBubblesBlock';
import SlidingCardsBlock from '../blocks/SlidingCardsBlock/SlidingCardsBlock';
import VerticalTabsBlock from '../blocks/VerticalTabsBlock/VerticalTabsBlock';
import ContactUsBlock from '../blocks/ContactUsBlock/ContactUsBlock';
import CardLogosBlock from '../blocks/CardLogosBlock/CardLogosBlock';
import SimpleListBlock from '../blocks/SimpleListBlock/SimpleListBlock';
import HorizontalStepsBlock from '../blocks/HorizontalStepsBlock/HorizontalStepsBlock';
import MiddleBannerBlock from '../blocks/MiddleBannerBlock/MiddleBannerBlock';
import TeamBlock from '../blocks/TeamBlock/TeamBlock';
import populateFullTitle from '../utilities/populateFullTitle';

export type Breadcrumb = {
  doc: string,
  url: string,
  label: string,
  id: string,
}

export type Layout = {
  blockType: string,
  blockName: string,
  background?: string,
  width?: 'full' | 'half',
}

export type PageType = {
  slug: string,
  title: string,
  image?: MediaType,
  buttons: LinkType[],
  layout: Layout[],
  breadcrumbs: Breadcrumb[],
  parent?: string,
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
      name: 'isMain',
      label: 'Is this a main page?',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        BasicMultipleColumnsBlock,
        BannerBlock,
        CardImagesBlock,
        CardLogosBlock,
        ContactUsBlock,
        ContentBlock,
        FeaturedProductsBlock,
        FormBlock,
        HorizontalStepsBlock,
        ImageContentRowBlock,
        MiddleBannerBlock,
        MessageBubblesBlock,
        SimpleListBlock,
        SlidingCardsBlock,
        TeamBlock,
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
    slug(),
    {
      name: 'hierarchy',
      type: 'text',
      localized: true,
      hooks: {
        beforeChange: [populateFullTitle],
      },
      admin: {
        components: {
          Field: () => null,
        },
      },
    },
  ],
};

export default Page;
