import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Button, Avatar } from '@mui/material';
import { CallEnd } from '@mui/icons-material';
import AvatarIcon from "../assets/ImageJaven/Avatar.png";

function JoinQuiz({ open, close, maxWidth }) {
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              height: 'auto',
              width: 'relative',
            }}
          >
            <Button
              onClick={close}
              variant="contained"
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: "none",
                '&: hover': {
                  backgroundColor: 'transparent'
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: "none"
              }}
            >
              Join
            </Button>
          </Box>
        }
      >
        <Grid item xs={12} sx = {{ padding: "0em 2em" }}>
            <Box
            sx = {{
                width: "30em",
                height: "auto"
            }}>
                <Typography children = "Untitled Quiz"
                sx = {{
                    color: "#3F3D56",
                    fontSize: "1.1em",
                    fontWeight: "700",
                    textTransform: "Uppercase",
                    marginBottom: "0.3em"
                }}/>

                <Box
                sx = {{
                    display: "flex",
                    gap: "1.5em",
                    alinItems: "center",
                    height: "auto"
                }}>
                    <Typography children = "4 items"
                sx = {{
                    color: "#3F3D56",
                    fontSize: "0.9em",
                    fontWeight: "600",
                }}/>

                <Typography children = "Overall points: 100 points"
                sx = {{
                    color: "#3F3D56",
                    fontSize: "0.9em",
                    fontWeight: "600",
                }}/>
                </Box>
            </Box>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default JoinQuiz;
