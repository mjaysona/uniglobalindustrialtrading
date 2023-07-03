import { Block } from 'payload/types';

export const VerticalTabsBlock: Block = {
  slug: 'verticalTabs',
  labels: {
    singular: 'Vertical Tabs',
    plural: 'Vertical Tabs',
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
      name: 'tabs',
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      required: true,
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'Tab name',
          required: true,
          type: 'text',
        },
        {
          name: 'content',
          label: 'Content',
          type: 'array',
          required: true,
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
              required: true,
            },
          ]
        },
      ]
    },
    {
      name: 'hasForm',
      label: 'With form?',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'form',
      label: 'Form',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.hasForm,
      },
      fields: [
        {
          name: 'fields',
          labels: {
            singular: 'Field',
            plural: 'Fields',
          },
          type: 'array',
          required: true,
          fields: [
            {
              name: 'type',
              label: 'What field?',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Text field',
                  value: 'text',
                },
                {
                  label: 'Email field',
                  value: 'email',
                },
                {
                  label: 'Number field',
                  value: 'number',
                },
                {
                  label: 'Textarea field',
                  value: 'textarea',
                },
              ]
            }
          ]
        },
      ],
    },
  ],
};


export default VerticalTabsBlock;
