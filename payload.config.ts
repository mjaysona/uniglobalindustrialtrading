import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Product from './collections/Product';
import ProductCategories from './collections/ProductCategory';
import ProductType from './collections/ProductType';
import ProductTag from './collections/ProductTag';
import Menu from './globals/Menu';
import Contact from './globals/Contact';
import Socials from './globals/Socials';

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
    ProductType,
    ProductCategories,
    Product,
    ProductTag,
  ],
});
