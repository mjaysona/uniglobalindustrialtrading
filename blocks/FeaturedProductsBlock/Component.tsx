import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.scss';
import { FeaturedProductsBlockType } from './FeaturedProductsBlock';
import Button from '../../components/Button';
import Link from 'next/link';

export const Component: React.FC<FeaturedProductsBlockType> = (props) => {
  const {
    title,
    description,
    product,
  } = props;

  return (
    <div className={classes['featured-products']}>
      <div className={classes['featured-products__content']}>
        <div className={classes['featured-products__header']}>
          {title && (<h2>{title}</h2>)}
          {description && (
            <RichText
              content={description}
              className={classes.content}
            />
          )}
        </div>
        {product.length && (
          <div className={classes['featured-products__grouped-items']}>
            {product.map(({productImage, productName, id, brandName, link}) => (
              <div
                className={classes['featured-products__item']}
                key={id}
              >
                <h4>{brandName}</h4>
                <div
                  className={classes['featured-products__item__image']}
                >
                  <img src={productImage.url} />
                </div>
                <h5>{productName}</h5>
                <Button id={link.id}
                  url={`/${link.page.slug}`}
                  label={link.label}
                  type={link.type}
                  buttonType='primary'
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
