import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';
import ProfileIcon from "./ProfileIcon ";

interface Side_Navigation_Props {
    profileImageUrl: string; 
}

const Side_Navigation : React.FC<Side_Navigation_Props> =({profileImageUrl})=> {
    const menuItems = [
        //表示したいタイトルとそれに該当したパス
        { text: "ホーム" ,path:"/Home"},
        { text: "投稿" , path:"/Post"},
        {text:"プロフィール", path:"/ChangeProfile"},
        {text:"設定", path:"/Setting"}
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 170,
                    boxSizing: 'border-box',
                    paddingTop: '100px',
                    backgroundColor: '#F6E091',
                    alignItems:'center'
                },
            }}
        >
            <ProfileIcon imageUrl={profileImageUrl} />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem  key={index}
                        component={Link}
                        to={item.path}
                        
                    >
                        <ListItemText
                        sx={{
                            position: 'relative', // 相対位置での調整を可能に
                            '&:hover:before': {
                                content: '""', // before疑似要素の内容を定義
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: '-2px', // テキストより1px下に配置
                                height: '3px', // 下線の高さ
                                backgroundColor: '#FFA76D', // 下線の色
                                transform: 'scaleX(1)',
                            },
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: '-2px', // 下線の位置
                                height: '3px', // 下線の高さ
                                backgroundColor: '#FFA76D',
                                transform: 'scaleX(0)',
                                transition: 'transform 0.2s ease', // アニメーション
                            },
                        }}
                            primary={item.text}
                            primaryTypographyProps={{
                                fontFamily: 'Zen Maru Gothic, sans-serif',  // フォント設定
                                fontWeight: 'bold',
                                fontSize:'20px',
                                textAlign:'center',
                                color:'black'
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Side_Navigation;