import React from 'react'
import {Box, Typography} from "@mui/material";
import { TimerOutlined} from "@mui/icons-material";

function LivequizTimer() {
  return (
      <>
    <Box
            sx = {{
          position: 'fixed',
          top: 15,
          borderRadius: "0.8em",
          zIndex: 1,
          background: "rgba(36, 37, 73)",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                padding: "0.8em",
                width: "25%",
                height: "auto",
                display: "flex",
                gap: "0.8em",
                alignItems: "center",
                justifyContent: "center"
            }}>
    <Box
        className="Timer"
        sx={{
          display: 'flex',
          gap: '0.5em',
          width: 'auto',
          height: 'max-content',
        }}
      >
        <TimerOutlined
          sx={{
            color: 'white',
            fontSize: '2em',
          }}
        />
        <Typography
          sx={{
            color: 'white',
            fontSize: '1.2em',
            fontWeight: '600',
            marginTop: '0.1em',
            height: 'max-content',
            width: 'auto',
          }}
        >
            00:00:00
        </Typography>
      </Box>
      </Box>
      </>
  )
}

export default LivequizTimer