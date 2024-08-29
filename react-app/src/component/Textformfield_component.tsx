import React from "react";
import "./Textformfield_component.css";

//プロパティの型宣言
interface TextFormFieldPropos {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // 追加: エラーメッセージのプロパティ
}

const TextFormField: React.FC<TextFormFieldPropos> = ({
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="textformfield_wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="textformfield_component"
      />
      {error && <p className="error-message">{error}</p>}{" "}
      {/* エラーメッセージを表示 */}
    </div>
  );
};

export default TextFormField;
