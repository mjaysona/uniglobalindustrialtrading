import { GlobalConfig } from 'payload/types';
import link, { LinkType } from '../fields/link';

export type MenuType = {
  menuItems: LinkType[],
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
        link(),
      ],
    },
  ],
};

export default Menu;
