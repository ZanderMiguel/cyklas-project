import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
  btn: {
    color: (props) => "red",
    backgroundColor: 'black'
  }
})
function Dashboard(props) {
  const classes = useStyles(props)
  return (<div>
    <Button
    
    className={classes.btn}
    >Dashboard</Button>

  </div>)
}

export default Dashboard;
