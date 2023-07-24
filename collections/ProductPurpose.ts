import { CollectionConfig } from 'payload/types';

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
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
};

export default ProductPurpose;
