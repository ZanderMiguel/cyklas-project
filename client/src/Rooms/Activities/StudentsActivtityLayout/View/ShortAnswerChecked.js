import React from 'react';
import { Grid, Container, Box, Typography, Input } from '@mui/material';

function ShortAnswerChecked() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: 'white',
        padding: '0.8em 1.1em',
        borderRadius: '0.3em 0.3em 0em 0em',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.8em',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1em',
            alignItems: 'center',
            marginBottom: '0.5em',
          }}
        >
          <Typography
            children="Question 2"
            sx={{
              flexGrow: '1',
              fontSize: '1em',
              fontWeight: '600',
              color: '#007FFF',
              textTransform: 'Capitalize',
              height: 'max-content',
            }}
          />

          <Typography
            children="Short Answer"
            sx={{
              fontSize: '0.7em',
              fontWeight: '500',
              color: '#8E8E8E',
              textTransform: 'Uppercase',
              height: 'max-content',
            }}
          />
          <Typography
            children="2 points"
            sx={{
              fontSize: '0.7em',
              fontWeight: '500',
              color: '#8E8E8E',
              textTransform: 'Uppercase',
              height: 'max-content',
            }}
          />
        </Box>

        <Typography
          children="Hello darkness my old friend"
          sx={{
            flexGrow: '1',
            fontSize: '0.8em',
            fontWeight: '600',
            color: '#3F3D56',
            textTransform: 'none',
            height: 'max-content',
            marginBottom: '0.8em',
          }}
        />

        <Box
          sx={{
            width: 'relative',
            height: 'auto',
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
              placeholder="Wala po akong sinagot dito."
              multiline
              rows={6}
              readOnly
              disableUnderline
              sx={{
                width: '100%',
                fontSize: '0.8em',
                fontWeight: '500',
                color: '#3F3D56',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ShortAnswerChecked;
