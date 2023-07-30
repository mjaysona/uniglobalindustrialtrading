import { Field } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

const slug: (field?: string) => Field = (field = 'title'): Field => {
  return {
    name: 'slug',
    label: 'Slug',
    type: 'text',
    admin: {
      position: 'sidebar',
    },
    hooks: {
      beforeValidate: [
        formatSlug(field),
      ],
    },
  }
};

export default slug;