function useStyle() {
  const designs = {
    Left_Container_Style: {
      width: '100%',
      height: '86vh',
      backgroundColor: '#FCFCFC',
      border: '1px solid #DBDBDB',
    },
    ConferenceDetails_Typography_Style: {
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
    Conference_Id_Style: {
      padding: '0em 1.3em',
      display: 'flex',
      gap: '0.8em',
      height: 'auto',
      width: 'relative',
    },
    ConferenceId_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'none',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
    Id_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '500',
      textTransform: 'Uppercase',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
    ConferenceLink_Style: {
      padding: '0.5em 1.3em 2em 1.3em',
    },
    ConferenceLink_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '600',
      textTransform: 'none',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
    Link_Typography_Style: {
      color: '#3F3D56',
      fontSize: '0.8em',
      fontWeight: '500',
      textTransform: 'none',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
    Date_Time_Style: {
      padding: '0em 1.3em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5em',
      height: 'auto',
      width: 'relative',
    },
    Date_Typography_Style: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: '500',
      textTransform: 'Capitalize',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
    DividerV_Style: {
      height: 'relative',
      margin: '0.2em 0em',
    },
    Time_Typography_Style: {
      color: '#3F3D56',
      fontSize: '13px',
      fontWeight: '500',
      textTransform: 'Uppercase',
      textAlign: 'center',
      width: 'max-content',
      height: 'max-content',
    },
  };

  return { designs };
}
export default useStyle;
