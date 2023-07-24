import React from 'react';
import classes from './index.module.scss';
import { CardImagesType } from './CardImagesBlock';

export const Component: React.FC<CardImagesType> = (props) => {
  const { title, items } = props;

  return (
    <div className={classes['cards-images']}>
      <h4>{title}</h4>
      <div className={classes['cards-images__items']}>
        {items.map((item) => (
          <div
            className={classes['cards-images__item']}
            style={{ backgroundImage: `url(${item.image.url})` }}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
