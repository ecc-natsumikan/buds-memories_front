import React from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (
         <div className='container'>
            <img src={LogoImage} className='logo' />
            <div className="form-container">
                <h2>ログイン</h2>
                <TextFormField 
                    type={"text"} 
                    placeholder={"電話番号/メールアドレス"} 
                    
                    value={""} 
                    onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
                />
                <TextFormField 
                    type={"text"} 
                    placeholder={"パスワード"} 
                    value={""} 
                    onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {} }            
                />
                <div className="signup-link">
                    <span className="signup-text">新規アカウント作成は</span>
                    <Link to="/signup">
                    <span className="link-text">こちら</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Login;