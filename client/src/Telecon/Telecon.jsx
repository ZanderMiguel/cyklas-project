import React from 'react';
import Actions from './components/Actions';
import ActionPanel from './components/ActionPanel';
import VideoPanel from './components/VideoPanel';

function Telecon({socket}) {
  
  const [muted, setMuted] = React.useState(true);
  const [onCam, setOnCam] = React.useState(true);
  return (
    <div style={{ backgroundColor: '#202124', width: '100%', height: '100%' }}>
      <Actions
        muted={muted}
        onCam={onCam}
        setMuted={setMuted}
        setOnCam={setOnCam}
      />
      <div style={{ display: 'flex', height: '82vh' }}>
        {null && <ActionPanel socket={socket} />}
        <VideoPanel socket={socket} muted={muted} onCam={onCam} />
      </div>
    </div>
  );
}

export default Telecon;
