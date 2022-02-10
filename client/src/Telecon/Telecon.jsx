import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';
import { io } from 'socket.io-client'
function Telecon() {
    const socket = io.connect('http://localhost:3001/')
    
    return (<div style={{backgroundColor: '#202124', width: '100%'}}>
        <Actions />
        <div style={{ display: 'flex', }}>{null && <ActionPanel socket={socket}/>}
            <VideoPanel socket={socket}/></div>

    </div>);
}

export default Telecon;
