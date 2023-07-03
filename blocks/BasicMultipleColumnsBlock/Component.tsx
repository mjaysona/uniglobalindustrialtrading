import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import { BasicMultipleColumnsBlockType } from './BasicMultipleColumnsBlock';


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
      {title && (<h2>{title}</h2>)}
      {description && (
        <RichText
          content={description}
          className={classes.content}
        />
      )}
      {columns.length && (
        <div className={classes['basic-multiple-columns__blocks']}>
          {columns.map(({title, description, id, image}) => (
            <div
              className={classes['basic-multiple-columns__block']}
              key={id}
            >
              {(hasImages && image) && (
                <div
                  className={classes['basic-multiple-columns__block__image']}
                >
                  IMAGE HERE
                </div>
              )}
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
