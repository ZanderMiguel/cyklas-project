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
}) {
  const [toggleMic, setToggleMic] = React.useState(false);
  const layout = React.useRef(null);
  const [tileWidth, setTileWidth] = React.useState(1);

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
    });
  }, [renderer]);
  React.useEffect(() => {}, []);

  socket.once('user-disconnected', (id) => {
    members.current = members.current.filter((item) => item.id !== id);
    setRenderer((prev) => !prev);
    //document.querySelector(`#${id}`).remove()
  });

  const handleToggleMic = () => {
    setToggleMic((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          width: `100%`,
          height: '78vh',
          display: 'flex',
          gap: '0.8em',
          flexWrap: 'wrap',
          justifyContent: 'center',
          whiteSpace: 'break-spaces',
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
    </>
  );
}

export default MainSessionBody;
