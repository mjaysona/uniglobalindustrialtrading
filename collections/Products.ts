import { CollectionConfig } from 'payload/types';

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
  ],
};

export default Products;
