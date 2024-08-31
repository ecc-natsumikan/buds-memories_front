import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ImageListItem, ImageListItemBar } from "@mui/material";
import { Box, Button } from '@mui/material';
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

const Photograph_good: React.FC<ImageData> = ({ img, title, tag, text }) => {
  const [open, setOpen] = React.useState(false);
  const [liked, setLiked] = useState(false); // いいね状態管理

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  // 削除ボタンを押したタイミング
  const handleDelete = () => {
    console.log('削除しました！');
    // 必要な削除処理をここに追加
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
            height: '50%',
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
              padding: '10px',
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className='dialog'>
          <Box display='flex' sx={{ paddingTop: '5vh', alignItems:'center' }}>
            <img
              src={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={title}
              style={{ 
                maxWidth: '300px', 
                maxHeight: '200px', 
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
              
              <Box mt={2}>
                {/* テキストボタンを追加 */}
                <Button
                    className='deletebutton'
                    variant="outlined"
                    onClick={handleDelete}
                    sx={{
                        backgroundColor: 'red',
                        border:'none',
                        color: 'white',
                        width: '120px', // ボタンの幅を指定
                        height: '40px', // ボタンの高さを指定
                        fontSize: '16px', // フォントサイズを指定
                        '&:hover': {
                        backgroundColor: 'darkred', // ホバー時の背景色
                        },
                    }}
                    >
                    削除
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Photograph_good;
