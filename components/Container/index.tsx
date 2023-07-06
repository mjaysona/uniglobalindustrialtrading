import React from 'react';
import classes from './index.module.scss';

const Container: React.FC = ({ children }) => {
  return (
    <div className={classes['container']}>
      <div className={classes['container__wrapper']}>
        {children}
      </div>
    </div>
  );
};

export default Container;
