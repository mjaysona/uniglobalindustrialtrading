import { Block } from 'payload/types';

export const CardImagesBlock: Block = {
  slug: 'cardImages',
  labels: {
    singular: 'Images inside cards',
    plural: 'Images inside cards',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'imagesType',
      label: 'What kind of images?',
      type: 'radio',
      defaultValue: 'vector',
      required: true,
      options: [
        {
          label: 'Vectors / Logos',
          value: 'vector',
        },
        {
          label: 'Photos',
          value: 'photo',
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.hasImages
      },
    },
    {
      name: 'images',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
      ],
    },
  ],
};


export default CardImagesBlock;
