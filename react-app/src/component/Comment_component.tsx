import React from "react";
import "./Textformfield_component.css";

// プロパティの型宣言
interface CommentFormFieldPropos {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string; // エラーメッセージのプロパティ
  maxLength?: number; // 最大文字数
}

const CommentFormField: React.FC<CommentFormFieldPropos> = ({
  placeholder,
  value,
  onChange,
  error,
  maxLength = 200, // デフォルトで最大200文字
}) => {
  return (
    <div className="textformfield_wrapper">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength} // 最大文字数を指定
        className="textformfield_component"
      />
      <p className="char-count">
        {value.length}/{maxLength}文字
      </p>
      {error && <p className="error-message">{error}</p>} {/* エラーメッセージ表示 */}
    </div>
  );
};

export default CommentFormField;