import { CollectionConfig } from 'payload/types';

const ProductList: CollectionConfig = {
  slug: 'productList',
  labels: {
    singular: 'Product',
    plural: 'Product List',
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
  admin: {
    group: 'Products',
    useAsTitle: 'name',
    defaultColumns: ['name'],
  },
};

export default ProductList;
