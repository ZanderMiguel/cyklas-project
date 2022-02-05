import React from 'react';
import MemTile from './MemTile';

function VideoPanel({socket}) {
  
  return (<div style={{display: 'flex' , width: '100%'}}><MemTile socket={socket} /></div>)
  
}

export default VideoPanel;
