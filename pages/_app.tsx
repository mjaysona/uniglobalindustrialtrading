import App from 'next/app';
import React, { Fragment } from 'react';
import Header from '../components/Header';
import { MenuType } from '../globals/Menu';

import '../css/style.scss';
import { ContactType } from '../globals/Contact';
import { SocialsType } from '../globals/Socials';
import { useRouter } from 'next/router';
import { ProductBrandCollectionType } from '../collections/ProductBrand';

export type GlobalProps = {
  menu: MenuType,
  contact: ContactType,
  socials: SocialsType,
  brands: ProductBrandCollectionType[],
}

type AppProps = {
  pageProps: unknown,
  Component: React.FC<GlobalProps>,
} & GlobalProps;

const MyApp = (appProps: AppProps): React.ReactElement => {
  const {
    Component,
    pageProps,
    menu,
    contact,
    socials,
    brands,
  } = appProps;

  const router = useRouter();
  const currentRoute = router.pathname;
  
  return (
    <Fragment>
      <Header
        contact={contact}
        menu={menu}
        isHomepage={currentRoute === '/'}
      />
      <Component
        {...pageProps}
        menu={menu}
        contact={contact}
        socials={socials}
        brands={brands}
      />
    </Fragment>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [
    menu,
    contact,
    socials,
    brands,
  ] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/menu`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/contact`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/socials`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/productBrand`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    menu,
    contact,
    socials,
    brands: brands.docs,
  }
}

export default MyApp;
