import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { Timer, SportsScore, Star, Layers } from '@mui/icons-material';
import useStyle from '../Styles/StudentLiveQuiz_multiplechoice_style';

function StudentLiveQuiz_multiplechoice() {
  const { designs } = useStyle();

  return (
    <Box
      className="Container"
      sx={{
        padding: '1em 0em',
        width: '100%',
        height: '100vh',
        backgroundColor: '#C4B4E5',
      }}
    >
      {/* <Container maxWidth = "lg" sx = {{backgroundColor: "#C4B4E5"}}> */}
      <Grid
        container
        columnSpacing={2}
        sx={{
          padding: '0em 2em 1em 2em',
        }}
      >
        <Grid item xs={12} sm={6} lg={3}>
          <Box
            className="Timer"
            sx={{
              backgroundColor: 'transparent',
              padding: '0.5em',
              display: 'flex',
              gap: '0.4em',
              flexDirection: 'column',
              // justifyContent: "center",
              // alignItems: "center",
              border: '2px solid white',
              borderRadius: '0.8em',
              height: 'auto',
            }}
          >
            <Box
              className="Timer-sub"
              sx={{
                width: '100%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: '0.6em',
              }}
            >
              <Timer
                sx={{
                  color: 'White',
                  height: '1em',
                  width: '1em',
                }}
              />

              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'Uppercase',
                  fontSize: '1.1em',
                  fontWeight: '600',
                }}
              >
                Timer
              </Typography>
            </Box>
            <Box
              className="Time"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            >
              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'none',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                39 seconds
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Score_Grid_Style}>
          <Box
            className="Score"
            sx={{
              backgroundColor: 'transparent',
              padding: '0.5em',
              display: 'flex',
              gap: '0.4em',
              flexDirection: 'column',
              // justifyContent: "center",
              // alignItems: "center",
              border: '2px solid white',
              borderRadius: '0.8em',
              height: 'auto',
            }}
          >
            <Box
              className="Score-sub"
              sx={{
                width: '100%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: '0.6em',
              }}
            >
              <SportsScore
                sx={{
                  color: 'White',
                  height: '1em',
                  width: '1em',
                }}
              />

              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'Uppercase',
                  fontSize: '1.1em',
                  fontWeight: '600',
                }}
              >
                Score
              </Typography>
            </Box>
            <Box
              className="Score"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            >
              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'none',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                0 points
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
          <Box
            className="Points"
            sx={{
              backgroundColor: 'transparent',
              padding: '0.5em',
              display: 'flex',
              gap: '0.4em',
              flexDirection: 'column',
              // justifyContent: "center",
              // alignItems: "center",
              border: '2px solid white',
              borderRadius: '0.8em',
              height: 'auto',
            }}
          >
            <Box
              className="Points-sub"
              sx={{
                width: '100%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: '0.6em',
              }}
            >
              <Star
                sx={{
                  color: 'White',
                  height: '1em',
                  width: '1em',
                }}
              />

              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'Uppercase',
                  fontSize: '1.1em',
                  fontWeight: '600',
                }}
              >
                Points
              </Typography>
            </Box>
            <Box
              className="Points"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            >
              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'none',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                2
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
          <Box
            className="Items"
            sx={{
              backgroundColor: 'transparent',
              padding: '0.5em',
              display: 'flex',
              gap: '0.4em',
              flexDirection: 'column',
              // justifyContent: "center",
              // alignItems: "center",
              border: '2px solid white',
              borderRadius: '0.8em',
              height: 'auto',
            }}
          >
            <Box
              className="Items-sub"
              sx={{
                width: '100%',
                height: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: '0.6em',
              }}
            >
              <Layers
                sx={{
                  color: 'White',
                  height: '1em',
                  width: '1em',
                }}
              />

              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'Uppercase',
                  fontSize: '1.1em',
                  fontWeight: '600',
                }}
              >
                Items
              </Typography>
            </Box>
            <Box
              className="Items"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            >
              <Typography
                noWrap
                sx={{
                  color: 'White',
                  textTransform: 'none',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                1 / 3
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer3_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-a"
            onClick={() => {}}
            sx={{
              padding: '0.5em 1.4em',
              borderRadius: '0.3em',
              backgroundColor: '#975DF5',
              width: 'relative',
              height: 'relative',
              display: 'flex',
              '&: hover': {
                cursor: 'pointer',
                backgroundColor: '#8647ED',
                transition: 'all 300ms',
              },
            }}
          >
            <Box
              className="Quiz-item"
              sx={{
                height: '1.9em',
                width: '1.9em',
                margin: '0em 0.3em 1em 0.8em',
                backgroundColor: 'White',
                borderRadius: '3em',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9em',
                  color: '#975DF5',
                  fontWeight: '600',
                  margin: '0.4em 0.3em 0.3em 0.7em',
                }}
              >
                A.
              </Typography>
            </Box>
            <Typography
              noWrap
              sx={{
                padding: '0.4em 0em 0em 0em',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                width: '100%',
                height: 'relative',
              }}
            >
              Blank Answer
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-b"
            onClick={() => {}}
            sx={{
              padding: '0.5em 1.4em',
              borderRadius: '0.3em',
              backgroundColor: '#F55D5D',
              width: 'relative',
              height: 'relative',
              display: 'flex',
              '&: hover': {
                cursor: 'pointer',
                backgroundColor: '#F34F4F',
                transition: 'all 300ms',
              },
            }}
          >
            <Box
              className="Quiz-item"
              sx={{
                height: '1.9em',
                width: '1.9em',
                margin: '0em 0.3em 1em 0.8em',
                backgroundColor: 'White',
                borderRadius: '3em',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9em',
                  color: '#F55D5D',
                  fontWeight: '600',
                  margin: '0.4em 0.3em 0.3em 0.7em',
                }}
              >
                B.
              </Typography>
            </Box>
            <Typography
              noWrap
              sx={{
                padding: '0.4em 0em 0em 0em',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                width: '100%',
                height: 'relative',
              }}
            >
              Blank Answer
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer4_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-c"
            onClick={() => {}}
            sx={{
              padding: '0.5em 1.4em',
              borderRadius: '0.3em',
              backgroundColor: '#6CCF53',
              width: 'relative',
              height: 'relative',
              display: 'flex',
              '&: hover': {
                cursor: 'pointer',
                backgroundColor: '#64C94B',
                transition: 'all 300ms',
              },
            }}
          >
            <Box
              className="Quiz-item"
              sx={{
                height: '1.9em',
                width: '1.9em',
                margin: '0em 0.3em 1em 0.8em',
                backgroundColor: 'White',
                borderRadius: '3em',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9em',
                  color: '#6CCF53',
                  fontWeight: '600',
                  margin: '0.4em 0.3em 0.3em 0.7em',
                }}
              >
                C.
              </Typography>
            </Box>
            <Typography
              noWrap
              sx={{
                padding: '0.4em 0em 0em 0em',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                width: '100%',
                height: 'relative',
              }}
            >
              Blank Answer
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-d"
            onClick={() => {}}
            sx={{
              padding: '0.5em 1.4em',
              borderRadius: '0.3em',
              backgroundColor: '#F1B04E',
              width: 'relative',
              height: 'relative',
              display: 'flex',
              '&: hover': {
                cursor: 'pointer',
                backgroundColor: '#EAA845',
                transition: 'all 300ms',
              },
            }}
          >
            <Box
              className="Quiz-item"
              sx={{
                height: '1.9em',
                width: '1.9em',
                margin: '0em 0.3em 1em 0.8em',
                backgroundColor: 'White',
                borderRadius: '3em',
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.9em',
                  color: '#F1B04E',
                  fontWeight: '600',
                  margin: '0.4em 0.3em 0.3em 0.7em',
                }}
              >
                D.
              </Typography>
            </Box>
            <Typography
              noWrap
              sx={{
                padding: '0.4em 0em 0em 0em',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                width: '100%',
                height: 'relative',
              }}
            >
              Blank Answer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentLiveQuiz_multiplechoice;
