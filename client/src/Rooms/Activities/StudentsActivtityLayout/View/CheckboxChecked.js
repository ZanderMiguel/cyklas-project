import React from 'react';
import { Grid, Container, Box, Typography, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const dataAnswerChoices = [
  {
    choice: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.8em',
          alignItems: 'center',
          height: 'auto',
          width: 'relative',
          flexGrow: 1,
          border: '1px solid #007FFF',
          backgroundColor: '#DFF0FF',
          borderRadius: '0.3em',
          padding: '0.5em 0.7em',
          marginBottom: '0.5em',
        }}
      >
        <Checkbox
          {...label}
          disabled
          checked
          sx={{
            color: '#8E8E8E',
            borderRadius: '0em',
            height: '0.8em',
            width: '0.8em',
            '&: hover': { backgroundColor: 'transparent' },
          }}
        />

        <Typography
          children="Blank Answer"
          sx={{
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#3F3D56',
            textTransform: 'none',
          }}
        />
      </Box>
    ),
  },
  {
    choice: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.8em',
          alignItems: 'center',
          height: 'auto',
          width: 'relative',
          flexGrow: 1,
          border: '1px solid #DBDBDB',
          backgroundColor: '#FCFCFC',
          borderRadius: '0.3em',
          padding: '0.5em 0.7em',
          marginBottom: '0.5em',
        }}
      >
        <Checkbox
          sx={{
            color: '#8E8E8E',
            borderRadius: '0em',
            height: '0.8em',
            width: '0.8em',
            '&: hover': { backgroundColor: 'transparent' },
          }}
        />

        <Typography
          children="Blank Answer"
          sx={{
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#3F3D56',
            textTransform: 'none',
          }}
        />
      </Box>
    ),
  },
  {
    choice: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.8em',
          alignItems: 'center',
          height: 'auto',
          width: 'relative',
          flexGrow: 1,
          border: '1px solid #007FFF',
          backgroundColor: '#DFF0FF',
          borderRadius: '0.3em',
          padding: '0.5em 0.7em',
          marginBottom: '0.5em',
        }}
      >
        <Checkbox
          {...label}
          disabled
          checked
          sx={{
            color: '#8E8E8E',
            borderRadius: '0em',
            height: '0.8em',
            width: '0.8em',
            '&: hover': { backgroundColor: 'transparent' },
          }}
        />

        <Typography
          children="Blank Answer"
          sx={{
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#3F3D56',
            textTransform: 'none',
          }}
        />
      </Box>
    ),
  },
  {
    choice: (
      <Box
        sx={{
          display: 'flex',
          gap: '0.8em',
          alignItems: 'center',
          height: 'auto',
          width: 'relative',
          flexGrow: 1,
          border: '1px solid #007FFF',
          backgroundColor: '#DFF0FF',
          borderRadius: '0.3em',
          padding: '0.5em 0.7em',
          marginBottom: '0.5em',
        }}
      >
        <Checkbox
          {...label}
          disabled
          checked
          sx={{
            color: '#8E8E8E',
            borderRadius: '0em',
            height: '0.8em',
            width: '0.8em',
            '&: hover': { backgroundColor: 'transparent' },
          }}
        />

        <Typography
          children="Blank Answer"
          sx={{
            width: 'auto',
            flexGrow: 1,
            height: 'max-content',
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#3F3D56',
            textTransform: 'none',
          }}
        />
      </Box>
    ),
  },
];

function CheckedboxChecked() {
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
            children="Question 3"
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
            children="Checkboxes"
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

        {dataAnswerChoices.map(function (items, index) {
          return (
            <Box
              key={index}
              sx={{
                width: 'relative',
                height: 'auto',
              }}
            >
              {items.choice}
            </Box>
          );
        })}
        <Box
          sx={{
            width: 'relative',
            height: 'auto',
            display: 'flex',
            gap: '0.5em',
          }}
        >
          <Typography
            children="Correct Answer:"
            sx={{
              color: '#007FFF',
              fontSize: '0.8em',
              fontWeight: '600',
            }}
          />
          <Typography
            children="Option 1, Option 3, Option 4"
            sx={{
              color: '#007FFF',
              fontSize: '0.8em',
              fontWeight: '600',
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default CheckedboxChecked;
