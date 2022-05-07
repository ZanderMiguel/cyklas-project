import React from 'react';
import { Input, Grid, Box } from '@mui/material';
import useStyle from './Styles/Exam_shortanswer_style';

function Exam_shortanswer() {
  const { designs } = useStyle();

  const handleRows = (event) => {
    console.log(event);
  };

  return (
    <>
      <Grid container sx={{ padding: '0.8em 0em' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              marginBottom: '0.5em',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Input
                placeholder="Students will write their answers in here."
                multiline
                rows={6}
                readOnly
                disableUnderline
                onChange={handleRows}
                sx={{
                  width: '100%',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Exam_shortanswer;
