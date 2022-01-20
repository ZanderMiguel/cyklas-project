import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';
function Telecon() {
    return <div>
        <Actions />
        <div style={{display: 'flex'}}><ActionPanel />
            <VideoPanel /></div>

    </div>;
}

export default Telecon;
