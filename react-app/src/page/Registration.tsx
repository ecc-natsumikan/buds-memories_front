import React, { useState } from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import "./Registration.css";
// ボタンの処理のために追加した。
import { useNavigate } from "react-router-dom";
import NextButton from "../component/NextButton";
import {
  validateName,
  validatePhoneNumber,
  validatePassword,
  validateEmail,
  validateBirthday,
} from "../lib/api/validateFields";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    email: "",
    birthday: "",
  });

  const handleNextClick = () => {
    const nameError = validateName(name);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const passwordError = validatePassword(password);
    const emailError = validateEmail(email);
    const birthdayError = validateBirthday(birthday) ? null : "2000-01-01のように入力してください。";

    if (nameError || phoneNumberError || passwordError || emailError) {
      setErrors({
        name: nameError || "",
        phoneNumber: phoneNumberError || "",
        password: passwordError || "",
        email: emailError || "",
        birthday: birthdayError || "",
      });
    } else {
      navigate("/nextPage");
    }
  };

  return (
    <div className="container">
      <img src={LogoImage} className="logo" />
      <div className="form-container">
        <h2>新規アカウント作成</h2>
        <TextFormField
          type={"text"}
          placeholder={"* ユーザー名"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <TextFormField
          type={"text"}
          placeholder={"* 電話番号"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={errors.phoneNumber}
        />
        <TextFormField
          type={"password"}
          placeholder={"* パスワード６文字以上"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <TextFormField
          type={"text"}
          placeholder={"メールアドレス"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <TextFormField
          type={"text"}
          placeholder={"生年月日(例：2000-01-01）"}
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          error={errors.birthday}
        />
        <NextButton onClick={handleNextClick} label="次へ" />
      </div>
    </div>
  );
};

export default Registration;
