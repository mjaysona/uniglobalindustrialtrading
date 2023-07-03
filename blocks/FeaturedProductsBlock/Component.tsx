import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import { FeaturedProductsBlockType } from './FeaturedProductsBlock';

export const Component: React.FC<FeaturedProductsBlockType> = (props) => {
  const {
    title,
    description,
    product,
  } = props;

  return (
    <div className={classes['featured-products']}>
      {title && (<h3>{title}</h3>)}
      {description && (
        <RichText
          content={description}
          className={classes.content}
        />
      )}
      <div className={classes['featured-products__blocks']}>
        {product.length && (
          product.map((item) => (
            <div
              className={classes['featured-products__block']}
              key={item.id}
            >
              <h4>{item.brandName}</h4>
              <div>IMAGE HERE</div>
              <p>{item.productName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
