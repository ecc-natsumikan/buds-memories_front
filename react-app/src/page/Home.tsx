import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Home.css';
import TagComponent from "../component/Tag_component";
import Quest from "../component/Quest_component";
import Badge from "../component/Badge_component";
import { Grid,} from "@mui/material"; // Gridをインポート
import React from "react";
import { Box, Typography } from '@mui/material';
import Photograph from "../component/Photograph_component";
const Home: React.FC = () => {
    //借りデータ
    // タグデータの配列 string形式
    const tagData = [{tag:"花火",img:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}, {tag:"旅行", img:'http://unsplash.com/photos/U5rMrSI7Pn4'}, {tag:"食事", img:'http://unsplash.com/photos/IGfIGP5ONV0'} , {tag:"祭り", img:'http://unsplash.com/photos/3JICb23kmyo'},{tag:"ハロウィーン", img:'http://unsplash.com/photos/WPh6W1knr-A'},{tag:"お月見", img:'http://unsplash.com/photos/kI2m3SkqLuc'}];

    // クエストデータの配列string形式とnumber形式を使用
    const questData = [
        { questtext: "クエスト内容1", progressvalue: 50 },
        { questtext: "クエスト内容2", progressvalue: 80 },
        { questtext: "クエスト内容3", progressvalue: 30 },
    ];
    const badgeData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
      ];
    const PostsData =[
        { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['食べ物','ハンバーガー'] },
        { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['食べ物'] },
        { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['機械'] },
        { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee' ,text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['飲み物']},
        { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['帽子'] },
        { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', title: 'Honey',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['食べ物'] },
    ];
    const LikesData = [
        { img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title: 'Basketball',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['スポーツ'] },
        { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['植物','緑色',] },
        { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['食べ物','きのこ','苦手' ]},
        { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', title: 'Tomato basil',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['食べ物'] },
        { img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', title: 'Sea star',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['動物'] },
        { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Bike',text:'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',tag:['乗り物'] },
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
                                <Photograph
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
