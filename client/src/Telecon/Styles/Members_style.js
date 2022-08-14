function useStyle() {
  const designs = {
    Left_Container_Style: {
      width: '100%',
      height: '86vh',
      backgroundColor: '#FCFCFC',
      border: '1px solid #DBDBDB',
    },
    Members_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.9em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      textAlign: 'center',
      width: '100%',
      height: 'max-content',
      padding: '0.7em 0em',
    },
    Divider_Style: {
      width: 'relative',
      margin: '0em 1.3em 0.7em 1.3em',
    },
    Search_TextField_Style: {
      width: 'relative',
      height: 'auto',
      backgroundColor: '#F9F9F9',
      margin: '0em 1.3em 2em 1.3em',
    },
    InCall_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      textAlign: 'left',
      margin: '0em 1.6em 0.5em 1.6em',
      width: 'relative',
      height: 'max-content',
    },
    Members_List_Styles: {
      width: 'relative',
      height: 'auto',
    },
    Member_Style: {
      display: 'flex',
      gap: '0.5em',
      height: 'auto',
      width: 'relative',
      padding: '0em 1.3em',
    },
    AvatarIcon_Avatar_Style: {
      height: '2.2em',
      width: '2.2em',
    },
    Name_Style: {
      height: 'auto',
      marginTop: '0.3em',
      display: 'flex',
      flexDirection: 'column',
    },
    Name_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.7em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      textAlign: 'left',
      width: '10.5em',
      height: 'max-content',
    },
    Role_Typography_Style: {
      color: '#8E8E8E',
      fontSize: '0.7em',
      fontWeight: '500',
      textTransform: 'Uppercase',
      textAlign: 'left',
      width: '10.5em',
      height: 'max-content',
    },
    Mic_IconButton_Style: {
      height: '1.2em',
      width: '1.2em',
      marginTop: '0.3em',
      backgroundColor: 'transparent',
      '&: hover': {
        backgroundColor: 'transparent',
      },
    },
    MicIcon_Style: {
      color: '#007FFF',
      fontSize: '0.9em',
    },
    PushPin_IconButton_Style: {
      height: '1.2em',
      width: '1.2em',
      marginTop: '0.3em',
      backgroundColor: 'transparent',
      '&: hover': {
        backgroundColor: 'transparent',
      },
    },
    PushPinIcon_Style: {
      color: '#007FFF',
      fontSize: '0.9em',
    },
    Name_Typography_Style2: {
      color: '#3F3D56',
      fontSize: '0.7em',
      fontWeight: '600',
      textTransform: 'Capitalize',
      textAlign: 'left',
      width: '10.5em',
      height: 'max-content',
      marginTop: '0.6em',
    },
    MicOff_IconButton_Style: {
      height: '1.2em',
      width: '1.2em',
      marginTop: '0.3em',
      backgroundColor: 'transparent',
      '&: hover': {
        backgroundColor: 'transparent',
      },
    },
    MicOffIcon_Style: {
      color: '#8E8E8E',
      fontSize: '0.9em',
    },
  };

  return { designs };
}
export default useStyle;
