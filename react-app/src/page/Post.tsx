import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../page/Post.css';
import defaultImage from "../image/default_picture.png";
import TextFormField from "../component/Textformfield_component";
import Tag_select_component from "../component/Tag_select_component";

const Post: React.FC = () => {
    const tagData = [{ tag: "花火" }, { tag: "祭り" }, { tag: "お月見" }];
    const [selectedImage, setSelectedImage] = useState("");
    const [eventName, setEventName] = useState(""); 
    const [selectedTags, setSelectedTags] = useState<string[]>(); // 選択されたタグを管理
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

    // タグの選択状態をトグル
    const handleTagSelect = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // タグがすでに選択されている場合、選択解除
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
        } else {
            // タグが選択されていない場合、追加
            setSelectedTags([...selectedTags, tag]);
        }
    };
    const handleBackClick = () => {
        navigate("/Home", {
          
        });
    };

    const handleConfirmClick = () => {
        const imageToPass = selectedImage || defaultImage;
        navigate("/ChangeCompletePost", {
          
        });
      };

    return (
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
                <div className="post-area">
                    <div className="eventname">
                        <TextFormField
                            type="text"
                            placeholder="イベント名・場所名"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </div>
                    <div className="comment-section">
                        <textarea 
                            className="comment-area"  
                            rows={10}
                            cols={60}
                            placeholder="コメント"
                        />
                    </div>
                    <div className="tag-select-container">
                        <div className="tag-select-title">タグ選択</div>
                        <div className="tag-select">
                            {tagData.map((tagItem, index) => (
                                <div key={index} className="select-tag">
                                    <Tag_select_component
                                        text={tagItem.tag}
                                        onSelect={() => handleTagSelect(tagItem.tag)} // 選択された時の処理
                                        isSelected={selectedTags.includes(tagItem.tag)} // 選択状態を表示するためのプロパティ
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_group">
                <button onClick={handleBackClick} className="back-button">
                    戻る
                </button>
                <button onClick={handleConfirmClick} className="confirm-button">
                    投稿
                </button>
            </div>
        </div>
    );
};

export default Post;