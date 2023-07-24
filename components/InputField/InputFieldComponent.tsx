import React, { ChangeEvent, useState } from "react";
import classes from './index.module.scss';
import { FieldType } from '../../blocks/FormBlock/FormBlock';

type HTMLInputType = {
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void,
} & FieldType

const InputFieldComponent: React.FC<HTMLInputType > = ({
  type = 'text',
  placeholder = '',
  name = '',
  value = '',
  onInputChange = () => {},
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onInputChange(e);
  };

  return (
    <div className={classes['input']}>
      <input
        name={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  )
};

export default InputFieldComponent;
