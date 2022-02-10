import React from 'react';
import {Divider,IconButton} from '@mui/material'
import send from "../../assets/Images/send.png"
import paner from '../../assets/Images/paner.png'
function Messages({ socket }) {

    const msgOutput = React.useRef(null)
    const msgContainer = React.useRef(null)
    const [displayMsg,setDisplayMsg] = React.useState([])
   
    
    socket.on('receive-message', message => {

        setDisplayMsg([...displayMsg,message])
    })
    return (<div style={{ width: '100%', height: '100%', backgroundColor: '#fff', }}>
        <div style={{ width: '100%', textAlign: 'center' }}><h2>Message Area</h2></div><Divider />
        <div style={{ width: '100%', height: '80%', marginTop: '5%' }} >
            <div style={{  width: '100%', }} id="obob" ref={msgContainer}>
               
            {displayMsg.sort((a,b)=>b-a).map((item)=>{
                return <div style={{justifySelf: 'flex-start', textAlign: 'left', width: '100%', height: '24px', marginLeft: '10px'}} key={parseInt(Math.random()*Date.now())}>You: {item}</div>})}
           
            </div>
        </div>
        <div style={{ width: '100%', display: 'flex' }}>
        <img src={paner} alt="" style={{width: '36px', margin: 'auto 0 auto auto'}}/>
            <form onSubmit={(e) => {
                e.preventDefault()

                socket.emit('send-message', msgOutput.current.value)
                setDisplayMsg([...displayMsg,msgOutput.current.value])
                msgOutput.current.value = ''
                msgOutput.current.focus()
                

            }}
                style={{ margin: '0 auto',
                backgroundColor: '#EBEBEB', 
                borderRadius: '50px', 
                display: 'flex', 
                alignItems: 'center',
                width: '75%',
                height: '36px'  }}>
                
                
                <input type='text' placeholder='Type your message here: ' ref={msgOutput} 
                style={{backgroundColor: 'transparent',
                border: 'none', margin: '0 auto',
                borderRadius: '50px', height: '100%',
                width: '70%'
                }}
                onFocus={(e)=>{
                    e.target.style.outlineWidth = "0"
                }}
                />
                <IconButton type="submit" sx={{margin: 'auto 0 auto auto'}}>
                    <img src={send} alt=""/>
                </IconButton>
                
            </form>
        </div>
    </div>);
}

export default Messages;
