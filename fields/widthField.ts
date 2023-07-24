import { Field } from 'payload/types';

export type WidthFieldType = {
  width: string,
};

const widthField: Field = {
  name: 'width',
  label: 'Width',
  type: 'select',
  required: true,
  defaultValue: 'full',
  options: [
    {
      label: 'Half',
      value: 'half',
    },
    {
      label: 'Full',
      value: 'full',
    },
  ]
};

export default widthField;