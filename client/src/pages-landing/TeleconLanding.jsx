import React from 'react';
import useGet from '../customHooks/useGet';
import { Redirect } from 'react-router-dom';
function TeleconLanding() {
  const { data } = useGet(
    'https://murmuring-basin-16459.herokuapp.com/telecon/create'
  );
  return <div>{data && <Redirect to={`/telecon/${data.ROOM_ID}`} />}</div>;
}

export default TeleconLanding;
