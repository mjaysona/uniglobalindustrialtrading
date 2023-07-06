import React from 'react';
import RichText from '../../components/RichText';
import { ImageContentRowBlockType } from './ImageContentRowBlock';
import Link from 'next/link';
import { LinkType } from '../../fields/link';
import classes from './index.module.scss';
import Container from '../../components/Container';
import Button from '../../components/Button';

export const Component: React.FC<ImageContentRowBlockType> = (props) => {
  const {
    title,
    description,
    layout,
    list,
    link,
    image,
  } = props;

  return (
    <Container>
      <div className={[
        classes['image-content-row'],
        classes['image-content-row--extended'],
        classes[`image-content-row--${layout === 'imgRight' ? 'reversed' : 'default'}`],
      ].join(' ')}>
        <div className={classes['image-content-row__image']}>
          <img src={image.url} />
        </div>
        <div className={classes['image-content-row__content']}>
          <h2>{title}</h2>
          <RichText content={description}/>
          <div className={classes['image-content-row__content__list']}>
            <div className={classes['image-content-row__list__items']}>
              {list.map(({ link, id }) => (
                <div key={id} className={classes['image-content-row__list__item']}>
                  <Button type="primary" ghost>
                    <Link href={`/${link.page.slug}`}>
                      {link.label}
                    </Link>
                  </Button>
                </div>
              ))}
              <div className={classes['image-content-row__list__cta']}>
                <Button type="primary">
                  <Link href={`/${link.page.slug}`}>
                    {link.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
