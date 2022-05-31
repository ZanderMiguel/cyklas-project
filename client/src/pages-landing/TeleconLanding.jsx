import React from 'react';
import useGet from '../customHooks/useGet';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
function TeleconLanding() {
  const { data } = useGet('http://localhost:5000/telecon/create');
  axios
    .post('http://localhost:5000/announce/create', {
      author: {
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        userID: JSON.parse(localStorage.userData).data.user._id,
        avatar: JSON.parse(localStorage.userData).data.imageUrl,
      },
      content: data && { telecon: data.ROOM_ID },
      rooms: localStorage.roomID,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  return <div>{data && <Redirect to={`/telecon/${data.ROOM_ID}`} />}</div>;
}

export default TeleconLanding;
