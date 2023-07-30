import React from 'react';
import classes from './index.module.scss';
import { SimpleListBlockType } from './SimpleListBlock';
import RichText from '../../components/RichText';

export const Component: React.FC<SimpleListBlockType> = (props) => {
  const { title, description, columnCount, items } = props;

  return (
    <div className={classes['simple-list']}>
      <div className={classes['simple-list__content']}>
        <div className={classes['simple-list__content__header']}>
          {title && <h2>{title}</h2>}
          {description && (
            <RichText
              content={description}
              className={classes.content}
            />
          )}
        </div>
        <div
          className={classes['simple-list__content__items']}
          style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
        >
          {items.map((item) => (
            <div key={item.id} className={classes['simple-list__content__item']}>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
