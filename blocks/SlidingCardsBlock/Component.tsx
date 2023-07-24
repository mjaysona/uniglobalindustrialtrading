import React, { Fragment } from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.scss';
import Container from '../../components/Container';
import Card from '../../components/Card';
import { SlidingCardsBlockType } from './SlidingCardsBlock';

export const Component: React.FC<SlidingCardsBlockType> = (props) => {
  const {
    title,
    description,
    card,
  } = props;``

  return (
    <div className={classes['host']}>
      <div className={classes['sliding-cards']}>
        <div className={classes['sliding-cards__header']}>
          {title && (<h2>{title}</h2>)}
          {description && (
            <RichText content={description} />
          )}
        </div>
      </div>
      {card.length && (
        <div className={classes['sliding-cards__items']}>
          {card.map((item) => (
            <div
              className={classes['sliding-cards__item']}
              key={item.id}
            >
              <Card>
                <div className={classes['sliding-cards__item__logo']}>
                  <img src={item.logoHeader.url} />
                </div>
                <div className={classes['sliding-cards__item__title']}>
                  <h5>{item.title}</h5>
                </div>
                <div className={classes['sliding-cards__item__description']}>
                  {item.description}
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
