import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import createParentField from '@payloadcms/plugin-nested-docs/dist/fields/parent';

export type ProductCollectionType = {
  id: string,
  name: string,
  brand: string,
  purpose: string,
  group: string,
  tags?: string[],
}

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Product',
    plural: 'Product List',
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    createParentField(
      "productGroup",
      {
        admin: {
          position: "sidebar",
        },
      }
    ),
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'brand',
      label: 'Product Brand',
      type: 'relationship',
      relationTo: 'productBrand',
    },
    {
      name: 'purpose',
      label: 'Product Purpose',
      type: 'relationship',
      relationTo: 'productPurpose',
    },
    {
      name: 'group',
      label: 'Product Group',
      type: 'relationship',
      relationTo: 'productGroup',
    },
    {
      name: 'tags',
      label: 'Product Tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          label: 'Tag',
          type: 'text',
        }
      ],
    },
    slug('name'),
  ],
};

export default Products;
