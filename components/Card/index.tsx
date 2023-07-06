import * as React from "react";
import classes from './index.module.scss';

const Card: React.FC = ({ children }) => (
  <div className={classes['card']}>
    {children}
  </div>
);
export default Card;
