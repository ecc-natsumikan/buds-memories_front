import React, { useState, useEffect  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProfilePictureUpload.css';
import defaultImage from '../image/default.png';

const ProfilePictureUpload: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const { name, phoneNumber, password, email, birthday } = location.state || {};

    useEffect(() => {
        if (location.state && location.state.selectedImage) {
            setSelectedImage(location.state.selectedImage);
        }
    }, [location.state]);

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
        const imageToPass = selectedImage || defaultImage;
        navigate('/Confirm', { state: { name, phoneNumber, password, email, birthday, selectedImage: imageToPass } });
    };

    return (
        <div className="profile-container">
            <h2>プロフィール写真のアップロード</h2>
            <img src={selectedImage || defaultImage} alt="Profile" className="image-preview" />
            <label htmlFor="imageUpload" className="upload-button">写真をアップロード</label>
            <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} />
            <div className="button-group">
                <button onClick={handleBackClick} className="back-button">戻る</button>
                <button onClick={handleConfirmClick} className="confirm-button">次へ</button>
            </div>
        </div>
    );
};

export default ProfilePictureUpload;
