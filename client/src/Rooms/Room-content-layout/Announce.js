import React from 'react';
import useStyle from '../Styles/Announce_style';
import { useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
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
import Post_layout from './Post_layout';
import Schoolworktiles_layout from './Schoolworktiles_layout';
import ContentEditable from 'react-contenteditable';
import usePost from '../../customHooks/usePost';
import axios from 'axios';

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
  const { roomID } = useParams();

  const { designs } = useStyle();
  const myPost = React.useRef('');
  const bold = React.useRef(false);
  const boldText = React.useRef(new Map());
  const [upload, setUpload] = React.useState('true');
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const [postData, setPostData] = React.useState(new Map());
  /*  React.useMemo(() => {
    post('http://localhost:5000/announce', { rooms: id });
    console.log(data);
  }, []); */
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/announce', { rooms: roomID })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container sx={{ margin: '1em 0em' }}>
      <Grid item xs={12}>
        {/* <Input
          variant="filled"
          multiline
          fullWidth
          rows={6}
          label="Announce to your class..."
          value={myPost}
          onChange={(e) => {
            if (bold.current === true) {
              boldText.current += `<b>${e.target.value.charAt(
                e.target.value.length - 1
              )}</b>`;    
              e.target.innerHTML = e.target.value + boldText.current;
            } else {
              setMyPost(e.target.value);
            }
          }}
        /> */}
        <ContentEditable
          style={{ border: '1px solid blue', height: '10rem' }}
          onChange={(e) => {
            /* if (bold.current === true) {
              boldText.current.set('bold', `<b>${e.target.value}</b>`);

              myPost.current += boldText.current.get('bold');
              console.log(boldText.current.get('bold'));
            } else {
              myPost.current += e.target.value;
            } */

            myPost.current = e.target.value;
            setPostData(
              postData.set([e.currentTarget.className], e.target.value)
            );
            console.log(e.currentTarget.className, e.target.value, postData);
          }}
          html={`${myPost.current}`}
          className="content"
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
            <ToggleButton
              value="bold"
              aria-label="bold"
              onClick={() => {
                bold.current = bold.current === false ? true : false;
              }}
            >
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
      </Grid>
      <input
        type="button"
        onClick={() => {
          /* post('http://localhost:5000/feed/create', {
            content: Object.fromEntries(postData),
            author: {
              name: 'Mirador Zander',
              avatar: <AttachFileOutlined />,
              id: 'kahit ano muna',
            },
            title: 'obob',
          }); */
        }}
        value="POSt"
      />
      {data && <Post_layout data={data} />}
      <Schoolworktiles_layout />
    </Grid>
  );
}

export default Announce;
