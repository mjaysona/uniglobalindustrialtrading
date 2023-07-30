import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import createParentField from '@payloadcms/plugin-nested-docs/dist/fields/parent';

export type ProductGroupCollectionType = {
  id: string,
  name: string,
  parent?: string,
  slug: string,
}

const ProductGroup: CollectionConfig = {
  slug: 'productGroup',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Product Group',
    plural: 'Product Group',
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
    slug('name'),
  ],
};

export default ProductGroup;
