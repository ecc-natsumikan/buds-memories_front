import React, { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProfilePictureUpload.css';

const ProfilePictureUpload: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     if (location.state) {
    //         console.log("Received state in ProfilePictureUpload:", location.state); // 受け取った状態をログ出力
    //     } else {
    //         console.log("No state received in ProfilePictureUpload.");
    //     }
    // }, [location.state]);

    const { name, phoneNumber, password, email, birthday } = location.state || {};

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackClick = () => {
        navigate('/Registration', { state: { name, phoneNumber, password, email, birthday } });
    };

    const handleConfirmClick = () => {
        navigate('/Confirm'); // 確認画面へ遷移します（まだ作成されていないことは把握しています）
    };

    return (
        <div className="profile-container">
            <h2>プロフィール写真のアップロード</h2>
            {selectedImage && <img src={selectedImage} alt="Preview" className="image-preview" />}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="button-group">
                <button onClick={handleBackClick} className="back-button">戻る</button>
                <button onClick={handleConfirmClick} className="confirm-button">確認</button>
            </div>
        </div>
    );
};

export default ProfilePictureUpload;
