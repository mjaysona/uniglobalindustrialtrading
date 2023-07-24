import { Block, FieldHook } from 'payload/types';
import widthField, { WidthFieldType } from '../../fields/widthField';
import link, { ButtonType } from '../../fields/link';

export type FieldType = {
  type: string,
  name: string,
  label: string,
  placeholder?: string,
  id: string,
  value?: string,
}

export type FormBlockType = {
  name: string,
  description: string,
  fields: FieldType[],
  link: ButtonType,
} & WidthFieldType;

const formatName: FieldHook = async ({ value, data, siblingData }) => {
  return siblingData?.label?.replace(/ /g, '-').toLowerCase();
};

export const FormBlock: Block = {
  slug: 'form',
  labels: {
    singular: 'Form',
    plural: 'Form',
  },
  fields: [
    widthField,
    {
      name: 'name',
      label: 'Form name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Form description',
      type: 'textarea',
    },
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
            {
              label: 'Checkbox field',
              value: 'textarea',
            },
          ],
        },
        {
          type: 'row',
          admin: {
            condition: (_, siblingData) => (
              siblingData.type === 'text'
              || siblingData.type === 'password'
              || siblingData.type === 'email'
              || siblingData.type === 'textarea'
            ),
          },
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              admin: {
                width: '50%',
                readOnly: true,
              },
              hooks: {
                beforeValidate: [
                  formatName,
                ],
              },
            },
            {
              name: 'label',
              label: 'Label',
              required: true,
              type: 'text',
              admin: {
                width: '30%',
              },
            },
            {
              name: 'placeholder',
              label: 'Placeholder',
              type: 'text',
              admin: {
                width: '30%',
              },
            },
            {
              name: 'default',
              label: 'Default value',
              type: 'text',
              admin: {
                width: '30%',
              },
            },
          ],
        },
        {
          type: 'row',
          admin: {
            condition: (_, siblingData) => (
              siblingData.type === 'checkbox'
            ),
          },
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              admin: {
                width: '50%',
                readOnly: true,
              },
              hooks: {
                beforeValidate: [
                  formatName,
                ],
              },
            },
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'default',
              label: 'Default selection',
              type: 'radio',
              options: [
                {
                  label: 'true',
                  value: 'True',
                },
                {
                  label: 'false',
                  value: 'False',
                }
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    link(),
  ],
};


export default FormBlock;
