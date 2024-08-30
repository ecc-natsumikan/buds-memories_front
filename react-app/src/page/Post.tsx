import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../page/Post.css';
import defaultImage from "../image/default_picture.png";

const Post: React.FC = () =>{
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
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
    return(
        <div className="post_container">
            <h2>思い出の投稿</h2>
            <div className="content">
                <div className="image-container">
                    <img
                        src={selectedImage || defaultImage}
                        alt="Profile"
                        className="image-preview"
                    />
                    <label htmlFor="imageUpload" className="upload-button">
                        写真をアップロード
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
            </div>
        </div>
    );
};
export default Post;