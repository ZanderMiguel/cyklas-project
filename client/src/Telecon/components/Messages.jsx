import React from 'react';


function Messages({ socket }) {

    const msgOutput = React.useRef(null)
    const msgContainer = React.useRef(null)
    const [displayMsg,setDisplayMsg] = React.useState([])
   
    
    socket.on('receive-message', message => {

        setDisplayMsg([...displayMsg,message])
    })
    return (<div style={{ width: '100%', height: '100%', backgroundColor: '#fff', }}>
        <div style={{ width: '100%', textAlign: 'center' }}><h2>Messages</h2></div>
        <div style={{ width: '100%', height: '85%' }} >
            <div style={{  width: '100%', }} id="obob" ref={msgContainer}>
               
            {displayMsg.sort((a,b)=>b-a).map((item)=>{
                return <div style={{justifySelf: 'flex-start', textAlign: 'left', width: '35%', height: '24px', marginLeft: '10px'}} key={parseInt(Math.random()*Date.now())}>You: {item}</div>})}
           
            </div>
        </div>
        <div style={{ width: '100%', }}>
            <form onSubmit={(e) => {
                e.preventDefault()

                socket.emit('send-message', msgOutput.current.value)
                setDisplayMsg([...displayMsg,msgOutput.current.value])

                

            }}
                style={{ margin: '0 auto', display: 'table' }}>
                <input type='text' placeholder='Type your message here: ' ref={msgOutput} />
                <input type="submit" value="send" />
            </form>
        </div>
    </div>);
}

export default Messages;
