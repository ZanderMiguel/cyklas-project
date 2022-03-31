import React from 'react'
import { Box, Typography } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";
import { useHistory } from 'react-router-dom'
function Livequiz_correctanswer({socket}) {
React.useMemo(()=>{socket.emit('break')},[])
const history = useHistory()
const [points,setPoints] = React.useState('Loading...')
const [count,setCount] = React.useState(4)
socket.on('next',(point,breakTime)=>{
  setPoints(`+ ${point}`)
  setCount(breakTime)
})
socket.on('next-question',(index,arrLen)=>{
  if(index < arrLen){
  history.push(`/livequiz_multiplechoice/${index}`)

  }else{
  if(index === arrLen){
    socket.off('next-question',()=>{
      history.push(`/student_rankings`)
      socket.removeAllListeners('next-question')

    })
    
  }else{
    if(index > arrLen){
      history.push(`/not-found`)
    }
  }
  }
  
})
  return (
    <Box className = "container" sx = {{
        width: "100%",
        height: "100vh",
        backgroundColor: "#39BA45",
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
        <CheckCircleOutlined sx = {{
            fontSize: "4em",
            color: "white"
        }}/>

        <Typography sx = {{ 
            fontSize: "2em",
            fontWeight: "600",
            color: "white",
            textTransform: "Capitalize"
            }}>
            Your answer is correct!
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

export default Livequiz_correctanswer