import { CollectionConfig } from 'payload/types';

const ProductType: CollectionConfig = {
  slug: 'productTypes',
  labels: {
    singular: 'Product Type',
    plural: 'Product Types',
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
      name: 'categories',
      label: 'Categories',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'category',
          label: 'Category',
          type: 'relationship',
          relationTo: 'productCategories',
          hasMany: false,
          required: true,
        }
      ]
    },
  ],
  admin: {
    group: 'Products',
    useAsTitle: 'name',
    defaultColumns: ["name", "categories"],
  },
};

export default ProductType;
