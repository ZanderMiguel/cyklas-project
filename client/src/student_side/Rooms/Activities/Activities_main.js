import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Tabs,
  Tab
} from '@mui/material';
import useStyle from './Styles/Activities_main_style';
import Activities_layout from "./Layouts/Activities_layout";
import Quizzes_layout from "./Layouts/Quizzes_layout";
import Exams_layout from "./Layouts/Exams_layout";

function Activities_main({ roomID }) {
  const { designs } = useStyle();

    const [value, setValue] = React.useState(0);
    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const [comp, setComp] = React.useState(<Activities_layout/>);

  return (
    <>
    <Container maxWidth = "lg">
        <Grid container rowSpacing = {1} columnSpacing = {3}>

        <Grid item xs = {12} sx = {designs.TabsH_GridItem_Style}>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={value}
              onChange={handleChange2}
              aria-label="Vertical tabs example"
              sx={designs.Tabs_Main_Style2}
            >
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Activities
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Activities_layout/>);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Quizzes
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Quizzes_layout/>);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.2em", fontWeight: '600' }}>
                    Exams
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Exams_layout/>);
                }}
              />
            </Tabs>
        </Grid>

        <Grid item xs={2} sx = {designs.TabsV_GridItem_Style}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange2}
              aria-label="Vertical tabs example"
              sx={designs.Tabs_Main_Style3}
            >
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.1em", fontWeight: '600' }}>
                    Activities
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Activities_layout/>);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.1em", fontWeight: '600' }}>
                    Quizzes
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Quizzes_layout/>);
                }}
              />
              <Tab
                disableRipple
                label={
                  <Typography variant="h6" sx={{ fontSize: "1.1em", fontWeight: '600' }}>
                    Exams
                  </Typography>
                }
                sx = {{ padding: "0em", margin: "0em" }}
                onClick={() => {
                    setComp(<Exams_layout/>);
                }}
              />
            </Tabs>
        </Grid>

        <Grid item md = {10} xs = {12} sx = {designs.Tiles_GridItem_Style}>
        {comp}
        </Grid>

    </Grid>
    </Container>
      
    </>
  );
}

export default Activities_main;
