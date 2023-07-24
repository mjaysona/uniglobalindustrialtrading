import React, { ChangeEvent } from 'react';
import { FieldType, FormBlockType } from './FormBlock';
import classes from './index.module.scss';
import InputFieldComponent from '../../components/InputField';
import TextareaField from '../../components/TextareaField';
import Button from '../../components/Button';

export const Component: React.FC<FormBlockType> = ({
  name,
  description,
  fields,
  link,
}) => {
  const renderTextField = ({
    type,
    name,
    label,
    placeholder,
    id,
  }: FieldType): JSX.Element => {
    return (
      <InputFieldComponent
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        id={id}
        onInputChange={handleInputChange}
        key={id}
      />
    )
  };

  const renderTextArea = ({
    type,
    name,
    label,
    placeholder,
    id,
  }: FieldType): JSX.Element => {
    return (
      <TextareaField
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        id={id}
        onInputChange={handleInputChange}
        key={id}
      />
    )
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
  }

  return (
    <div className={classes['host']}>
      <div className={classes['form']}>
        {name && <h5>{name}</h5>}
        {description && <p>{description}</p>}
        {fields.map((field: FieldType) => {
          if (
            field.type === 'text' ||
            field.type === 'number' ||
            field.type === 'email'
          ) {
            return renderTextField(field)
          }
          
          if (field.type === 'textarea') return renderTextArea(field);
        })}
        <div className={classes['form__ctas']}>
          <div className={classes['form__ctas__positive']}>
            <Button
              id={link.id}
              label={link.label}
              type={link.type}
              buttonType={link.buttonType}
              hasIcon
              iconName={link.iconName}
              iconPlacement={link.iconPlacement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
