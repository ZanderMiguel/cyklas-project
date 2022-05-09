import React from 'react'
import { Box, Grid, Backdrop, Typography } from "@mui/material";
import QuestionResult from "../QuestionResult";
import SampleImage from "../../assets/ImageJaven/SampleImage.jpg";

function LivequizImagemulti() {
const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const dataChoices = [
    {
        choice: <Grid item xs = {6} onClick={handleToggle}
        sx = {{
            padding: "0.5em",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                padding: "0em"
            }
        }}>
            <Box
            sx = {{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "2.5em 1.2em",
                backgroundImage: `url(${SampleImage})`,
                backgroundSize: 'cover',
                border: "3px solid #7223F3",
                borderRadius: "0.5em",
                width: "100%"
            }}>
            </Box>
        </Grid>
    },
    {
        choice: <Grid item xs = {6} onClick={handleToggle}
        sx = {{
            padding: "0.5em",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                padding: "0em"
            }
        }}>
            <Box
            sx = {{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "2.5em 1.2em",
                backgroundImage: `url(${SampleImage})`,
                backgroundSize: 'cover',
                border: "3px solid #EA4848",
                borderRadius: "0.5em",
                width: "relative"
            }}>
            </Box>
        </Grid>
    },
    {
        choice: <Grid item xs = {6} onClick={handleToggle}
        sx = {{
            padding: "0.5em",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                padding: "0em"
            }
        }}
        >
            <Box
            sx = {{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "2.5em 1.2em",
                backgroundImage: `url(${SampleImage})`,
                backgroundSize: 'cover',
                border: "3px solid #66C34E",
                borderRadius: "0.5em",
                width: "relative"
            }}></Box>
        </Grid>
    },
    {
        choice: 
        <Grid item xs = {6} onClick={handleToggle}
        sx = {{
            padding: "0.5em",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                padding: "0em"
            }
        }}
        >
            <Box
            sx = {{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "2.5em 1.2em",
                backgroundImage: `url(${SampleImage})`,
                backgroundSize: 'cover',
                border: "3px solid #E3A649",
                borderRadius: "0.5em",
                width: "relative"
            }}>
            </Box> 
        </Grid>
    }
];

  return (
    <>
    <Grid container item xs = {12}
            sx = {{
                width: "100%",
                height: "auto"
            }}>
    {dataChoices.map(function(items, index) {
        return (
            <>
            {items.choice}
            </>
        )
    })}
    </Grid>
    <Backdrop
sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
open={open}
onClick={handleClose}
>
<QuestionResult/>
</Backdrop>
</>
  )
}

export default LivequizImagemulti