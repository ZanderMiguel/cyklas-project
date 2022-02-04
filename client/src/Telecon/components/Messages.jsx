import React from 'react';
import {io} from 'socket.io-client'

function Messages() {
    const socket = io.connect('http://localhost:3001/')
    const msgOutput = React.useRef(null)
    const msgContainer = React.useRef(null)
    const displayMyMsg = React.useRef(null)
    const displayMsg = React.useRef(null)
    socket.on('receive-message',message => {
        console.log(message)
        msgOutput.current.innerHTML = `<br/> ${message}`
    })
  return (<div style={{width: '100%',height: '100%',backgroundColor: '#fff',}}>
     <div style={{width: '100%', textAlign: 'center'}}><h2>Messages</h2></div>
     <div style={{width: '100%',height: '100%',display: 'grid', gridTemplateRows: '80% 10%', textAlign: 'center'}} ref={msgContainer}>
        <div style={{display: 'grid', width: '100%', gridTemplateRows: '10% 10%'}}>
            <div style={{justifySelf: 'start', textAlign: 'center', }} ref={displayMsg}></div>
            <div style={{justifySelf: 'end', textAlign: 'center'}} ref={displayMyMsg}></div>
        </div>
        <div style={{width: '100%'}}>
            <form onSubmit={(e)=>{
                e.preventDefault()
               
                socket.emit('send-message',msgOutput.current.value)
                displayMsg.current.append(msgOutput.current.value)
                console.log(displayMsg.current)
            }}>
                <input type='text' placeholder='Type your message here: ' ref={msgOutput}/>
                <input type="submit" value="send"/>
            </form>
        </div></div>
  </div>);
}

export default Messages;
