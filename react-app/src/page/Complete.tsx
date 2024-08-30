import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Complete.css';

const Complete: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, phoneNumber, password, email, birthday, selectedImage } = location.state || {};

    // 受け取ったデータをコンソールに出力
    console.log("Received data:", { name, phoneNumber, password, email, birthday, selectedImage });

    const handleHomeClick = () => {
        navigate('/');  // ホーム画面に遷移
    };

    return (
        <div className="complete-container">
            <h2 className="complete-title">プロフィールの確認</h2>
            <p className="complete-message">アカウントの登録が完了しました</p>
            <button onClick={handleHomeClick} className="home-button">ホームへ</button>
        </div>
    );
};

export default Complete;
