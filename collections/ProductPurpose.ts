import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import createParentField from '@payloadcms/plugin-nested-docs/dist/fields/parent';

export type ProductPurposeCollectionType = {
  id: string,
  name: string,
  parent?: string,
  slug: string,
}

const ProductPurpose: CollectionConfig = {
  slug: 'productPurpose',
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: 'Product Purpose',
    plural: 'Product Purpose',
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

export default ProductPurpose;
