import React, { useState, useEffect } from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogInButton from "../component/LoginButton";
import {
  validateEmailOrPhoneNumber,
  validatePassword,
} from "../lib/api/validateFields";

const Login = () => {
  const navigate = useNavigate();
  const [telEmail, setTelEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    telEmail: "",
    password: "",
  });

  const handleNextClick = () => {
    const telEmailError = validateEmailOrPhoneNumber(telEmail);
    const passwordError = validatePassword(password);

    if (telEmailError || passwordError) {
      setErrors({
        telEmail: telEmailError || "",
        password: passwordError || "",
      });
    } else {
      // 通常はホーム画面
      // navigate("/nextPage");
      // 一時的にプロフ変更画面に飛ぶために遷移先の変更をしている。
      navigate("/Home");
    }
  };

  return (
    <div className="container">
      <img src={LogoImage} className="logo" />
      <div className="form-container">

        <h1>ログイン</h1>

        <div className="text-field-container">
          <TextFormField
            type={"text"}
            placeholder={"電話番号(ハイフンなし)/メールアドレス"}
            value={telEmail}
            onChange={(e) => setTelEmail(e.target.value)}
          />
          {errors.telEmail && (
            <div className="error-message">{errors.telEmail}</div>
          )}
        </div>

        <div className="text-field-container">
          <TextFormField
            type={"password"}
            placeholder={"パスワード"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <LogInButton onClick={handleNextClick} label="ログイン" />

        <div className="signup-link">
          <span className="signup-text">新規アカウント作成は</span>
          <Link to="/Registration">
            <span className="link-text">こちら</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
