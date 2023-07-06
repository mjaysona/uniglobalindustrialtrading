import App from 'next/app';
import React, { Fragment } from 'react';
import Header from '../components/Header';
import { MenuType } from '../globals/Menu';

import '../css/style.scss';
import { ContactType } from '../globals/Contact';
import { SocialsType } from '../globals/Socials';
import { useRouter } from 'next/router';

type AppProps = {
  pageProps: unknown,
  Component: React.FC<{
    menu: MenuType,
    contact: ContactType,
    socials: SocialsType,
  }>,
} & {
  menu: MenuType,
  contact: ContactType,
  socials: SocialsType,
};

const MyApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps, menu, contact, socials } = appProps;

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
  ] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/menu`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/contact`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/socials`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    menu,
    contact,
    socials,
  }
}

export default MyApp;
