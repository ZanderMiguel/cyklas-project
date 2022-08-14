import React from 'react';
import Peer from 'peerjs';
import TelRender from './TelRender';
import { Redirect } from 'react-router-dom';
// const PeerServer = require('peer');
function TeleconRoomV2({ socket }) {
  const [redirect, setRedirect] = React.useState(null);

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
  socket.on('join-group', (groups, roomID) => {
    groups.forEach((items, index) =>
      items.forEach((student) => {
        if (student.stdID === JSON.parse(localStorage.userData).data.user._id) {
          setRedirect(
            <Redirect to={`/telecon-group/${roomID}group${index}`} />
          );
        }
      })
    );
  });
  return (
    <>
      {socketID && (
        <TelRender myPeer={myPeer} socket={socket} socketID={socketID} />
      )}
      {redirect && redirect}
    </>
  );
}

export default TeleconRoomV2;
