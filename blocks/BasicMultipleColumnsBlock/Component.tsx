import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.scss';
import { BasicMultipleColumnsBlockType } from './BasicMultipleColumnsBlock';
import Container from '../../components/Container';


export const Component: React.FC<BasicMultipleColumnsBlockType> = (props) => {
  const {
    title,
    description,
    columnCount,
    hasImages,
    imagesType,
    columns,
  } = props;

  return (
    <div className={classes['basic-multiple-columns']}>
      <Container>
        <div className={classes['basic-multiple-columns__content']}>
          <div className={classes['basic-multiple-columns__header']}>
            {title && (<h2>{title}</h2>)}
            {description && (
              <RichText
                content={description}
                className={classes.content}
              />
            )}
          </div>
          {columns.length && (
            <div className={classes['basic-multiple-columns__grouped-items']}>
              {columns.map(({title, description, id, image}) => (
                <div
                  className={classes['basic-multiple-columns__item']}
                  key={id}
                >
                  {(hasImages && image) && (
                    <div
                      className={classes['basic-multiple-columns__item__image']}
                    >
                      <img src={image.url} />
                    </div>
                  )}
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
