import React from 'react';
import OnCamTile from './OnCamTile';
import OffCamTile from './OffCamTile';
import Peer from 'peerjs';
import { useParams } from 'react-router-dom';
function VideoPanel({ socket, muted, onCam }) {
  /*   const [state,setState] = React.useState([])
  const layout = React.useRef(null)
  const [tileWidth,setTileWidth] = React.useState(null) 
  const peers = {};

  setInterval(()=>{
    setState([...state,<OffCamTile tileWidth={tileWidth}/>])
    setTileWidth(layout.current.childNodes.length >= 36 ? 7: layout.current.childNodes.length >= 25 ? 6 : layout.current.childNodes.length >= 16? 5: layout.current.childNodes.length >= 9 ? 4: layout.current.childNodes.length >= 4? 3 : 2)
    
    
    layout.current.childNodes.forEach((item,idx)=>{
      
        console.log(layout.current.childNodes.length)
        item.style.setProperty('width',`calc(94%/${tileWidth})`)
        item.style.setProperty('height',`calc(94%/${tileWidth})`)
        item.style.setProperty('margin',`calc(1%/${tileWidth})`)
        
    })
    
    
  },2000000  ) */

  const myPeer = new Peer(undefined, {
    host: '/',
    port: '3002',
  });
  const { teleRoom } = useParams();
  myPeer.on('open', (id) => {
    // socket.emit('join-room', teleRoom, id);
  });
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {
        <OnCamTile
          socket={socket}
          muted={muted}
          onCam={onCam}
          myPeer={myPeer}
        />
      }
    </div>
  );
}

export default VideoPanel;
