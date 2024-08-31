import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ChangeComplete_post.css';

const ChangeComplete_Post: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, birthday, selectedImage } = location.state || {};

    // 受け取ったデータをコンソールに出力
    console.log("Received data:", { name, birthday, selectedImage });

    const handleHomeClick = () => {
        navigate('/Home');  // ホーム画面に遷移
    };

    return (
        <div className="change-complete-container">
            <h2 className="complete-title">投稿完了</h2>
            <p className="change-complete-message">思い出の投稿が完了しました</p>
            <button onClick={handleHomeClick} className="home-button">ホームへ</button>
        </div>
    );
};

export default ChangeComplete_Post;
