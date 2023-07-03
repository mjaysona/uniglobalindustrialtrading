import React from 'react';
import { BannerBlockType } from './BannerBlock';
import Link from 'next/link';
import classes from './index.module.scss';

export const Component: React.FC<BannerBlockType> = (props) => {
  const {
    headline,
    description,
    link,
    image,
  } = props;

  return (
    <div
      className={[classes['banner'], classes['banner__main']].join(' ')}
      style={{
        backgroundImage: `url(${image.url})`,
      }}
    >
      <h1>{headline}</h1>
      <p>{description}</p>
      <Link href={`/${link.page.slug}`}>
        {link.label}
      </Link>
    </div>
  );
};
