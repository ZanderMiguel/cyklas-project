import { createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from './components/Drawer';
import Navbar_Inside from './components/Navbar_Inside';
import Dialogform from './components/Dialogform';
import Register from './Form_content/Register';
import Createroom from './Form_content/Create_room';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    color: '#3F3D56',
  },
  pallete: {
    primary: {
      main: '#3F3D56',
    },
  },
  mixins: {
    toolbar: {
      minHeight: '56px',
      '@media (min-width: 0px) and (orientation:landscape)': {
        minHeight: '50px',
      },
      '@media (min-width: 600px)': {
        minHeight: '64px',
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Createroom />
      </ThemeProvider>
    </>
  );
}

export default App;
