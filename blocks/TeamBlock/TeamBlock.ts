import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type TeamBlockType = {
  teams: {
    id: string,
    type?: string,
    hasDescription: boolean,
    members: {
      id: string,
      name: string,
      position: string,
      description?: unknown,
      photo: MediaType,
    }[],
  }[],
}

export const TeamBlock: Block = {
  slug: 'team',
  labels: {
    singular: 'Team',
    plural: 'Team',
  },
  fields: [
    {
      name: 'teams',
      label: 'Teams',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'type',
          label: 'Type',
          type: 'text',
        },
        {
          name: 'hasDescription',
          label: 'Has description?',
          type: 'checkbox',
          required: true,
        },
        {
          name: 'members',
          label: 'Members',
          type: 'array',
          required: true,
          admin: {
            condition: (_, siblingData) =>  siblingData.hasDescription,
          },
          fields: [
            {
              name: 'photo',
              label: 'Picture',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              required: true,
            },
            {
              name: 'position',
              label: 'Position',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Description',
              type: 'richText',
            },
          ],
        },
        {
          name: 'members',
          label: 'Members',
          type: 'array',
          required: true,
          admin: {
            condition: (_, siblingData) =>  !siblingData.hasDescription,
          },
          fields: [
            {
              name: 'photo',
              label: 'Picture',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              required: true,
            },
            {
              name: 'position',
              label: 'Position',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};


export default TeamBlock;
