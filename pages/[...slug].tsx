import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import RenderBlocks from '../components/RenderBlocks';
import Template from '../components/Template';
import { PageType } from '../collections/Page';
import { GlobalProps } from './_app';
import { ProductCollectionType } from '../collections/Products';
import { ProductPurposeCollectionType } from '../collections/ProductPurpose';
import { ProductGroupCollectionType } from '../collections/ProductGroup';
import { ProductBrandCollectionType } from '../collections/ProductBrand';

export type Data = {
  productPurpose: ProductPurposeCollectionType,
  productGroup: ProductGroupCollectionType,
  productBrand: ProductBrandCollectionType,
  products: ProductCollectionType,
};

export type Props = {
  page?: PageType,
  data?: Data,
} & GlobalProps;

const Page: React.FC<Props> = (props) => {
  const { page, menu, contact, socials, brands, data } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template
      menu={menu}
      contact={contact}
      socials={socials}
      brands={brands}
    >
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <RenderBlocks
        data={data}
        layout={page.layout}
        contact={contact}
        socials={socials}
      />
    </Template>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (ctx) => {
  let slug = 'home';

  if (typeof ctx.params?.slug === 'string') {
    slug = ctx.params?.slug;
  } else if (Array.isArray(ctx.params?.slug)) {
    slug = ctx.params?.slug[ctx.params?.slug.length - 1];
  } else {
    slug = 'home';
  }

  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`);
  const pageData = await pageReq.json();

  let props: { page: any, data?: Data} = {
    page: pageData.docs[0],
  };

  if (slug === 'product-list') {
    const productsData = await getProducts();

    props.data = { ...productsData };
  }

  return {
    props,
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100`);
  const pageData = await pageReq.json();

  return {
    paths: pageData.docs.map(({ breadcrumbs }) => {
      return {
        params: {
          slug: breadcrumbs?.[breadcrumbs.length - 1]?.url?.replace(/^\/|\/$/g, '').split('/')
        },
      }
    }),
    fallback: false,
  };
};

export const getProducts = async (): Promise<Data> => {
  const productReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?limit=100`);
  const productData = await productReq.json();
  const productBrandReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/productBrand?limit=100`);
  const productBrandData = await productBrandReq.json();
  const productPurposeReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/productPurpose?limit=100`);
  const productPurposeData = await productPurposeReq.json();
  const productGroupReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/productGroup?limit=100`);
  const productGroupData = await productGroupReq.json();

  const data = {
    productPurpose: productPurposeData.docs,
    productGroup: productGroupData.docs,
    productBrand: productBrandData.docs,
    products: productData.docs,
  }

  return data;
}