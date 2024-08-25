import React from "react";
import './Textformfield_component.css';

//プロパティの型宣言
interface TextFormFieldPropos{
    type: string;
    placeholder: string;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFormField:React.FC<TextFormFieldPropos> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="textformfield_component"
    />
  );
};

export default TextFormField;