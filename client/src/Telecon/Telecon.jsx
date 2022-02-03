import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';

function Telecon() {
    
    
    return (<div style={{backgroundColor: '#202124'}}>
        <Actions />
        <div style={{ display: 'flex' }}><ActionPanel />
            <VideoPanel /></div>

    </div>);
}

export default Telecon;
