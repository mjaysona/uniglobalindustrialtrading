import { Field } from 'payload/types';
import { PageType } from '../collections/Page';

export type LinkType = {
  link: {
    id: string,
    type: 'page' | 'custom',
    isNewTab?: boolean,
    label: string,
    url?: string,
    page?: PageType,
  },
  id: string,
};

const link: (isCustom?: boolean) => Field = (isCustom = false): Field => {
  console.log('isCustom', isCustom);

  return {
    name: 'link',
    type: 'group',
    fields: [
      {
        name: 'type',
        type: 'radio',
        defaultValue: isCustom ? 'custom' : 'page',
        options: [
          {
            label: 'Page',
            value: 'page',
          },
          {
            label: 'Custom URL',
            value: 'custom',
          },
        ],
        admin: {
          condition: () => !isCustom,
        },
      },
      {
        type: 'row',
        fields: [
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true,
          },
          {
            name: 'page',
            label: 'Page link to',
            type: 'relationship',
            required: true,
            relationTo: 'pages',
            admin: {
              condition: (_, siblingData) => {
                return siblingData.type === 'page' && !isCustom
              }
            },
          },
          {
            name: 'url',
            label: 'Url',
            type: 'text',
            required: true,
            admin: {
              condition: (data, siblingData) => {
                return siblingData.type === 'custom' || isCustom;
              }
            },
          },
        ],
      },
      {
        name: 'isNewTab',
        label: 'Open in new tab?',
        type: 'checkbox',
        defaultValue: true,
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData.type === 'custom'
        },
      },
    ],
  };
}

export default link;