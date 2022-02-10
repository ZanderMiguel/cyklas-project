import React from 'react';
import OnCamTile from './OnCamTile';

function VideoPanel({ socket, muted, onCam }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '90vh',
        alignItems: 'center',
      }}
    >
      <OnCamTile socket={socket} muted={muted} onCam={onCam} />
    </div>
  );
}

export default VideoPanel;
