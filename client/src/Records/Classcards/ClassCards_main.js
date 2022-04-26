import React from 'react';
import {
  Container,
  Grid,
  Divider,
  Typography,
  Button,
  IconButton,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FolderSharedOutlined, Grading, Search } from '@mui/icons-material';
import ClassCards_table from './ClassCards_table';
import useStyle from './Styles/ClassCards_main_style';

function ClassCards_main() {
  const { designs } = useStyle();

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box
            className="content-container"
            sx={designs.Content_Container_Style}
          >
            <Grid container rowSpacing={1}>
              <Grid item xs={12}>
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
              </Grid>

              <Grid item xs={12}>
                <ClassCards_table />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ClassCards_main;
