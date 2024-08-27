import { useState, useEffect } from 'react';
import { ImageListItem } from "@mui/material";

interface Badge_Props {
    img: string;
    title: string;
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Badge: React.FC<Badge_Props> = ({ img, title }) => {
    const { width } = useWindowSize();
    
    let size = '80px';
    if (width > 1200) {
        size = '110px';
    } else if (width > 600) {
        size = '80px';
    }

    return (
        <ImageListItem sx={{ width: '100%', height: 'auto' }}>
            <img 
                srcSet={`${img}?w=320&h=320&fit=crop&auto=format 1x, ${img}?w=640&h=640&fit=crop&auto=format 2x`}
                src={`${img}?w=320&h=320&fit=crop&auto=format`}
                alt={title}
                loading="lazy"
                style={{ width: size, height: size, objectFit: 'cover' }}
            />
        </ImageListItem>
    );
}

export default Badge;
