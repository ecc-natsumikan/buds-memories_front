import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Home.css';
import TagComponent from "../component/Tag_component";
import Quest from "../component/Quest_component";
import Badge from "../component/Badge_component";
import { Grid,} from "@mui/material"; // Gridをインポートああ
import React from "react";
import { Box, Typography } from '@mui/material';
import Photograph from "../component/Photograph_component";
import BadgeImage from "../image/bafge.png";
import { title } from "process";
import Photograph_good from "../component/Photograph_component_good";
import picture from "../image/hanabiLevel2.png";

const Home: React.FC = () => {
    //借りデータ
    // タグデータの配列 string形式
    const tagData = [{tag:"花火",img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}, {tag:"夏祭り", img:'http://unsplash.com/photos/U5rMrSI7Pn4'}, {tag:"かき氷", img:'http://unsplash.com/photos/IGfIGP5ONV0'} , {tag:"海", img:'http://unsplash.com/photos/3JICb23kmyo'},{tag:"フェス", img:'http://unsplash.com/photos/WPh6W1knr-A'},{tag:"バーベキュー", img:'http://unsplash.com/photos/kI2m3SkqLuc'}];

    // クエストデータの配列string形式とnumber形式を使用
    const questData = [
        { questtext: "今月、投稿を10回する", progressvalue: 50 },
        { questtext: "3日連続投稿する", progressvalue: 80 },
        { questtext: "投稿を5ついいねする", progressvalue: 30 },
    ];
    const badgeData = [
        {img:BadgeImage,title :'花火バッジ'}
      ];
    const PostsData =[
        { img: picture, title: '花火みにいった！',text:'花火はじまった！',tag:['花火','夏まつり'] },
        { img: picture, title: '花火始まった！',text:'花火！きれい！！',tag:['花火'] },
        { img: picture, title: '花火たのしい！',text:'花火！きれい！！',tag:['花火'] },
        { img: picture, title: '花火！' ,text:'花火！きれい！！',tag:['花火']},
        { img: picture, title: '花火！',text:'花火はじまった！',tag:['花火'] },
        { img: picture, title: '花火！',text:'花火はじまった！',tag:['食べ物'] },
    ];
    const LikesData = [
        { img: picture, title: '花火！',text:'花火はじまった！',tag:['花火','夏まつり'] },
        { img: picture, title: '花火始まった！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
        { img: picture, title: '花火！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
        { img: picture, title: '花火！' ,text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火']},
        { img: picture, title: '花火！',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['花火'] },
        { img: picture, title: '花火！',text:'ぷーさんのはちみつ食べてみたい',tag:['食べ物'] },
    ];
    const [view, setview] = React.useState<'posts' | 'likes'>('posts');
    const handleViewChange = (viewType: 'posts' | 'likes') => {
        setview(viewType);
    }

    return (
        <div className="Container">
            <div className="Itemcontainer">
                <div className="Tagcontainer">
                    <h2> タグ一覧</h2>
                    <div className="tags">
                    {tagData.map((tag, index) => (
                            <TagComponent key={index} text={tag.tag} img={tag.img}  />
                        ))}
                    </div>
                </div>
                <div className="Questcontainer">
                        <h2>クエスト</h2>
                        {questData.map((quest, index) => (
                            <Quest 
                                key={index} 
                                questtext={quest.questtext} 
                                progressvalue={quest.progressvalue} 
                            />
                        ))}
                </div>
                <div className="Badgecontainer">
                        <h2>バッジ</h2>
                        <Grid container spacing={2}>
                        {badgeData.map((badge, index) => (
                            <Grid item xs={4} sm={3} md={2} key={index}>
                                <Badge 
                                    img={badge.img}
                                    title={badge.title} // ここでスペルミスを修正
                                />
                            </Grid>
                        ))}
                        </Grid>
                </div>
                <div className="Postcontainer">
                    <Box display="flex" justifyContent="center" mb={2}>
                        <Typography
                            className={`Postbutton ${view === 'posts' ? 'Postbutton-active' : ''}`}
                            onClick={() => handleViewChange('posts')}
                            sx={{ fontSize: '22px', fontFamily:'Zen Maru Gothic, sans-serif' ,fontWeight:'bold'}}
                        >
                            投稿履歴
                        </Typography>
                        <Typography
                            className={`Likesbutton ${view === 'likes' ? 'Likesbutton-active' : ''}`}
                            onClick={() => handleViewChange('likes')}
                            sx={{ fontSize: '22px', fontFamily:'Zen Maru Gothic, sans-serif',fontWeight:'bold' }}
                        >
                            いいねした投稿
                        </Typography>
                    </Box>
                    <Box className="imageListWrapper">
                        {view === 'posts' ? (
                            PostsData.map((item,index) => (
                                <Photograph_good
                                key={index}
                                img={item.img}
                                title={item.title}
                                tag={item.tag}
                                text={item.text}
                                />
                            ))
                        ) : (
                            LikesData.map((item,index) => (
                                <Photograph
                                key={index}
                                img={item.img}
                                title={item.title}
                                tag={item.tag}
                                text={item.text}
                                />
                            ))
                        )}
                    </Box>
                </div>
            </div>
            <Side_Navigation profileImageUrl={LogoImage} />
        </div>
    );
}

export default Home;
