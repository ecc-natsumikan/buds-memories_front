import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Growth.css';
import Photograph from '../component/Photograph_component'; // 正しいインポート

// GrowthPropsの型定義
interface GrowthProps {
    tagtitle: string;
    tagimage: string;
}

const Growth: React.FC = () => {
    const PostsData = [
        { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast', text: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト', tag: ['食べ物', 'ハンバーガー'] },
        { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', text: 'テストテスト...', tag: ['食べ物'] },
        { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', text: 'テストテスト...', tag: ['機械'] },
        { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', text: 'テストテスト...', tag: ['飲み物'] },
        { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', text: 'テストテスト...', tag: ['帽子'] },
        { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', title: 'Honey', text: 'テストテスト...', tag: ['食べ物'] },
    ];

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Post'); // /Postに遷移
    };
    const location = useLocation();
    const { tagtitle, tagimage } = location.state as GrowthProps;

    useEffect(() => {
        console.log('Received tagimage:', tagimage); // 受け取った画像のパスをコンソールに表示
    }, [tagimage]);

    return (
        <div className="GrowthContainer">
            <div className='GrowthContent'>
                <div className='tagtitle'>
                    <h1>{tagtitle}</h1> {/* 渡されたtagtitleを表示 */}
                </div>
                <div className='tagimage'>
                    <img src={tagimage} alt={tagtitle} />
                </div>
                <div className='postbutton' onClick={handleClick}>    
                    <button>投稿ボタン</button>
                </div>
                <div className='everyone_post_title'>
                    みんなの投稿
                </div>
                <div className='everyone_post'>
                    
                    {PostsData.map((item, index) => (
                        <Photograph
                            key={index}
                            img={item.img}
                            title={item.title}
                            tag={item.tag}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
            <Side_Navigation profileImageUrl={LogoImage} />
        </div>
    );
}

export default Growth;