import React from 'react';

import OffCamera from './OffCamera';
import _ from 'lodash';
import OnCamera from './OnCamera';
function MainSessionBody({
  setRenderer,
  renderer,
  socket,
  members,
  myPeer,
  socketID,
  cam,
  teleRoom,
  ss,
  setSs,
  setToggleScreenShare,
}) {
  const [toggleMic, setToggleMic] = React.useState(false);
  const layout = React.useRef(null);
  const [tileWidth, setTileWidth] = React.useState(1);
  const [ssStream, setSsStream] = React.useState(null);
  React.useMemo(() => {
    layout.current &&
      setTileWidth(
        layout.current.childNodes.length >= 36
          ? 7
          : layout.current.childNodes.length >= 25
          ? 6
          : layout.current.childNodes.length >= 16
          ? 5
          : layout.current.childNodes.length >= 9
          ? 4
          : layout.current.childNodes.length >= 4
          ? 3
          : 2
      );

    socket.once('join-others', (newMember, id, roomID) => {
      members.current = _.uniqBy(
        [...newMember, ...members.current],
        (item) => item.stdID
      );

      console.log('someone joined');
      socket.emit(
        'render',
        _.uniqBy([...newMember, ...members.current], (item) => item.stdID),
        id,
        roomID
      );

      setRenderer((prev) => !prev);
    });
  }, [renderer]);

  socket.once('user-disconnected', (id) => {
    members.current = members.current.filter((item) => item.id !== id);
    setRenderer((prev) => !prev);
    //document.querySelector(`#${id}`).remove()
  });

  const handleToggleMic = () => {
    setToggleMic((prev) => !prev);
  };
  console.log(ss);
  const vid = document.getElementById('vid');
  const testDiv = document.getElementById('test');
  React.useMemo(() => {
    if (ss[socketID] === false) {
      vid.srcObject = null;
      ssStream.getVideoTracks().forEach((track) => track.stop());
      testDiv.setAttribute('style', `display: none`);
    }
    if (ss[socketID] === true) {
      navigator.mediaDevices
        .getDisplayMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          if (ss[socketID] === true) {
            testDiv.setAttribute(
              'style',
              `
            
              width: '75%';
              height: '78vh';
              margin: '0 auto';
            
            `
            );
            setSsStream(stream);
            vid.setAttribute(
              'style',
              `
            object-fit: contain;
            height: 100%;
            width: 100%;
            border-radius: 0.5em;
            position: relative;
          `
            );
            vid.srcObject = stream;
            vid.muted = true;
            vid.addEventListener('loadedmetadata', () => {
              vid
                .play()
                .then(() => {
                  console.log('stream loaded');
                })
                .catch((err) => console.log(err));
            });
          }
          /* myPeer.on('call', (call) => {
           call.answer(stream);
           const video = document.createElement('video');
           const vidRatio = document.createElement('div');
           video.muted = true;
           call.on('stream', (userVideoStream) => {
             addVideoStream(video, userVideoStream, vidRatio);
           });
         });
         socket.on('user-connected', (userId) => {
           // When user is connected,
           connectToNewUser(userId, stream); // we will automatically call them
           
         }); */
        });
    }
  }, [ss[socketID]]);
  ssStream &&
    (ssStream.getVideoTracks()[0].onended = () => {
      setSs({ [socketID]: false });
      setToggleScreenShare(false);
    });

  return (
    <div style={{ display: 'flex' }}>
      <div
        id="test"
        style={
          ss[socketID] === true
            ? {
                width: '75%',
                height: '78vh',
                margin: '0 auto',
              }
            : { display: 'none' }
        }
      >
        <video id="vid"></video>
      </div>
      <div
        style={{
          width: `${ss[socketID] === true ? '20%' : '100%'}`,
          height: '78vh',
          display: 'flex',
          gap: '0.8em',
          flexWrap: 'wrap',
          justifyContent: 'center',
          whiteSpace: 'break-spaces',
          margin: '0 auto',
        }}
        ref={layout}
      >
        <OffCamera
          socket={socket}
          layout={layout}
          members={members}
          toggleMid={toggleMic}
          tileWidth={tileWidth}
          handleToggleMic={handleToggleMic}
          myPeer={myPeer}
          cam={cam}
          socketID={socketID}
          teleRoom={teleRoom}
          ss={ss}
        />
        {/*  <OnCamera
          layout={layout}
          members={members}
          toggleMic={toggleMic}
          tileWidth={tileWidth}
          handleToggleMic={handleToggleMic}
          myPeer={myPeer}
          socket={socket}
          renderer={renderer}
          socketID={socketID}
        /> */}
      </div>
    </div>
  );
}

export default MainSessionBody;
