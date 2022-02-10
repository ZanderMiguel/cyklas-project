// import React from 'react';
// import Actions from './components/Actions';
// import ActionPanel from './components/ActionPanel';
// import VideoPanel from './components/VideoPanel';

// function Telecon() {

//     return (<div>
//         <Actions />
//         <div style={{ display: 'flex' }}><ActionPanel />
//             <VideoPanel /></div>

//     </div>);
// }

// export default Telecon;

import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';
import { io } from 'socket.io-client';
function Telecon() {
  const socket = io.connect('http://localhost:3001/');
  const [muted, setMuted] = React.useState(true);
  const [onCam, setOnCam] = React.useState(true);
  return (
    <div style={{ backgroundColor: '#202124', width: '100%' }}>
      <Actions
        muted={muted}
        onCam={onCam}
        setMuted={setMuted}
        setOnCam={setOnCam}
      />
      <div style={{ display: 'flex' }}>
        {null && <ActionPanel socket={socket} />}
        <VideoPanel socket={socket} muted={muted} onCam={onCam} />
      </div>
    </div>
  );
}

export default Telecon;
