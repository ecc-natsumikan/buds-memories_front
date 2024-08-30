// ProfileIcon.tsx
import React from "react";

interface ProfileIconProps {
  imageUrl: string; // 画像のURLを受け取る
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ imageUrl }) => {
  return (
    <div
      style={{
        
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px', // 親要素の幅
        height: '100px', // 親要素の高さ
        borderRadius: '50%', // 親要素を円形にする
        overflow: 'hidden', // 画像が親要素からはみ出さないようにする
        backgroundColor: '#ffffff', // 背景色
        border: '2px solid #F4A16D' // ボーダー（オプション）
      }}
    >
      <img
        src={imageUrl}
        alt="Profile"
        style={{
          width: '100%', // 画像の幅を親要素に合わせる
          height: '100%', // 画像の高さを親要素に合わせる
          objectFit: 'cover', // 画像が親要素に収まるようにする
        }}
      />
    </div>
  );
};

export default ProfileIcon;