import React from 'react';
import Input from '../../components/Input';

import { Box, Grid, TextField, Avatar, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
      <Box className = "Post" width = "100%" height = "auto" margin = "20px 0px" paddingBottom = "15px" border = " 1px solid #DBDBDB" borderRadius = "0.8em">
                <Box className = "User"  padding = "7px 15px" gap = "13px" display = "flex" width = "relative" height = "auto">
                    <Avatar alt="Remy Sharp" src={AvatarIcon} 
                        sx = {{
                            margin: "1px 0px",
                            height: "45px",
                            width: "45px"
                        }}/>
                    <Box className = "User-date"  margin = "3px 0px">
                        <Typography noWrap
                        sx = {{
                            fontSize: "14px",
                            color: "#3F3D56",
                            fontWeight: "600"
                        }}>
                        Zander Miguel
                        </Typography>

                        <Box className = "date"  display = "flex" flexWrap = "wrap" marginTop = "1px">
                            <Typography
                            sx = {{
                                width: "max-content",
                                fontSize: "10px",
                                color: "#3F3D56",
                                fontWeight: "500",
                                fontStyle: "Italic",
                                marginRight: "5px"
                            }}>
                            November 15, 2021
                            </Typography>

                            <Typography
                            sx = {{
                                fontSize: "10px",
                                color: "#3F3D56",
                                fontWeight: "500",
                                fontStyle: "Italic",
                                marginRight: "5px"
                            }}>
                            /
                            </Typography>

                            <Typography
                            sx = {{
                                width: "max-content",
                                fontSize: "10px",
                                color: "#3F3D56",
                                fontWeight: "500",
                                fontStyle: "Italic"
                            }}>
                            9:00 AM
                            </Typography>
                        </Box>
                        
                    </Box>

                    <Box flexGrow = {1}  height = "relative"/>

                    <IconButton aria-label="options" sx = {{
                        height: "32px",
                        width: "32px",
                        margin: "8px 0px"
                        }}>
                        <MoreVertIcon
                            sx= {{
                                color: "#8E8E8E",
                                fontSize: "20px"
                                }}/>
                    </IconButton>
                </Box>

                <Box className = "post-content" padding = "10px 75px" marginBottom = "15px" width = "relative" height = "auto">
                    <Typography
                        sx = {{
                            textAlign: "justify",
                            fontSize: "14px",
                            color: "#3F3D56",
                            fontWeight: "600"
                        }}>
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                        This contains the content of post. This contains the content of post. This contains the content of post.
                    </Typography>
                </Box>
                
                <Divider sx = {{width: "relative", margin: "0px 25px 5px 20px"}}/>

                <Box className = "View-comments"
                    sx = {{
                      height: "auto",
                      width: "relative",
                      paddingLeft: "20px",
                      marginBottom: "10px",
                      display: "flex",
                      gap: "8px"
                  }}>
                    <Typography noWrap
                        sx={{
                          height: "max-content", 
                          width: "max-content", 
                          color: "#3F3D56",
                          fontSize: "12px",
                          padding: "1px 0px",
                          margin: "5px 0px"
                          
                      }}>
                        View comments
                    </Typography>
                    <IconButton aria-label="dropdown" sx = {{
                        marginTop: "2px",
                        height: "25px",
                        width: "25px"
                    }}>
                    <KeyboardArrowDownIcon
                    sx= {{
                      color: "#9C9C9C",
                      fontSize: "20px"
                      
                  }}/>
                    </IconButton>
                </Box>

                <Box className = "write-comment" padding = "0px 25px 0px 15px" display = "flex" gap = "10px" width = "relative" height = "auto">
                    <Avatar alt="Remy Sharp" src={AvatarIcon} 
                        sx = {{
                            marginTop: "2px"
                        }}
                    />

                    <TextField id="filled-basic" label="Write a comment..." variant="filled" 
                        sx = {{
                            width: "100%",
                        }}
                        inputProps={{style: {height: "0px", fontSize: "13px", paddingBottom: "20px"}}} // font size of input text
                        InputLabelProps={{style: {fontSize: "13px", color: "#8E8E8E", marginBottom: "5px"}}} // font size of input label
                        InputProps={{
                        disableUnderline: true, // pantanggal ng bottom outline
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="send" sx = {{
                                        height: "35px",
                                        width: "35px",
                                        margin: "2px 0px"
                                        }}>
                                        <SendIcon
                                            sx= {{
                                            color: "#3F3D56",
                                            fontSize: "20px"
                                            }}/>
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
