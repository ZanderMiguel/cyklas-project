import React from 'react';
import OnCamTile from './OnCamTile';

function VideoPanel({socket}) {
  
  return (<div style={{display: 'flex' , width: '100%', height: '90vh', alignItems: 'center'}}><OnCamTile socket={socket} /></div>)
  
}

export default VideoPanel;
