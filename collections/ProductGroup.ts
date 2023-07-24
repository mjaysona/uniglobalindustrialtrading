import { CollectionConfig } from 'payload/types';

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
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
};

export default ProductGroup;
