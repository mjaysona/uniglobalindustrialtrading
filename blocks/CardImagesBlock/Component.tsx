import React from 'react';
import classes from './index.module.scss';
import { CardImagesType } from './CardImagesBlock';
import getPageUrl from '../../utilities/getPageUrl';
import Link from 'next/link';

export const Component: React.FC<CardImagesType> = (props) => {
  const { title, items, link } = props;

  return (
    <div className={classes['cards-images']}>
      <h4>{title}</h4>
      <div className={classes['cards-images__items']}>
        {items.map((item) => (
          <div
            key={item.id}
            className={classes['cards-images__item']}
            style={{ backgroundImage: `url(${item.image.url})` }}
          >
            <p>{item.name}</p>
          </div>
        ))}
        {link.page && (
          <Link
            className={classes['cards-images__cta']}
            href={getPageUrl(link)}
          >
            {link.label}
          </Link>
        )}
      </div>
    </div>
  );
};
