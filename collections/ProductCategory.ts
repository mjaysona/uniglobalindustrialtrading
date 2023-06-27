import { CollectionConfig } from 'payload/types';

const ProductCategory: CollectionConfig = {
  slug: 'productCategories',
  labels: {
    singular: 'Product Category',
    plural: 'Product Categories',
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
      name: 'products',
      label: 'Products',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          label: 'Product',
          type: 'relationship',
          relationTo: 'productList',
          required: true,
        }
      ]
    },
  ],
  admin: {
    group: 'Products',
    useAsTitle: 'name',
    defaultColumns: ["name", "products"],
  },
};

export default ProductCategory;
