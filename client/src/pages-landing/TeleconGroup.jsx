import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
function TeleconGroup() {
  const { group } = useParams();
  console.log(group);
  return (
    <div>
      <h1>tanga</h1>
    </div>
  );
}

export default TeleconGroup;
