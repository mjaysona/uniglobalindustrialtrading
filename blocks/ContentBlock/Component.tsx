import React from 'react';
import { ContentBlockType } from './ContentBlock';
import classes from './index.module.scss';
import LexicalRichText from '../../components/LexicalRichText';

export const Component: React.FC<ContentBlockType> = (props) => {
  const { content } = props;
  const nodes = {
    nodes: content.jsonContent.root.children,
  };

  return (
    <div className={classes['host']}>
      <LexicalRichText
        content={nodes}
        className={classes['content-block__richtext']}
      />
    </div>
  );
};
