import React from 'react';
import { Serialize } from './ReactSerializer';
import classes from './index.module.scss';

const LexicalRichText: React.FC<{className?: string, content: any}> = ({ className, content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={classes['richtext']}>
      {Serialize(content)}
    </div>
  );
};

export default LexicalRichText;
