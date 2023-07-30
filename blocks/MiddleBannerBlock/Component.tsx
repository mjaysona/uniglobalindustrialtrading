import React from 'react';
import classes from './index.module.scss';
import { MiddleBannerBlockType } from './MiddleBannerBlock';


export const Component: React.FC<MiddleBannerBlockType> = (props) => {
  const {
    headline,
    images = [],
    items = [],
  } = props;

  return (
    <div className={classes['middle-banner']}>
      {images.length && (
        <div className={classes['middle-banner__images']}>
          {images.map((image) => (
            <div
              key={image.id}
              className={classes['middle-banner__image']}
            >
              <img src={image.image.url} />
            </div>
          ))}
          {headline && (
            <h4 className={classes['middle-banner__headline']}>
              {headline}
            </h4>
          )}
        </div>
      )}
      {items.length && (
        <div
          className={classes['middle-banner__items']}
          style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)`}}
        >
          {items.map((item) => (
            <div 
              key={item.id}
              className={classes['middle-banner__item']}
            >
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
