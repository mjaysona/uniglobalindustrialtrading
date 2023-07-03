import React from 'react';
import RichText from '../../components/RichText';
import { ImageContentRowBlockType } from './ImageContentRowBlock';
import Link from 'next/link';
import { LinkType } from '../../fields/link';
import classes from './index.module.scss';

export const Component: React.FC<ImageContentRowBlockType> = (props) => {
  const {
    title,
    description,
    list,
    link,
  } = props;

  return (
    <div className={classes['image-content-row']}>
      <div className={classes['image-content-row__image']}>
        IMAGE HERE
      </div>
      <div className={classes['image-content-row__content']}>
        <h2>{title}</h2>
        <RichText content={description}/>
        <div className={classes['image-content-row__content__list']}>
          <div className={classes['image-content-row__list__items']}>
            {list.map(({ link, id }: LinkType) => (
              <div key={id} className={classes['image-content-row__list__item']}>
                <Link href={`/${link.page.slug}`}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <div className={classes['image-content-row__list__cta']}>
            <Link href={`/${link.page.slug}`}>
              {link.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
