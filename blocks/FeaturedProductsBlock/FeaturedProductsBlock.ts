import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';
import link, { LinkType } from '../../fields/link';

export type FeaturedProductsBlockType = {
  title?: string,
  description?: unknown,
  product: {
    productImage: MediaType,
    brandName: string,
    productName: string,
    id: string,
    link: LinkType,
  }[],
}

export const SlidingCardsBlock: Block = {
  slug: 'featuredProducts',
  labels: {
    singular: 'Featured Products',
    plural: 'Featured Products',
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
      name: 'product',
      labels: {
        singular: 'Product',
        plural: 'Products',
      },
      type: 'array',
      fields: [
        {
          name: 'productImage',
          label: 'Product Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'brandName',
          label: 'Brand',
          type: 'text',
          required: true,
        },
        {
          name: 'productName',
          label: 'Product',
          type: 'text',
          required: true,
        },
        link(),
      ],
    },
  ],
};


export default SlidingCardsBlock;
