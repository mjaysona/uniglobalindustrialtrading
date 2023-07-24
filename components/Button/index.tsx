import React from "react";
import classes from './index.module.scss';
import { CtaType } from '../../fields/link';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { dynamicIconImports, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Button: React.FC<CtaType> = ({
  label,
  type = 'button',
  buttonType = 'default',
  isNewTab,
  url,
  hasIcon,
  iconName,
  iconPlacement,
}) => {
  const Icon = ({ name, color, size }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name]);
  
    return <LucideIcon color={color} size={size} />;
  };

  return (
    <button className={[
      classes['button'],
      classes[`button--${buttonType}`],
      type !== 'button' ? classes[`button--link`] : '',
    ].join(' ')}>
      {(hasIcon && iconName && iconPlacement === 'left') && (
        <div className={classes['button__icon--left']}>
          {Icon({ name: iconName, size: 16 })}
        </div>
      )}
      {type === 'button' && (
        <span>{label}</span>
      )}
      {(type === 'page' || type === 'custom') && (
        <Link
          href={`${url}`}
          className={classes.button}
          target={isNewTab ? '_blank' : ''}
        >
          {label}
        </Link>
      )}
      {(hasIcon && iconName && iconPlacement === 'right') && (
        <div className={classes['button__icon--right']}>
          {Icon({ name: iconName, size: 16 })}
        </div>
      )}
    </button>
  );
};
export default Button;
