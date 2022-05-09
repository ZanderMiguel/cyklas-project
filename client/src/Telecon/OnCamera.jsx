import React from 'react';

function OnCamera({ myPeer, layout, socket, tileWidth }) {
  const myVideo = document.createElement('video');
  const myVidRatio = document.createElement('div');
  const peers = {};
  socket.on('user-disconnected', (userId) => {
    if (peers[userId]) peers[userId].close();
  });
  function addVideoStream(video, stream, vidRatio) {
    console.log(video);
    vidRatio.style.setProperty('minWidth', `calc(85%/${tileWidth})%`);
    vidRatio.style.setProperty(
      'height',
      `calc(${layout.current && layout.current}/${tileWidth})`
    );
    video.style.setProperty('object-fit', 'cover');
    video.style.setProperty('width', `100%`);
    video.style.setProperty('height', `100%`);

    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video
        .play()
        .then(() => {
          vidRatio.append(video);
          layout.current.append(vidRatio);
        })
        .catch((err) => console.log(err));
    });
  }
  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    const vidRatio = document.createElement('div');
    video.muted = true;
    call.on('stream', (userVideoStream) => {
      addVideoStream(video, userVideoStream, vidRatio);
    });
    call.on('close', () => {
      video.remove();
      vidRatio.remove();
    });
    peers[userId] = call;
  }
  React.useMemo(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream, myVidRatio);
        myPeer.on('call', (call) => {
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
          //setOffTiles([...offTiles,<OffCamTile />])
        });
      });
  }, [Object.keys(peers).length]);
  return <></>;
}

export default OnCamera;
