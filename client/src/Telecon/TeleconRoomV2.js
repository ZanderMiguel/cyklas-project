import React from 'react';
import Peer from 'peerjs';
import TelRender from './TelRender';
function TeleconRoomV2({ socket }) {
  const [socketID, setSocketID] = React.useState(null);
  const myPeer = new Peer(undefined, {
    host: '/',
    port: '3002',
  });

  React.useMemo(() => {
    myPeer.on('open', (id) => {
      setSocketID(id);
    });
  }, []);
  return (
    <>
      {socketID && (
        <TelRender myPeer={myPeer} socket={socket} socketID={socketID} />
      )}
    </>
  );
}

export default TeleconRoomV2;
