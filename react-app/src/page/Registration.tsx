import React, { useState, useEffect } from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import "./Registration.css";
// ボタンの処理のために追加した。
import { useNavigate, useLocation } from "react-router-dom";
import NextButton from "../component/NextButton";
import {
  validateName,
  validatePhoneNumber,
  validatePassword,
  validateEmail,
  validateBirthday,
} from "../lib/api/validateFields";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    if (location.state) {
      // console.log("Received state:", location.state); // デバッグ用のログ
      const { name, phoneNumber, password, email, birthday } = location.state;
      setName(name || "");
      setPhoneNumber(phoneNumber || "");
      setPassword(password || "");
      setEmail(email || "");
      setBirthday(birthday || "");
    }
  }, [location.state]);

  const handleNextClick = () => {
    const nameError = validateName(name);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const passwordError = validatePassword(password);
    const emailError = validateEmail(email);
    const birthdayError = validateBirthday(birthday)
      ? null
      : "2000-01-01のように入力してください。";

    const emailValue = email === "" ? "メールアドレス未入力" : email;
    const birthdayValue = birthday === "" ? "誕生日未入力" : birthday;

    if (nameError || phoneNumberError || passwordError || emailError) {
      setErrors({
        name: nameError || "",
        phoneNumber: phoneNumberError || "",
        password: passwordError || "",
        email: emailError || "",
        birthday: birthdayError || "",
      });
    } else {
      // console.log("Navigating with state:", { name, phoneNumber, password, email, birthday }); // 送信される状態をログ出力
      navigate("/ProfilePictureUpload", {
        state: {
          name,
          phoneNumber,
          password,
          email: emailValue,
          birthday: birthdayValue,
        },
      });
    }
  };

  return (
    <div className="container">
      <img src={LogoImage} className="logo" />
      <div className="form-container">
      <h2>新規アカウント作成</h2>
        <div className="text-field-container">
          <TextFormField
            type={"text"}
            placeholder={"* ユーザー名"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="text-field-container">
          <TextFormField
            type={"text"}
            placeholder={"* 電話番号（ハイフンなし）"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <div className="error-message">{errors.phoneNumber}</div>
          )}
        </div>
        <div className="text-field-container">
          <TextFormField
            type={"password"}
            placeholder={"* パスワード６文字以上"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <div className="text-field-container">
          <TextFormField
            type={"text"}
            placeholder={"メールアドレス"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="text-field-container">
          <TextFormField
            type={"text"}
            placeholder={"生年月日(例：2000-01-01）"}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          {errors.birthday && (
            <div className="error-message">{errors.birthday}</div>
          )}
        </div>
        <NextButton onClick={handleNextClick} label="次へ" />
      </div>
    </div>
  );
};

export default Registration;
