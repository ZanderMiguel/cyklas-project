import React from 'react';
import { Redirect } from 'react-router-dom';
function Lobby({ socket }) {
  const [nameArr, setNameArr] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);
  socket.once('joined-quizLobby', (lobby, names) => {
    setNameArr(names);
  });
  return (
    <div style={{ width: '40%', height: '700px' }}>
      {nameArr &&
        nameArr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      <input
        type="button"
        value="start"
        style={{ position: 'absolute', bottom: '0' }}
        onClick={() =>
          setRedirect(<Redirect to="/livequiz_multiplechoice/0" />)
        }
      />
      {redirect && redirect}
    </div>
  );
}

export default Lobby;
