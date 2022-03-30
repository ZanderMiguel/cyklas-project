import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Stack,
  IconButton,
  Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import usePost from '../../customHooks/usePost';
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
  Tune,
} from '@mui/icons-material';

function Announce_form() {
  const [announcecontent, setAccountContent] = React.useState('');
  const [upload, setUpload] = React.useState('true');
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const bold = React.useRef(false);
  const postData = React.useRef(null);


  const { post, data } = usePost();
  const { roomID } = useParams();

  const handleAnnounce = () => {

    post('http://localhost:5000/announce/create', {
      author: {
        userID: JSON.parse(localStorage.userData).data.user._id,
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        } `,
      },
      rooms: [roomID],
      content: postData.current.textContent,
    });

  };

console.log(data)
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
  return (
    <Paper elevation={2} sx={{ padding: '1rem' }}>
      <Box backgroundColor="rgba(0, 0, 0, 0.06)" borderRadius="5px">
        <Box
          contentEditable={true}
          sx={{
            height: '13rem',
            minHeight: '13rem',
            overflowY: 'auto',
            padding: '2rem',
            outline: '0px solid transparent',
          }}
          ref={postData}
        />
        <Box
          sx={{
            display: 'flex',
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
            <ToggleButton
              value="bold"
              aria-label="bold"
              onClick={() => {
                bold.current = bold.current === false ? true : false;
              }}
            >
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlined />
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
              <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenter />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '0px 0px 4px 4px',
          }}
        >
          {upload && <Typography>Optangina</Typography>}
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
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        marginTop="1rem"
      >
        <Button variant="contained" onClick={handleAnnounce}>
          post
        </Button>
      </Box>
    </Paper>
  );
}

export default Announce_form;
