import React from 'react'
import {Box, Typography } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { useHistory } from 'react-router-dom'
function Livequiz_wronganswer({socket}) {
  React.useMemo(()=>{socket.emit('break')},[])
  const history = useHistory()
  const [points,setPoints] = React.useState('Loading...')
  const [count,setCount] = React.useState(4)
  socket.on('next',(point,breakTime)=>{
    setPoints(`+ ${point}`)
    setCount(breakTime)
  })
  socket.on('next-question',()=>{
    history.push('/livequiz_multiplechoice')
  })
  return (
    <Box className = "container" sx = {{
        width: "100%",
        height: "100vh",
        backgroundColor: "#E73535",
        display: "flex",
        gap: "0.5em",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Box className = "Headline" sx = {{
            width: "auto",
            height: "auto",
            display: "flex",
            gap: "1em",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <CancelOutlined sx = {{
            fontSize: "4em",
            color: "white"
        }}/>

        <Typography sx = {{ 
            fontSize: "2em",
            fontWeight: "600",
            color: "white",
            textTransform: "Capitalize"
            }}>
            Your answer is wrong.
        </Typography>
        </Box>

        <Typography sx = {{
            width: "relative",
            fontSize: "1.1em",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            textTransform: "Uppercase"
            }}>
            {points}
        </Typography>
        
        <div>
          <Typography sx = {{
            width: "relative",
            fontSize: "1.1em",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            textTransform: "Uppercase"
            }}>
            {`Get ready in ${count-1}...`}
        </Typography></div>
        
    </Box>
  )
}

export default Livequiz_wronganswer