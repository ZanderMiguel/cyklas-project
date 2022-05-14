import React from 'react'
import { Box, Grid, Backdrop, Typography } from "@mui/material";
import QuestionResult from "./QuestionResult";

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
        choice: <Box onClick={handleToggle}
        sx = {{
            margin: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#7223F3",
            borderRadius: "0.5em",
            width: "relative",
            "&: hover": {
                margin: "0.5em 0em",
                cursor: "pointer",
                transition: "all 250ms"
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
        </Box>
    },
    {
        choice: <Box onClick={handleToggle}
        sx = {{
            margin: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#EA4848",
            borderRadius: "0.5em",
            width: "relative",
            "&: hover": {
                margin: "0em",
                cursor: "pointer",
                transition: "all 250ms",}
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
        </Box>
    },
    {
        choice: <Box onClick={handleToggle}
        sx = {{
            margin: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#66C34E",
            borderRadius: "0.5em",
            width: "relative",
            "&: hover": {
                margin: "0em",
                cursor: "pointer",
                transition: "all 250ms",
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
        </Box>
    },
    {
        choice: <Box onClick={handleToggle}
        sx = {{
            margin: "0.5em",
            display: "flex",
            alignItems: "center",
            padding: "0.8em 1.2em",
            backgroundColor: "#E3A649",
            borderRadius: "0.5em",
            width: "relative",
            "&: hover": {
                margin: "0em",
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
        </Box>
    }
];

  return (
    <>
    {dataChoices.map(function(items, index) {
        return (
            <>
            {items.choice}
            </>
        )
    })}
    <Backdrop
sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
open={open}
onClick={handleClose}
>
{/* <TimerWait/> */}
<QuestionResult/>
</Backdrop>
</>
  )
}

export default LivequizMulti