import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';

export type ProductsBrandType = {
  name: string,
  shortName?: string,
  logo: {
    logo: MediaType,
    logoWhite?: MediaType,
    logoDark?: MediaType,
  },
  priority: number,
  id: string,
}

const ProductBrand: CollectionConfig = {
  slug: 'productBrand',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Product Brand',
    plural: 'Product Brand',
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'shortName',
      label: 'Short name',
      type: 'text',
    },
    {
      name: 'priority',
      label: 'Priority',
      type: 'number',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'group',
      fields: [
        {
          name: 'logo',
          label: 'Original Logo',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          name: 'logoWhite',
          label: 'Logo - White',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'logoDark',
          label: 'Logo - Dark',
          type: 'upload',
          relationTo: 'media',
        },
      ]
    }
  ],
};

export default ProductBrand;
