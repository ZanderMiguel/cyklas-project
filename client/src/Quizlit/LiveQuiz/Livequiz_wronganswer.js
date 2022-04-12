import React from 'react'
import {Box, Typography } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";
import { useHistory } from 'react-router-dom'
function Livequiz_wronganswer({socket}) {
  
  const history = useHistory()
  const [count,setCount] = React.useState(4)
  socket.once('next',(point,breakTime)=>{
    setCount(breakTime)
  })
  React.useMemo(()=>{
    socket.emit('break','123',JSON.parse(localStorage.userData).data.user.firstName)
  socket.once('next-question',(index,arrLen)=>{
    if(index < arrLen){
    history.push(`/livequiz_multiplechoice/${index}`)

    }else{
    if(index === arrLen){
      history.push(`/student_rankings`)
      socket.removeAllListeners()
      
    }else{
      if(index > arrLen){
        history.push(`/not-found`)
      }
    }
    }
    
  })},[])
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
            No points
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