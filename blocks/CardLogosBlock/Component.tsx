import React from 'react';
import classes from './index.module.scss';
import { CardLogosBlockType } from './CardLogosBlock';
import Image from 'next/image';
import Card from '../../components/Card';
import RichText from '../../components/RichText';

export const Component: React.FC<CardLogosBlockType> = (props) => {
  const { title, description, items } = props;

  return (
    <div className={classes['cards-logo']}>
      <div className={classes['cards-logo__content']}>
        <div className={classes['cards-logo__content__header']}>
          {title && <h4>{title}</h4>}
          {description && (
            <RichText
              content={description}
              className={classes.content}
            />
          )}
        </div>
        <div className={classes['cards-logo__content__items']}>
          {items.map((item) => (
            <Card>
              <div className={classes['cards-logo__content__item']}>
                <Image width={80} height={80} src={item.logo.url} alt={`${item.name} logo`}/>
                <div>{item.name}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
