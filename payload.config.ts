import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Products from './collections/Products';
import ProductGroup from './collections/ProductGroup';
import ProductPurpose from './collections/ProductPurpose';
import Menu from './globals/Menu';
import Contact from './globals/Contact';
import Socials from './globals/Socials';
import ProductBrand from './collections/ProductBrand';
import { LexicalPlugin } from 'payload-plugin-lexical';
import nestedDocs from '@payloadcms/plugin-nested-docs';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  globals: [
    Menu,
    Contact,
    Socials,
  ],
  collections: [
    Page,
    Media,
    Products,
    ProductPurpose,
    ProductGroup,
    ProductBrand,
  ],
  plugins: [
    LexicalPlugin({}),
    nestedDocs({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string || doc.name as string,
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ]
});
