import { Field } from 'payload/types';
import { PageType } from '../collections/Page';
import { dynamicIconImports } from 'lucide-react';

type Props = {
  type: 'page' | 'custom' | 'button',
  label: string,
  id: string,
}

export type ButtonType = {
  buttonType: 'primary' | 'secondary' | 'default',
  hasIcon?: boolean,
  iconName?: keyof typeof dynamicIconImports,
  iconPlacement?: 'left' | 'right',
} & Props;

export type LinkType = {
  isNewTab?: boolean,
  url?: string,
  page?: PageType,
} & Props;

export type CtaType = ButtonType & LinkType;

type ParamsType = {
  isButton?: boolean,
  isCustom?: boolean,
  required?: boolean,
};

const link: (params?: ParamsType) => Field = ({
  isCustom = false,
  required = true,
} = {}): Field => {
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
          {
            label: 'Button',
            value: 'button',
          },
        ],
        admin: {
          condition: () => !isCustom,
        },
      },
      {
        name: 'buttonType',
        type: 'radio',
        defaultValue: 'default',
        options: [
          {
            label: 'Primary',
            value: 'primary',
          },
          {
            label: 'Secondary',
            value: 'secondary',
          },
          {
            label: 'Default',
            value: 'default',
          },
        ],
        admin: {
          condition: (_, siblingData) => siblingData.type === 'button',
        },
      },
      {
        type: 'row',
        fields: [
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: required,
          },
          {
            name: 'page',
            label: 'Page link to',
            type: 'relationship',
            required: required,
            relationTo: 'pages',
            admin: {
              condition: (_, siblingData) => {
                return siblingData.type === 'page' && !isCustom && siblingData.type !== 'button';
              }
            },
          },
          {
            name: 'url',
            label: 'Url',
            type: 'text',
            required: required,
            admin: {
              condition: (_, siblingData) => {
                return siblingData.type === 'custom' || isCustom && siblingData.type !== 'button';
              }
            },
          },
        ],
      },
      {
        name: 'isNewTab',
        label: 'Open in new tab?',
        type: 'checkbox',
        defaultValue: false,
        required: required,
        admin: {
          condition: (_, siblingData) => siblingData.type === 'custom' && siblingData.type !== 'button',
        },
      },
      {
        name: 'hasIcon',
        label: 'Has an icon?',
        type: 'checkbox',
        defaultValue: false,
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData.type === 'button',
        },
      },
      {
        name: 'iconPlacement',
        label: 'Icon placement',
        type: 'radio',
        defaultValue: 'left',
        required: true,
        options: [
          {
            label: 'Left',
            value: 'left',
          },
          {
            label: 'Right',
            value: 'right',
          },
        ],
        admin: {
          condition: (_, siblingData) => siblingData.hasIcon && siblingData.type === 'button',
        },
      },
      {
        name: 'iconName',
        label: 'Icon name',
        type: 'text',
        required: true,
        admin: {
          description: 'Refer to https://lucide.dev/icons/',
          condition: (_, siblingData) => siblingData.hasIcon && siblingData.type === 'button',
        }
      },
    ],
  };
}

export default link;