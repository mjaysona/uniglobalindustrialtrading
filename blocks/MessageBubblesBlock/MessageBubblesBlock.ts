import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type MessageBubblesBlockType = {
  title: string,
  description?: unknown,
  backgroundImage: MediaType,
  noAvatarImage: MediaType,
  message: {
    avatar?: MediaType,
    message: string,
    name: string,
    subName: string,
    id: string,
  }[],
}

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
      name: 'backgroundImage',
      label: 'Background',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'noAvatarImage',
      label: 'Image to show when there is no avatar provided',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
