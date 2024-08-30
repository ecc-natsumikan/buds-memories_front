import React, { useState, useEffect } from "react";
import defaultImage from "../image/default.png";
import TextFormField from "../component/Textformfield_component";
import "./ChangeProfile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { validateName, validateBirthday } from "../lib/api/validateFields";

const ChangeProfile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const { name, birthday } = location.state || {};

  const [errors, setErrors] = useState({
    name: "",
    birthday: "",
  });

  useEffect(() => {
    if (location.state && location.state.selectedImage) {
      setSelectedImage(location.state.selectedImage);
      const { name, birthday } = location.state;
      setName(name || "");
      setBirthday(birthday || "");
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
    navigate("/Home");
  };

  const handleUpdateClick = () => {
    const imageToPass = selectedImage || defaultImage;
    const nameError = validateName(name);
    const birthdayError = validateBirthday(birthday)
      ? null
      : "2000-01-01のように入力してください。";

    const birthdayValue = birthday === "" ? "誕生日未入力" : birthday;

    if (nameError || birthdayError) {
      setErrors({
        name: nameError || "",
        birthday: birthdayError || "",
      });
    } else {
      navigate("/ChangeComplete", {
        state: {
          name,
          birthday,
          selectedImage: imageToPass,
        },
      });
    }
  };

  return (
    <div className="profile-container">
      <h2>プロフィールの確認/変更</h2>
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
        {/* <div className="text-field-container"> */}
        <div className="change-form-container">
          {/* <input
            type="text"
            placeholder="ユーザー名"
            value={name}
            className="text-field"
          />
           */}
          <div className="text-field-container">
            <TextFormField
              type={"text"}
              placeholder={"* ユーザー名"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          {/* <input
            type="text"
            placeholder="生年月日"
            value={birthday}
            className="text-
            field"
          /> */}
          <div className="text-field-container">
            <TextFormField
              type={"text"}
              placeholder={"生年月日(例：2000-01-01）"}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            {errors.birthday && (
              <div className="error-message">{errors.birthday}</div>
            )}
          </div>
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleBackClick} className="back-button">
          戻る
        </button>
        <h3>　</h3>
        <button onClick={handleUpdateClick} className="change-button">
          変更
        </button>
      </div>
    </div>
  );
};

export default ChangeProfile;
