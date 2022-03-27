import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
  Answer_A_Style: {
    padding: '0.5em 1.4em',
    borderRadius: '0.3em',
    backgroundColor: '#8647ED',
    width: 'relative',
    height: 'relative',
    display: 'flex'
  },
  Answer_B_Style: {
    padding: '0.5em 1.4em',
    borderRadius: '0.3em',
    backgroundColor: '#F34F4F',
    width: 'relative',
    height: 'relative',
    display: 'flex',
    opacity: 0.4
  },
  Answer_C_Style: {
    padding: '0.5em 1.4em',
    borderRadius: '0.3em',
    backgroundColor: '#64C94B',
    width: 'relative',
    height: 'relative',
    display: 'flex',
    opacity: 0.4
  },
  Answer_C_Typography2_Style: {
    padding: '0.4em 0em 0em 0em',
    color: 'white',
    fontSize: '0.8em',
    fontWeight: '600',
    width: '100%',
    height: 'relative',
  },
  Answer_D_Style: {
    padding: '0.5em 1.4em',
    borderRadius: '0.3em',
    backgroundColor: '#EAA845',
    width: 'relative',
    height: 'relative',
    display: 'flex',
    opacity: 0.4
  },
  Answer_D_Typography2_Style: {
    padding: '0.4em 0em 0em 0em',
    color: 'white',
    fontSize: '0.8em',
    fontWeight: '600',
    width: '100%',
    height: 'relative',
  },
  Quiz_Item_Style2: {
    height: '2em',
    width: '2em',
    margin: '0em 1em 0em 0em',
    backgroundColor: 'White',
    borderRadius: '3em',
    [theme.breakpoints.down('sm')]: {
      margin: '0em 1em 0em 0em',
    },
  },
  Answer_A_Typography_Style: {
    fontSize: '0.9em',
    color: '#975DF5',
    fontWeight: '600',
    margin: '0.3em 0.3em 0.3em 0.6em',
  },
  Answer_A_Typography2_Style: {
    padding: '0.4em 0em 0em 0em',
    color: 'white',
    fontSize: '0.8em',
    fontWeight: '600',
    width: '100%',
    height: 'relative',
  },
  Answer_B_Typography2_Style: {
    padding: '0.4em 0em 0em 0em',
    color: 'white',
    fontSize: '0.8em',
    fontWeight: '600',
    width: '100%',
    height: 'relative',
  },
  Answer_B_Typography_Style: {
    fontSize: '0.9em',
    color: '#F55D5D',
    fontWeight: '600',
    margin: '0.4em 0.3em 0.3em 0.7em',
  },
  Answer_C_Typography_Style: {
    fontSize: '0.9em',
    color: '#6CCF53',
    fontWeight: '600',
    margin: '0.4em 0.3em 0.3em 0.7em',
  },
  Answer_D_Typography_Style: {
    fontSize: '0.9em',
    color: '#F1B04E',
    fontWeight: '600',
    margin: '0.4em 0.3em 0.3em 0.7em',
  }
};



return {designs};
}

export default useStyle;  
