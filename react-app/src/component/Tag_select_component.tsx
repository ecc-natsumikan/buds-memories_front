import React from "react";
import "./Tag_select_component.css";

interface Tag_select_Props {
    text: string;
    isSelected: boolean;
    onSelect: () => void;
}

const Tag_select_component: React.FC<Tag_select_Props> = ({ text, isSelected, onSelect }) => {
    return (
        <button 
            className={`tag-select-name ${isSelected ? "selected" : ""}`} 
            onClick={onSelect}
        >
            {text}
        </button>
    );
}

export default Tag_select_component;