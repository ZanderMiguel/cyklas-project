import React from 'react'
import { Box, Grid, Backdrop, Typography } from "@mui/material";
import QuestionResult from "../QuestionResult";

function LivequizMulti() {
const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const dataChoices = [
    {
        choice: <Grid item xs = {12} onClick={handleToggle}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#7223F3",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#6719E7"
            }
        }}>
            <Typography children = "A."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12} onClick={handleToggle}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#EA4848",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#DE3E3E",
                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            }
        }}>
            <Typography children = "B."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12} onClick={handleToggle}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#66C34E",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#62BC4C"
            }
        }}>
            <Typography children = "C."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    },
    {
        choice: <Grid item xs = {12} onClick={handleToggle}
        sx = {{
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#E3A649",
            borderRadius: "0.5em",
            width: "100%",
            "&: hover": {
                cursor: "pointer",
                transition: "all 250ms",
                backgroundColor: "#DBA047"
            }
        }}>
            <Typography children = "D."
                sx = {{ 
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600",
                width: "2em",
                height: "max-content"
                }}/>

            <Typography children = "Blank Answer"
                sx = {{
                color: "white",
                fontSize: "0.9em",
                fontWeight: "600", 
                width: "auto",
                flexGrow: 1,
                height: "max-content"
                }}/>
        </Grid>
    }
];

  return (
    <>
    {dataChoices.map(function(items, index) {
        return (
            <Box key = {index}
            sx = {{
                width: "100%",
                height: "auto"
            }}>
            {items.choice}
            </Box>
        )
    })}
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

export default LivequizMulti