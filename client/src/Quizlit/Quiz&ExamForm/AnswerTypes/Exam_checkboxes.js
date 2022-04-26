import React from 'react';
import { Grid, Button, Box, Checkbox, Input } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import useStyle from './Styles/Exam_checkboxes_style';

function Exam_checkboxes() {
  const { designs } = useStyle();

  return (
    <>
      <Grid container rowSpacing={1} sx={{ padding: '0em 2em 1.5em 2em' }}>
        <Grid item xs={12}>
          <Box className="Option1" sx={designs.Answer_A_Style}>
            <Checkbox sx={designs.Checkbox_Style} />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
            />

            {/* <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
                Snake
                </Typography> */}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option2" sx={designs.Answer_B_Style}>
            <Checkbox sx={designs.Checkbox_Style} />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
            />

            {/* <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
              Monkey
            </Typography> */}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option3" sx={designs.Answer_C_Style}>
            <Checkbox sx={designs.Checkbox_Style} />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
            />

            {/* <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
              Turtle
            </Typography> */}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option4" sx={designs.Answer_D_Style}>
            <Checkbox sx={designs.Checkbox_Style} />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
            />

            {/* <Typography noWrap sx={designs.Answer_Option_Typography_Style}>
              Lizard
            </Typography> */}
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<AddCircle />}
            sx={{
              height: 'relative',
              width: '100%',
              padding: '0.3em 0em',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'capitalize',
              color: 'white',
              boxShadow: 'none',
              borderRadius: '0.5em',
              '&: hover': {
                boxShadow: 'none',
              },
            }}
          >
            Add another choice
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Exam_checkboxes;
