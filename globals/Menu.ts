import { GlobalConfig } from 'payload/types';
import { PageType } from '../collections/Page';

export type MenuType = {
  menuItems: {
    id: string,
    name: string,
    page: PageType,
  }[],
}

const Menu: GlobalConfig = {
  slug: 'menu',
  label: 'Menu',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'menuItems',
      label: 'Menu Items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        }
      ],
    },
  ],
};

export default Menu;
