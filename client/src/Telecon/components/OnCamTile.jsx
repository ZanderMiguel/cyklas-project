import React from 'react';
import offCamAvatar from '../../assets/Images/avatar_male.png';
import mute18 from '../../assets/Images/mute18.png';
import ReactDOMServer from 'react-dom/server';
import OffCamTile from './OffCamTile';
function MemTile({ socket, muted, onCam, myPeer }) {
  const vidContainer = React.useRef(null);
  const [offTiles, setOffTiles] = React.useState([<OffCamTile />]);

  const myVidRatio = document.createElement('div');
  document.documentElement.style.setProperty('background-color', '#202124');
  const myVidContainer = React.useRef(myVidRatio);

  // const peers = {};
  socket.on('user-disconnected', (userId) => {
    if (peers[userId]) peers[userId].close();
    child();
  });

  const myVideo = document.createElement('video');
  const myVid = React.useRef(myVideo);
  const [myStream, setMyStream] = React.useState(null);

  const child = () => {
    vidContainer.current.childNodes.forEach((item) => {
      if (vidContainer.current.childNodes.length === 1) {
        item.style.setProperty('height', `100%`);
        item.style.setProperty('width', `100%`);
      } else {
        item.style.setProperty(
          'width',
          `calc(94%/${
            vidContainer.current.childNodes.length >= 36
              ? 7
              : vidContainer.current.childNodes.length >= 25
              ? 6
              : vidContainer.current.childNodes.length >= 16
              ? 5
              : vidContainer.current.childNodes.length >= 9
              ? 4
              : vidContainer.current.childNodes.length >= 4
              ? 3
              : 2
          })`
        );
        item.style.setProperty(
          'height',
          `calc(94%/${
            vidContainer.current.childNodes.length >= 36
              ? 7
              : vidContainer.current.childNodes.length >= 25
              ? 6
              : vidContainer.current.childNodes.length >= 16
              ? 5
              : vidContainer.current.childNodes.length >= 9
              ? 4
              : vidContainer.current.childNodes.length >= 4
              ? 3
              : 2
          })`
        );
        item.style.setProperty('margin', `1%)`);
      }
    });
  };

  const handleCam = (stream, myVid) => {
    if (onCam) {
      myVidContainer.current.remove();
      myVideo.muted = true;
      addVideoStream(myVideo, stream, myVidRatio);
    } else {
      myVid.current.pause();
      myVid.current.srcObject = null;
      myVidContainer.current.replaceChild(
        document
          .createRange()
          .createContextualFragment(
            `${ReactDOMServer.renderToStaticMarkup(<OffCamTile />)}`
          ),
        ...myVidContainer.current.childNodes
      );
    }
  };
  React.useMemo(() => {
    handleCam(myStream, myVid);
  }, [onCam]);

  //Getting your video and audio stream
  myVid.current.muted = muted;

  React.useMemo(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setMyStream(stream);
        addVideoStream(myVideo, stream, myVidRatio);
        myPeer.on('call', (call) => {
          call.answer(stream);
          const video = document.createElement('video');
          const vidRatio = document.createElement('div');
          video.muted = true;
          call.on('stream', (userVideoStream) => {
            console.log('success', userVideoStream);
            addVideoStream(video, userVideoStream, vidRatio, child);
          });
        });
        //   socket.on('user-connected', (userId) => {
        //     // When user is connected,
        //     connectToNewUser(userId, stream); // we will automatically call them
        //     console.log(userId);
        //     /* setOffTiles([...offTiles,<OffCamTile />])
        //     child() */
        //   });
      });
  }, [Object.keys(peers).length]);
  //Displaying video stream
  function addVideoStream(video, stream, vidRatio, child) {
    vidRatio.style.setProperty('width', `100%`);
    vidRatio.style.setProperty('height', `100%`);
    vidRatio.style.setProperty('margin', `5px`);

    video.style.setProperty('object-fit', 'cover');
    video.style.setProperty('width', `100%`);
    video.style.setProperty('height', `100%`);

    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video
        .play()
        .then(() => {
          child && child();
          vidRatio.append(video);
          vidContainer.current.append(vidRatio);
        })
        .catch((err) => console.log(err));
    });
  }
  //Other user's video stream
  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream); // Calling a user and sending our stream
    const video = document.createElement('video');
    const vidRatio = document.createElement('div');
    video.muted = true;
    call.on('stream', (userVideoStream) => {
      console.log('suckcess');
      addVideoStream(video, userVideoStream, vidRatio, child);
    });
    call.on('close', () => {
      video.remove();
      vidRatio.remove();
      child();
    });
    peers[userId] = call;
    child();
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: '10px',
        height: '100%',
        width: '100%',
      }}
      ref={vidContainer}
    >
      {/* {offTiles} */}
    </div>
  );
}

export default MemTile;
