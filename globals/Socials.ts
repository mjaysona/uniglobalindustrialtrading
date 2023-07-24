import { GlobalConfig } from 'payload/types';
import link, { LinkType } from '../fields/link';

export type SocialType = {
  id: string,
  link: LinkType,
}

export type SocialsType = {
  socials: SocialType[],
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
        link({ isCustom: true }),
      ],
    },
  ],
};

export default Socials;
