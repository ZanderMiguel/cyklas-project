import React from 'react'
import { Box, Grid, Backdrop, Typography } from "@mui/material";
import QuestionResult from "./QuestionResult";
import ChoiceA from "../../assets/ImageJaven/ChoiceA.png";
import ChoiceB from "../../assets/ImageJaven/ChoiceB.png";
import ChoiceC from "../../assets/ImageJaven/ChoiceC.png";
import ChoiceD from "../../assets/ImageJaven/ChoiceD.png";
import TimerWait from '../TimerWait';

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
        choice: <Box onClick={handleToggle}
        sx = {{
            width: "50%",
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
                padding: "3.5em 1.2em",
                backgroundColor: "white",
                backgroundImage: `url(${ChoiceA})`,
                backgroundSize: 'cover',
                border: "3px solid #7223F3",
                borderRadius: "0.5em",
                width: "100%"
            }}>
            </Box>
        </Box>
    },
    {
        choice: <Box onClick={handleToggle}
        sx = {{
            width: "50%",
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
                padding: "3.5em 1.2em",
                backgroundColor: "white",
                backgroundImage: `url(${ChoiceB})`,
                backgroundSize: 'cover',
                border: "3px solid #EA4848",
                borderRadius: "0.5em",
                width: "relative"
            }}>
            </Box>
        </Box>
    },
    {
        choice: <Box onClick={handleToggle}
        sx = {{
            width: "50%",
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
                padding: "3.5em 1.2em",
                backgroundColor: "white",
                backgroundImage: `url(${ChoiceC})`,
                backgroundSize: 'cover',
                border: "3px solid #66C34E",
                borderRadius: "0.5em",
                width: "relative"
            }}></Box>
        </Box>
    },
    {
        choice: 
        <Box onClick={handleToggle}
        sx = {{
            width: "50%",
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
                padding: "3.5em 1.2em",
                backgroundColor: "white",
                backgroundImage: `url(${ChoiceD})`,
                backgroundSize: 'cover',
                border: "3px solid #E3A649",
                borderRadius: "0.5em",
                width: "relative"
            }}>
            </Box> 
        </Box>
    }
];

  return (
    <Box
    sx = {{
        display: "flex",
                alignItems: "center",
                flexWrap: "wrap"
    }}>
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
</Box>
  )
}

export default LivequizImagemulti