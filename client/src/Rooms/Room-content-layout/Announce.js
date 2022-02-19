import React from 'react';
import Input from '../../components/Input';
import useStyle from '../Announce_style';

import { Box, Grid, TextField, Avatar, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MoreVert, Send, KeyboardArrowDown } from '@mui/icons-material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import {
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
} from '@mui/icons-material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

function Announce() {
  const {designs} = useStyle()
  
  const [upload, setUpload] = React.useState('true');
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container sx={{ marginTop: 2 }}>
      <Grid item xs={12}>
        <Input
          variant="filled"
          multiline
          fullWidth
          rows={6}
          label="Announce to your class..."
        />
      </Grid>
      <Grid item xs={12}>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: 'wrap',
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '0px',
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '0px 0px 4px 4px',
          }}
        >
          {upload && <Typography>Optangina</Typography>}
          <Divider />
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="image"
              size="medium"
              sx={{
                marginLeft: '10px',
              }}
            >
              <PanoramaOutlined />
            </IconButton>
            <IconButton aria-label="file" size="medium">
              <AttachFileOutlined />
            </IconButton>
            <IconButton aria-label="link" size="medium">
              <InsertLinkOutlined />
            </IconButton>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs = {12}>
      <Box className = "Post" sx = {designs.Post_Style}>
                <Box className = "User" sx = {designs.User_Style}>
                    <Avatar alt="Remy Sharp" src={AvatarIcon} 
                        sx = {designs.AvatarPost_Style}/>
                    <Box className = "User-date" sx = {designs.User_Date_Style}>
                        <Typography noWrap
                        sx = {designs.UserName_Typography_Style}>
                        Zander Miguel
                        </Typography>

                        <Box className = "date" sx = {designs.Date_Style}>
                            <Typography
                            sx = {designs.Date_Typography_Style}>
                            November 15, 2021
                            </Typography>

                            <Typography
                            sx = {designs.Slash_Typography_Style}>
                            /
                            </Typography>

                            <Typography
                            sx = {designs.Time_Typography_Style}>
                            9:00 AM
                            </Typography>
                        </Box>
                        
                    </Box>

                    <Box sx = {designs.BoxFlexGrow_Style}/>

                    <IconButton aria-label="options" sx = {designs.Option_IconButton_Style}>
                        <MoreVert
                            sx= {designs.MoreVertIcon_Style}/>
                    </IconButton>
                </Box>

                <Box className = "post-content" sx = {designs.Post_Content_Style}>
                    <Typography
                        sx = {designs.Post_Typography_Style}>
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                    </Typography>
                </Box>
                
                <Divider sx = {designs.Divider_Style}/>

                <Box className = "View-comments"
                    sx = {designs.View_Comments_Style}>
                    <Typography noWrap
                        sx={designs.View_Comments_Typography_Style}>
                        View comments
                    </Typography>
                    <IconButton aria-label="dropdown" sx = {designs.Dropdown_IconButton_Style}>
                    <KeyboardArrowDown
                    sx= {designs.KeyboardArrowDownIcon_Style}/>
                    </IconButton>
                </Box>

                <Box className = "write-comment" sx = {designs.Write_Comment_Style}>
                    <Avatar alt="Remy Sharp" src={AvatarIcon} 
                        sx = {designs.AvatarComment_Style}/>

                    <TextField id="filled-basic" label="Write a comment..." variant="filled" 
                        sx = {designs.Comment_TextField_Style}
                        inputProps={{style: {height: "0px", fontSize: "13px", paddingBottom: "20px"}}} // font size of input text
                        InputLabelProps={{style: {fontSize: "13px", color: "#8E8E8E", marginBottom: "5px"}}} // font size of input label
                        InputProps={{
                        disableUnderline: true, // pantanggal ng bottom outline
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="send" sx = {designs.Send_IconButton_Style}>
                                        <Send
                                            sx= {designs.SendIcon_Style}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
      </Grid>
    </Grid>
  );
}

export default Announce;
