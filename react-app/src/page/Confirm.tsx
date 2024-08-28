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
        console.log("Submitting data:", { name, phoneNumber, password, email, birthday, selectedImage });
    };

    return (
        <div className="confirm-container">
            <h2 className="confirm-title">プロフィールの確認</h2>
            <div className="confirm-content">
                <div className="profile-image-container">
                    {selectedImage && <img src={selectedImage} alt="Profile" className="profile-image" />}
                </div>
                <div className="confirm-details">
                    <div className="confirm-detail">
                        <span className="confirm-value">{name}</span>
                    </div>
                    <div className="confirm-detail">
                        <span className="confirm-value">{phoneNumber}</span>
                    </div>
                    <div className="confirm-detail">
                        <span className="confirm-value">{password}</span>
                    </div>
                    <div className="confirm-detail">
                        <span className="confirm-value">{email}</span>
                    </div>
                    <div className="confirm-detail">
                        <span className="confirm-value">{birthday}</span>
                    </div>
                </div>
            </div>
            <div className="button-group">
                <button onClick={handleBackClick} className="back-button">戻る</button>
                <h3>　</h3>
                <button onClick={handleSubmitClick} className="submit-button">登録</button>
            </div>
        </div>
    );
};

export default Confirm;
