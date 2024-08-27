import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Home.css';
import TagComponent from "../component/Tag_component";
import Quest from "../component/Quest_component";
import { Tag } from "@chakra-ui/react";
import Badge from "../component/Badge_component";
import { Grid, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"; // Gridをインポート
import React from "react";
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
    //借りデータ
    // タグデータの配列 string形式
    const tagData = ["花火", "旅行", "食事", "祭り","ハロウィーン","お月見"];

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
        { img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast',tag:'食べ物' },
        { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger',tag:'食べ物' },
        { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera',tag:'機械' },
        { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee' ,tag:'飲み物'},
        { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats',tag:'帽子' },
        { img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', title: 'Honey',tag:'食べ物' },
    ];
    const LikesData = [
        { img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6', title: 'Basketball',tag:'スポーツ' },
        { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern',tag:'植物' },
        { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms',tag:'食べ物' },
        { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', title: 'Tomato basil',tag:'食べ物' },
        { img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', title: 'Sea star',tag:'動物' },
        { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Bike',tag:'乗り物' },
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
                            <TagComponent key={index} text={tag} />
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
                            sx={{ fontSize: '20px', fontFamily:'Zen Maru Gothic, sans-serif' }}
                        >
                            投稿履歴
                        </Typography>
                        <Typography
                            className={`Likesbutton ${view === 'likes' ? 'Likesbutton-active' : ''}`}
                            onClick={() => handleViewChange('likes')}
                            sx={{ fontSize: '20px', fontFamily:'Zen Maru Gothic, sans-serif' }}
                        >
                            いいねしたもの
                        </Typography>
                    </Box>
                    <Box className="imageListWrapper">
                        {view === 'posts' ? (
                            PostsData.map((item) => (
                                <ImageListItem key={item.img} className="imageListItem">
                                    <Link to={`/details/${item.title}`}>
                                        <img 
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.tag}
                                        />
                                    </Link>
                                </ImageListItem>
                            ))
                        ) : (
                            LikesData.map((item) => (
                                <ImageListItem key={item.img} className="imageListItem">
                                    <Link to={`/details/${item.title}`}>
                                        <img 
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.tag}
                                        />
                                    </Link>
                                </ImageListItem>
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
