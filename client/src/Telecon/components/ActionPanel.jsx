import React from 'react';
import Messages from './Messages';
function ActionPanel({socket}) {
  return <div style={{backgroundColor: '#FCFCFC', width: '35%', height: '85vh', marginTop: '14px'}}>
    <Messages socket={socket} />
  </div>;
}

export default ActionPanel;
