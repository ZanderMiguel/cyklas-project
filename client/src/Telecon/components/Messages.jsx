import React from 'react';


function Messages({socket}) {
    
    const msgOutput = React.useRef(null)
    const msgContainer = React.useRef(null)
    const displayMyMsg = React.useRef(null)
    const displayMsg = React.useRef(null)
    socket.on('receive-message',message => {
        console.log(message)
        displayMsg.current.append(message)
    })
  return (<div style={{width: '100%',height: '100%',backgroundColor: '#fff',}}>
     <div style={{width: '100%', textAlign: 'center'}}><h2>Messages</h2></div>
     <div style={{width: '100%',height: '85%',display: 'flex',  textAlign: 'center'}} ref={msgContainer}>
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{justifySelf: 'flex-start', textAlign: 'center',}} ref={displayMsg}></div>
            <div style={{justifySelf: 'flex-end', textAlign: 'center', }} ref={displayMyMsg}></div>
        </div>
        </div>
        <div style={{width: '100%', }}>
            <form onSubmit={(e)=>{
                e.preventDefault()
               
                socket.emit('send-message',msgOutput.current.value)
                displayMyMsg.current.append(msgOutput.current.value)
                
            }}
            style={{ margin: '0 auto', display: 'table'}}>
                <input type='text' placeholder='Type your message here: ' ref={msgOutput}/>
                <input type="submit" value="send"/>
            </form>
        </div>
  </div>);
}

export default Messages;
