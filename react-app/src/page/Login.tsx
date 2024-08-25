import React, { useState } from "react";
import LogoImage from "../image/ロゴ.png";
import TextFormField from "../component/Textformfield_component";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    //状態の定義
    const [tel_email, setTel_email] = useState("");
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState(""); // メールか電話かの判定結果

    //入力内容の判定関数
    const handleInputType = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setTel_email(value);

        //入力内容の判定
        const type = validateInput(value);
        setInputType(type);
    }
    return (
         <div className='container'>
            <img src={LogoImage} className='logo' />
            <div className="form-container">
                <h1>ログイン</h1>
                <TextFormField 
                    type={"text"} 
                    placeholder={"電話番号/メールアドレス"} 
                    
                    value={tel_email} 
                    onChange= {handleInputType}        
                />
                <TextFormField 
                    type={"text"} 
                    placeholder={"パスワード"} 
                    value={password} 
                    onChange= {(e) => setPassword(e.target.value)}            
                />
                <p>
                    
                    テスト：入力された内容は{inputType}
                </p>
                <div className="signup-link">
                    <span className="signup-text">新規アカウント作成は</span>
                    <Link to="/Registration">
                    <span className="link-text">こちら</span>
                    </Link>
                </div>
            </div>

        </div>
    );
}
// 入力がメールアドレスか電話番号かを判定する関数
function validateInput(input: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // メールアドレスの正規表現
    const phoneRegex = /^(?:\+81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/; // 日本の電話番号の正規表現

    if (emailRegex.test(input)) {
        return "メールアドレス";
    } else if (phoneRegex.test(input)) {
        return "電話番号";
    } else {
        return "無効な入力";
    }
}
export default Login;