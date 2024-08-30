import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite'; // 追加
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Box } from '@mui/material';
import './Photograph_component.css';

interface ImageData {
  img: string;
  title: string;
  tag: string[];
  text: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

const Photograph: React.FC<ImageData> = ({ img, title, tag, text }) => {
  const [open, setOpen] = React.useState(false);
  const [liked, setLiked] = useState(false); // いいね状態管理

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
    setLiked(!liked); // いいね状態をトグル
  };

  return (
    <React.Fragment>
      <ImageListItem className="ImageListItem" key={img} onClick={handleClickOpen}>
        <img 
          srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${img}?w=248&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
        />
        <ImageListItemBar
          title={title}
        />
      </ImageListItem>
      <BootstrapDialog
        onClose={handleClickClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            width: '100%', // ダイアログの幅を指定
            height: '45%',
            backgroundColor: '#FFEEB2'
          },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 0,
            borderBottom: 'none',
          }}
          id="customized-dialog-title"
        >
          <IconButton
            aria-label="close"
            onClick={handleClickClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
              padding: '20px',
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className='dialog'>
          <Box display='flex' sx={{ paddingTop: '7vh' }}>
            <img
              src={img}
              alt={title}
              style={{ 
                maxWidth: '50%', 
                maxHeight: '50%', 
                borderRadius: 4, 
              }}
            />
            <Box ml={2}></Box>
            <Box textAlign='center' justifyContent={'center'} width={'100%'}>
              <Typography variant="h6" className='title'>
                {title}
              </Typography>
              <Typography className='text' sx={{ wordBreak: 'break-word' }}>
                {text}
              </Typography>
              <Typography className='tagname'>
                タグ
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1} justifyContent="center">
                {tag.map((tags, index) => (
                  <Typography 
                    key={index} 
                    className='tag'
                  >
                    {tags}
                  </Typography>
                ))}
              </Box>
              {/* いいねボタンを追加 */}
              <Box mt={2}>
                <IconButton 
                  aria-label="like" 
                  onClick={handleLike} 
                  color={liked ? "primary" : "default"}
                >
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Photograph;