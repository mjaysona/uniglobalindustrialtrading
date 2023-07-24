import React from 'react';
import { BannerBlockType } from './BannerBlock';
import Link from 'next/link';
import classes from './index.module.scss';
import Container from '../../components/Container';
import Button from '../../components/Button';

export const Component: React.FC<BannerBlockType> = (props) => {
  const {
    headline,
    description,
    link,
    image,
    imageOverlay,
    type,
  } = props;

  return (
    <div
      className={[
        classes['banner'],
        type === 'main' ? classes['banner__main'] : classes['banner__default'],
      ].join(' ')}
      style={{ backgroundImage: `url(${image.url})` }}
    >
      <div
        className={type === 'main' ? classes['banner__main__overlay'] : '' }
        style={{
          backgroundImage: imageOverlay ? `url(${imageOverlay.url})` : 'none',
        }}
      >
        <Container>
          <div className={classes['banner__content']}>
            <h1>{headline}</h1>
            <p>{description}</p>
            {link.page && link.page.slug && 
              <div className={classes['banner__content__cta']}>
                <Button
                  id={link.id}
                  label={link.label}
                  url={`/${link.page.slug}`}
                  type={link.type}
                  buttonType='secondary'
                />
              </div>
            }
          </div>
        </Container> 
      </div>
    </div>
  );
};
