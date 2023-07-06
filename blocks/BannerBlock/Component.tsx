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
  } = props;

  return (
    <div
      className={[classes['banner'], classes['banner__main']].join(' ')}
      style={{ backgroundImage: `url(${image.url})` }}
    >
      <div
        className={classes['banner__main__overlay']}
        style={{
          backgroundImage: imageOverlay ? `url(${imageOverlay.url})` : 'none',
        }}
      >
        <Container>
          <div className={classes['banner__main__content']}>
              <h1>{headline}</h1>
              <p>{description}</p>
              <div className={classes['banner__main__content__cta']}>
                <Button type='primary' size='lg' ghost>
                  <Link href={`/${link.page.slug}`}>
                    {link.label}
                  </Link>
                </Button>
              </div>
          </div>
        </Container> 
      </div>
    </div>
  );
};
