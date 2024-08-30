import React from 'react';
import './Tag_component.css';
import { useNavigate } from 'react-router-dom';
interface TagProps {
    text: string;
    img: string;
}

const Tag: React.FC<TagProps> = ({ text,img}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Growth',{ state:{tagtitle:text,tagimage:img}}); // /Growthに遷移タグの名前を渡す
    };

    return (
        <button className="tag_component" onClick={handleClick}>
            {text}
        </button>
    );
}

export default Tag;
