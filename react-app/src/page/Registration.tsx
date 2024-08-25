import React, { useState } from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import "./Registration.css";
// ボタンの処理のために追加した。
import { useNavigate } from "react-router-dom";
import NextButton from "../component/NextButton";
import {validateName,validatePhoneNumber,validatePassword,validateEmail,validateBirthday,} from "../lib/api/validateFields";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleNextClick = () => {
    if (validateName(name) && validatePhoneNumber(phoneNumber) && validatePassword(password)) {
        navigate("/nextPage"); // 成功時に次のページへ遷移
    } else {
        alert("必須項目に誤りがあります。");
    }
  };

  return (
    <div className="container">
      <img src={LogoImage} className="logo" />
      <div className="form-container">
        <h2>新規アカウント作成</h2>
        <TextFormField
          type={"text"}
          placeholder={"ユーザー名(必須）"}
          //   value={""}
          //   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {}}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextFormField
          type={"text"}
          placeholder={"電話番号(必須）"}
          //   value={""}
          //   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {}}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextFormField
          type={"text"}
          placeholder={"パスワード（必須）"}
          //   value={""}
          //   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextFormField
          type={"text"}
          placeholder={"メールアドレス（任意）"}
          //   value={""}
          //   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextFormField
          type={"text"}
          placeholder={"生年月日(必須ではない）"}
          //   value={""}
          //   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {}}
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <NextButton onClick={handleNextClick} label="次へ" />
      </div>
    </div>
  );
};

export default Registration;
