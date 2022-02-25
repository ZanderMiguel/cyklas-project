import React from 'react';

function ChangeState() {
  const [colors, setColor] = React.useState({
    profileColors: '#3F3D56',
    prfBg: '#EBEBEB',
    accountColor: '#3F3D56',
    accBg: 'white',
  });

  const Styles = {
    // Box
    box: {
      display: 'flex',
      width: '100%',
      marginTop: '50px',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    },

    // TeleconFront
    maincont: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: ' center',
      gap: '20px',
      height: '100vh',
    },
    telconleft: {
      width: '100%',
      justifyContent: 'center',
    },
    telconright: {
      width: '100%',
    },
    // div header
    txt1: {
      fontWeight: '900',
      color: '#007FFF',
      justifyContent: 'center',
    },

    // div txt
    txt2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '10px',
    },
    // div select
    slct: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: ' center',
    },
    // make conference btn
    mkbtn: {
      padding: '10px 20px 10px 20px',
      fontWeight: 'bold',
      border: '2px solid #007FFF',
      borderRadius: 30,
      fontSize: '10px',
      color: '#007FFF',
      '&:hover': {
        background: 'inherit',
      },
    },

    //div header
    sty1: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '40px',
    },

    //div stack
    sty: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '70%',
      flexDirection: 'column',
      margin: 'auto',
      gap: '10px',
      marginTop: '10px',
    },

    // LEFT Paper
    paper: {
      width: '17%',
      height: '500px',
      paddingTop: '15px',
      borderRadius: '10px',
      border: '2px solid #DBDBDB ',
      minWidth: ' 160px',
      marginTop: '50px',
    },
    // MID Paper
    paper1: {
      dislay: ' flex',
      width: '50%',
      marginTop: '30px',
      padding: '15px 0px 15px 0px',
      minWidth: '170px',
      borderRadius: '10px',
    },
    // RIGHT Paper
    paper2: {
      width: '22%',
      height: '350px',
      gap: '10px',
      marginTop: ' 30px',
      border: '2px solid #DBDBDB ',
    },

    img: {
      height: '150px',
      width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'center',
    },
    // Btn styles Change profile
    profile: {
      padding: '10px 10px 10px 10px',
      fontWeight: 'bold',
      borderRadius: 10,
      fontSize: '10px',
      background: '#007FFF',
      color: 'white',
      '&:hover': {
        background: '#007FFF',
      },
    },
    // save btn
    save: {
      fontWeight: 'bold',
      fontSize: '14px',
      borderRadius: '10px',
      padding: '5px 20px 5px 20px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#49B854',
      color: 'white',
      '&:hover': {
        backgroundColor: '#49B854',
      },
    },
    // save btn style
    btnsave: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    //Custom Btn Styles
    btnprofile: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: '30px',
      backgroundColor: colors.prfBg,
      border: '1px 0px 1px 0px solid #DBDBDB',
      borderRadius: '0px',
      color: colors.profileColors,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: ' #DBDBDB',
      },
    },
    btnacc: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: '30px',
      backgroundColor: colors.accBg,
      border: '1px 0px 1px 0px solid #DBDBDB',
      borderRadius: '0px',
      color: colors.accountColor,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: ' #DBDBDB',
      },
    },
    // Typo
    typo: {
      fontWeight: 'bold',
      fontColor: '#3F3D56',
      fontSize: '0.8em',
    },

    //Textfield
    field: {
      backgroundColor: '#F4F4F4',
      borderRadius: '10px',
    },

    // MS Account Styles
    mspaper: {
      display: 'flex',
      width: '23%',
      minWidth: '160px',
    },

    // Text
    txt: {
      fontWeight: 'bold',
      fontColor: '#3F3D56',
    },
    body2: {
      fontColor: '#716F87',
    },
  };

  return {
    colors,
    Styles,
    setColor,
  };
}

export default ChangeState;
