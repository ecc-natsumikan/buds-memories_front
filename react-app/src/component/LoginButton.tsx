import React from "react";

interface LogInButtonProps {
    onClick: () => void;
    label: string;
}

const LogInButton: React.FC<LogInButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className="login-button">
            {label}
        </button>
    );
};

export default LogInButton;
