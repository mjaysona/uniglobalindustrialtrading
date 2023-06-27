import { GlobalConfig } from 'payload/types';
import link, { LinkType } from '../fields/link';

export type SocialsType = {
  socials: LinkType[],
}

const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      name: 'socials',
      labels: {
        singular: 'Social Media',
        plural: 'Socials',
      },
      type: 'array',
      fields: [
        link(true),
      ],
    },
  ],
};

export default Socials;
