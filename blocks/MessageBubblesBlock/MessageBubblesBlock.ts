import { Block } from 'payload/types';

export const MessageBubblesBlock: Block = {
  slug: 'messageBubbles',
  labels: {
    singular: 'Message Bubbles',
    plural: 'Message Bubbles',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
    },
    {
      name: 'message',
      labels: {
        singular: 'Message',
        plural: 'Messages',
      },
      type: 'array',
      fields: [
        {
          name: 'avatar',
          label: 'Avatar / Logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'text',
          required: true,
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'subName',
          label: 'Subname',
          type: 'text',
        },
      ],
    },
  ],
};


export default MessageBubblesBlock;
