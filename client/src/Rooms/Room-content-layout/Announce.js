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
import Post_layout from './Post_layout';
import Schoolworktiles_layout from './Schoolworktiles_layout';

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
  const { designs } = useStyle();

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
    <Grid container sx={{ margin: "1em 0em" }}>
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
      <Post_layout />
      <Schoolworktiles_layout />
    </Grid>
  );
}

export default Announce;
