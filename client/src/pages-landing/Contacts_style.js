import {useTheme} from '@mui/material/styles'

function useStyle() {

const theme = useTheme()

const designs = {
    Footer_Style: {
        marginTop: "40px",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    Divider_Style: {
        width: "90%"
    },
    Content_Style: {
        height: "auto",
        width: "100%"
    },
    Content_Sub_Style: {
        margin: "25px 70px", 
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        height: "auto",
        width: "auto"
    },
    Cyklas_Logo_Style: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [theme.breakpoints.between('md', 'lg')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        [theme.breakpoints.between('xs', 'md')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    Cyklas_Logo_Image_Style: {
        width: "max-content",
        height: "100%"
    },
    CompanyAddress_Typography_Style: {
        marginTop: '15px',
        color: '#727184',
        fontSize: '14px',
        textTransform: 'Capitalize',
        width: 'max-content',
        height: 'max-content'
    },
    CompanyEmailAddress_Typography_Style: {
        marginTop: '15px',
        color: '#727184',
        fontSize: '14px',
        textTransform: 'none',
        width: 'max-content',
        height: 'max-content'
    },
    Content_Sub2_Style: {
        height: "relative",
        width: "auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        [theme.breakpoints.between('md', 'lg')]: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    Cyklas_Style: {
        display: "flex",
        flexDirection: "column",
        width: "190px",
        height: "160px",
        padding: "0px 20px"
    },
    Cyklas_Typography_Style: {
        color: '#3F3D56',
        fontSize: '17px',
        textTransform: 'Uppercase',
        fontWeight: '600',
        width: '100%',
        height: 'max-content'
    },
    Home_TextButton_Style: {
        margin: '17px 0px 5px 0px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
        paddingRight: '20px',
    },
    Services_TextButton_Style: {
        marginBottom: '5px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
    },
    About_TextButton_Style: {
        marginBottom: '5px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
        paddingRight: '20px',
    },
    Contacts_TextButton_Style: {
        marginBottom: '5px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
    },
    Services_Style: {
        display: "flex",
        flexDirection: "column",
        width: "190px",
        height: "160px",
        padding: "0px 20px"
    },
    Services_Typography_Style: {
        color: '#3F3D56',
        fontSize: '17px',
        textTransform: 'Uppercase',
        fontWeight: '600',
        width: '100%',
        height: 'max-content',
    },
    Classroom_TextButton_Style: {
        margin: '17px 0px 5px 0px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
        paddingRight: '20px',
    },
    Quizlit_TextButton_Style: {
        marginBottom: '5px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
        paddingRight: '20px',
    },
    Telecon_TextButton_Style: {
        marginBottom: '5px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#93929E',
        textTransform: 'none',
        fontSize: '14px',
        height: '25px',
        paddingLeft: '0px',
        paddingRight: '20px',
    },
    Socials_Style: {
        width: "190px",
        height: "160px",
        padding: "0px 20px"
    },
    FollowUs_Typography_Style: {
        color: '#3F3D56',
        fontSize: '17px',
        textTransform: 'Uppercase',
        fontWeight: '600',
        width: '100%',
        height: 'max-content'
    },
    SocialButtons_Style: {
        marginTop: "13px",
        width: "auto",
        height: "auto",
        display: "flex",
        gap: "18px"
    },
    Facebook_IconButton_Style: {
        height: '30px',
        width: '30px'
    },
    Instagram_IconButton_Style: {
        height: '30px',
        width: '30px'
    },
    Twitter_IconButton_Style: {
        height: '20px',
        width: '20px',
        margin: '5px 0px 0px 5px'
    },
    Youtube_IconButton_Style: {
        height: '20px',
        width: '20px',
        margin: '5px 0px 0px 9px'
    },
    Content2_Style: {
        padding: "15px 0px",
        bottom: "0",
        left: "0",
        right: "0",
        position: "relative",
        width: "100%",
        height: "auto",
        backgroundColor: "#007FFF"
    },
    Content2_Sub_Style: {
        display:"flex",
        gap: "10px",
        flexWrap:"wrap",
        margin: "0px 70px",
        height: "auto",
        width: "auto"
    },
    TC_PP_Style: {
        display:"flex",
        flexGrow: 1,
        height:"auto",
        width:"auto"
    },
    TermsCondition_TextButton_Style: {
        marginRight: '20px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#E1E1E1',
        textTransform: 'Uppercase',
        fontSize: '13px',
        fontWeight: '500',
        height: '25px'
    },
    PrivacyPolicy_TextButton_Style: {
        marginLeft: '20px',
        borderRadius: '0em',
        width: 'max-content',
        height: 'max-content',
        color: '#E1E1E1',
        textTransform: 'Uppercase',
        fontSize: '13px',
        fontWeight: '500',
        height: '25px'
    },
    All_Rights_Reserved_Style: {
        width: "auto",
        height: "auto"
    },
    All_Rights_Reserved_Sub_Style: {
        width: "auto",
        height: "auto",
        display: "flex",
        gap: "8px"
    },
    All_Rights_Reserved_Typography_Style: {
        color: 'white',
        fontSize: '12px',
        textTransform: 'none',
        fontWeight: '500',
        width: 'max-content',
        height: 'max-content',
    },
    Cycrowd_Typography_Style: {
        color: 'white',
        fontSize: '12px',
        textTransform: 'none',
        fontWeight: '500',
        width: 'relative',
        height: 'max-content',
        textAlign: 'Right',
        [theme.breakpoints.down('md')]: {
            textAlign: 'Left',
        }
      }
};



return {designs};
}

export default useStyle;