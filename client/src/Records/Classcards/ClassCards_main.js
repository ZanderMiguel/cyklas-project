import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, IconButton, Box, Input } from '@mui/material';
import { Search } from '@mui/icons-material';
import ClassCards_table from './ClassCards_table';
import useStyle from './Styles/ClassCards_main_style';

function ClassCards_main() {
  const { designs } = useStyle();
  const [roomsdata, setRoomsData] = useState(null);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => setRoomsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            className="content-container"
            sx={designs.Content_Container_Style}
          >
            <Grid container rowSpacing={1}>
              {/* <Grid item xs={12}>
                <Box sx={designs.SearchBar_Style}>
                  <IconButton
                    aria-label="search"
                    sx={designs.SearchBar_IconButton_Style}
                  >
                    <Search sx={designs.SearchBar_Icon_Style} />
                  </IconButton>

                  <Input
                    variant="standard"
                    placeholder="Search Room..."
                    disableUnderline
                    sx={designs.SearchBar_Input_Style}
                  />
                </Box>
              </Grid> */}

              <Grid item xs={12}>
                <ClassCards_table roomsdata={roomsdata} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ClassCards_main;
