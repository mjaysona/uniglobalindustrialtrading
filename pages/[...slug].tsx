import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import getConfig from 'next/config';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/Template';
import { PageType } from '../collections/Page';
import { MenuType } from '../globals/Menu';
import { ContactType } from '../globals/Contact';
import { SocialsType } from '../globals/Socials';

export type Props = {
  page?: PageType,
  menu: MenuType,
  contact: ContactType,
  socials: SocialsType,
}

const Page: React.FC<Props> = (props) => {
  const { page, menu, contact, socials } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      menu={menu}
      contact={contact}
      socials={socials}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      {/* <div className={classes.featuredImage}>
        {page.image && (
          <img
            src={`${SERVER_URL}/media/${page.image.sizes?.feature?.filename || page.image.filename}`}
            alt={page.image.alt}
          />
        )}
      </div> */}
      <RenderBlocks layout={page.layout} />
    </Template>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || 'home';

  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`);
  const pageData = await pageReq.json();

  return {
    props: {
      page: pageData.docs[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100`);
  const pageData = await pageReq.json();

  return {
    paths: pageData.docs.map(({ slug }) => ({
      params: { slug: slug.split('/') },
    })),
    fallback: false,
  };
};