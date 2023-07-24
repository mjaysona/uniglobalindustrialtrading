import React, { ChangeEvent, useState } from "react";
import classes from './index.module.scss';
import { FieldType } from '../../blocks/FormBlock/FormBlock';

type HTMLInputType = {
  onInputChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
} & FieldType

const TextareaField: React.FC<HTMLInputType > = ({
  placeholder = '',
  name = '',
  value = '',
  onInputChange = () => {},
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onInputChange(e);
  };

  return (
    <div className={classes['input']}>
      <textarea
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  )
};

export default TextareaField;
