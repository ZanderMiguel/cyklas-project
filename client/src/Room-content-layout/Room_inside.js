import React from 'react';
import { useParams } from 'react-router-dom';

function Room_inside() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <p>Loob ng room - {id}</p>
    </>
  );
}

export default Room_inside;
