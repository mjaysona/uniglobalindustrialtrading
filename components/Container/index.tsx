import React from 'react';
import classes from './index.module.scss';

type Props = {
  containerized?: boolean,
}

const Container: React.FC<Props> = ({ children, containerized = true }) => {
  return (
    <div className={classes['container']}>
      <div className={[
        classes['container__wrapper'],
        containerized ? classes['container__wrapper--containerized'] : ''
      ].join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Container;
