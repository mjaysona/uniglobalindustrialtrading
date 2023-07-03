import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import { SlidingCardsBlockType } from './SlidingCardsBlock';

export const Component: React.FC<SlidingCardsBlockType> = (props) => {
  const { 
    title,
    description,
    card,
  } = props;

  return (
    <div className={classes['sliding-cards']}>
      {title && (<h2>{title}</h2>)}
      {description && (
        <RichText
          content={description}
        />
      )}
      {card.length && (
        <div className={classes['sliding-cards-type__cards']}>
          {card.map((card) => (
            <div
              className={classes['sliding-cards-type__card']}
              key={card.id}
            >
              {card.logoHeader && (
                <div className={classes['sliding-cards-type__card__image']}>
                  IMAGE HERE
                </div>
              )}
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
