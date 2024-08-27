import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Confirm.css';

const Confirm: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, phoneNumber, password, email, birthday, selectedImage } = location.state || {};

    const handleBackClick = () => {
        navigate('/ProfilePictureUpload', { state: { name, phoneNumber, password, email, birthday, selectedImage } });
    };

    const handleSubmitClick = () => {
        // ここでサーバーにデータを送信する処理を実装できます
        console.log("Submitting data:", { name, phoneNumber, password, email, birthday, selectedImage });
    };

    return (
        <div className="confirm-container">
            <h2>入力内容の確認</h2>
            <p>ユーザー名: {name}</p>
            <p>電話番号: {phoneNumber}</p>
            <p>パスワード: {password}</p>
            <p>メールアドレス: {email}</p>
            <p>生年月日: {birthday}</p>
            {selectedImage && <img src={selectedImage} alt="Profile" className="profile-preview" />}
            <div className="button-group">
                <button onClick={handleBackClick} className="back-button">戻る</button>
                <button onClick={handleSubmitClick} className="submit-button">登録</button>
            </div>
        </div>
    );
};

export default Confirm;
