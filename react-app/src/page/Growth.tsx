import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Growth.css';
import Photograph from '../component/Photograph_component'; // 正しいインポート
import ReactPlayer from 'react-player';
import Video from '../image/level1.mp4'
import picture from "../image/hanabiLevel2.png";
import VideoLevel3 from '../image/level3.mp4'; // level3の動画ファイル

// GrowthPropsの型定義
interface GrowthProps {
    tagtitle: string;
    tagimage: string;
    videoLevel: 'level2' | 'level3'; // 動画のレベルを指定
}

const Growth: React.FC = () => {
    const PostsData = [
        { img: picture, title: '花火！',text:'花火はじまった！',tag:['花火','夏まつり'] },
        { img: picture, title: '花火始まった！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
        { img: picture, title: '花火！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
        { img: picture, title: '花火！' ,text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火']},
        { img: picture, title: '花火！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
    ];

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Post'); // /Postに遷移
    };
    const location = useLocation();
    const { tagtitle, videoLevel } = location.state as GrowthProps;

    // 動画のURLを決定
    const videoUrl = videoLevel === 'level3' ? VideoLevel3 : Video;


    useEffect(() => {
        console.log('Received tagtitle:', tagtitle); // 受け取ったタイトルをコンソールに表示
    }, [tagtitle]);

    return (
        <div className="GrowthContainer">
            <div className='GrowthContent'>
                <div className='tagtitle'>
                    <h1>{tagtitle}</h1> {/* 渡されたtagtitleを表示 */}
                </div>
                <div className='tagimage'>
                    <ReactPlayer url={videoUrl} playing controls loop/>
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
