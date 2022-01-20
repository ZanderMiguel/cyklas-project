import React from 'react';

function Main() {
  return (
    <>
      {value === 0 && <Home />}
      {value === 1 && <Service />}
      {value === 2 && <About />}
      {value === 3 && <Contacts />}
    </>
  );
}

export default Main;
