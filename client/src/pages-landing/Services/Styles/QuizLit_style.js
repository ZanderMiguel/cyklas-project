import { useTheme } from '@mui/material/styles';

function useStyle() {
  const theme = useTheme();

  const designs = {
    Container_Style: { 
        marginTop: "5em",
        padding: "2.5em 0em",  
        [theme.breakpoints.down('sm')]: {
            marginTop: "0em",
        } 
    },
    Image_GridItem_Style: { 
        height: "relative", 
        padding: "2.5em",
        [theme.breakpoints.down('md')]: {
            display: "none"
        }   
    },
    Image_Responsive_GridItem_Style: { 
        height: "relative", 
        padding: "2em",
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            display: "initial",
            padding: "3em",
        } ,
        [theme.breakpoints.down('sm')]: {
            display: "initial",
            padding: "2em",
        }  
    },
    Content_GridItem_Style: {
        width: "relative",
        height: "relative", 
        padding: "2.5em 0em",
        [theme.breakpoints.down('md')]: {
            padding: "0em 0em 1em 0em",
        }
    },
    // BoxFlexGrow_Responsive_Style: {
    //     [theme.breakpoints.up('md')]: {
    //         display: "none"
    //     },
    //     [theme.breakpoints.between('sm', 'md')]: {
    //         display: "initial"
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         display: "none"
    //     }
    // },
    QuizLit_Heading_Style: {
        width: "relative",
        height: "max-content",
        color: "#3F3D56",
        fontSize: "2.5em",
        fontWeight: "700",
        borderLeft: "8px solid #007FFF",
        paddingLeft: "1em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0em"
        }
    },
    Quizlit_SubHeading_Style: {
        margin: "0.8em 1.5em 0em 2em",
        width: "relative",
        height: "max-content",
        color: "#007FFF",
        fontSize: "1.3em",
        fontWeight: "700",
        textTransform: "uppercase",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "2em 2em 0em 2em",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "2em 0em 0em 1em",
        } 
    },
    Features_GridItem_Style: { 
        margin: "1.5em 2em 0em 2.6em",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "1.5em 2.5em 0em 2.6em",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "1.5em 1em 0em 1.4em",
        }
    }, 
    Feature_Heading_Style: {
        color: '#626170',
        fontSize: '1.1em',
        fontWeight: 'bold',
    },
    Feature_Body_Style: {
        marginTop: "0.5em",
        width: "auto",
        height: "max-content",
        color: "#3F3D56",
        fontSize: "0.9em",
        fontWeight: "400"
    },
    Features_GridItem2_Style: {  
        margin: "0.5em 2em 0em 2.6em",
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "0.5em 2.5em 0em 2.6em",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "1.5em 1em 0em 1.4em",
        }
    }
  };

  return { designs };
}

export default useStyle;
