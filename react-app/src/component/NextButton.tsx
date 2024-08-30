import React from "react";

interface NextButtonProps {
    onClick: () => void;
    label: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className="next-button">
            {label}
        </button>
    );
};

export default NextButton;
