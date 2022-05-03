import React from 'react';
import { List, ListItem, Box, Typography } from '@mui/material';
import {
  BorderColorOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import useStyle from './Styles/SchoolworksTilespopover_style';
import Post_exam from '../../Form_content/Post_exam';

function SchoolworksTilespopover() {
  const [opendialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const { designs } = useStyle();

  return (
    <Box sx={designs.Container_Style}>
      <List component="nav" sx={designs.Nav_Style}>
        <ListItem button onClick={() => setOpenDialog(true)}>
          <Box sx={designs.EditPostContainer_Style}>
            <BorderColorOutlined sx={designs.BorderColorOutlined_Style} />
            <Typography sx={designs.EditPost_Typography_Style}>Edit</Typography>
          </Box>
        </ListItem>
        <ListItem button>
          <Box sx={designs.DeletePostContainer_Style}>
            <DeleteOutlineOutlined sx={designs.DeleteOutlineOutlined_Style} />
            <Typography sx={designs.DeletePost_Typography_Style}>
              Delete
            </Typography>
          </Box>
        </ListItem>
      </List>
      {opendialog && (
        <Post_exam maxWidth="md" open={opendialog} close={handleCloseDialog} />
      )}
    </Box>
  );
}

export default SchoolworksTilespopover;
