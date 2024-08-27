import Side_Navigation from "../component/Side_navigation";
import LogoImage from "../image/ロゴ.png";
import './Home.css';
import TagComponent from "../component/Tag_component";
import Quest from "../component/Quest_component";
const Home = () => {
    return (
        <div className="Container">
            <div className="Itemcontainer">
                <div className="Tagcontainer">
                    <h2> タグ一覧</h2>
                    <div className="tags">
                        <TagComponent text="花火"/>
                        <TagComponent text="旅行"/>
                        <TagComponent text="食事"/>
                        <TagComponent text="花火"/>
                        <TagComponent text="旅行"/>
                        <TagComponent text="食事"/>
                        <TagComponent text="花火"/>
                        <TagComponent text="旅行"/>
                        <TagComponent text="食事"/>
                    </div>
                    
                </div>
                <div className="Questcontainer">
                        <h2>クエスト</h2>
                        <Quest questtext="クエスト内容1"/>
                </div>
                <div className="Badgecontainer">
                        <h2>バッジ</h2>

                </div>
                <div className="">
                    
                </div>
            </div>
            
            <Side_Navigation profileImageUrl={LogoImage} />
        </div>
    );
}

export default Home;