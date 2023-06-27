import { CollectionConfig } from 'payload/types';

const ProductTag: CollectionConfig = {
  slug: 'productTags',
  labels: {
    singular: 'Product Tag',
    plural: 'Product Tags',
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
    defaultColumns: ["name"],
  },
};

export default ProductTag;
