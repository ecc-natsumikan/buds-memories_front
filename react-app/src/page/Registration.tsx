import React from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import './Registration.css';
const Registration = () => {
    return (
        <div className='container'>
           <img src={LogoImage} className='logo' />
           <div className="form-container">
               <h2>新規アカウント作成</h2>
               <TextFormField 
                   type={"text"} 
                   placeholder={"ユーザー名(必須）"} 
                   
                   value={""} 
                   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
               />
               <TextFormField 
                   type={"text"} 
                   placeholder={"電話番号(必須）"} 
                   value={""} 
                   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
               />
               <TextFormField 
                   type={"text"} 
                   placeholder={"パスワード（必須）"} 
                   value={""} 
                   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
               />
               <TextFormField 
                   type={"text"} 
                   placeholder={"メールアドレス（任意）"} 
                   value={""} 
                   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
               />
               <TextFormField 
                   type={"text"} 
                   placeholder={"生年月日(必須ではない）"} 
                   value={""} 
                   onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
               />
           </div>
       </div>
   );
}

export default Registration;