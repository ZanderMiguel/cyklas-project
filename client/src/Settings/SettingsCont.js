import React from 'react';
import { Container } from '@mui/material';
import MainSettings from './MainSettings';
import Settings from './Settings';

// Final/Settings
function SettingsCont() {
  const [value, setValue] = React.useState(<MainSettings />);

  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Settings setValue={setValue} />
      {value}
    </Container>
  );
}

export default SettingsCont;
