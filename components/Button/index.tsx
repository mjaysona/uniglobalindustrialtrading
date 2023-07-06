import * as React from "react";
import classes from './index.module.scss';

export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'default',
  ghost?: boolean,
  size?: 'sm' | 'md' | 'lg',
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'md',
  ghost,
}) => (
  <button className={[
    classes['button'],
    classes[`button--${type}`],
    classes[`button--${size}`],
    ...ghost ? [classes[`button--${type}--ghost`]] : [],
  ].join(' ')}>
    {children}
  </button>
);
export default Button;
