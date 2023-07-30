import { LinkType } from '../fields/link';

export const getPageUrl = (link: LinkType): string => {
  if (link.page?.breadcrumbs?.length && link.page.parent) {
    return link.page.breadcrumbs[link.page.breadcrumbs.length - 1].url;
  }

  return link.page?.slug;
}

export default getPageUrl;
