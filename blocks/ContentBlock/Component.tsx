import React from 'react';
import { ContentBlockType } from './ContentBlock';
import classes from './index.module.scss';
import LexicalRichText from '../../components/LexicalRichText';

export const Component: React.FC<ContentBlockType> = (props) => {
  const { title, content } = props;
  const nodes = {
    nodes: content.jsonContent.root.children,
  };

  return (
    <div className={classes['content-block']}>
      <div className={classes['content-block__content']}>
        {title && (
          <div className={classes['content-block__content__header']}>
            {title && <h2>{title}</h2>}
          </div>
        )}
        <div className={classes['content-block__content__body']}>
          <LexicalRichText
            content={nodes}
            className={classes['content-block__richtext']}
          />
        </div>
      </div>
    </div>
  );
};
