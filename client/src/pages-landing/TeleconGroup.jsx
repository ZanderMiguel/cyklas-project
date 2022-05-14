import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
function TeleconGroup() {
  const { group } = useParams();
  const win = window.open(`/telecon/${group}`, '_self');

  return (
    <>
      <Redirect to={`/telecon/${group}`} />
    </>
  );
}

export default TeleconGroup;
