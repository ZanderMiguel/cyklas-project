import {useTheme} from '@mui/material/styles'

function useStyle() {
const theme = useTheme()

const designs = {
    Container_Style: {
        width: "10rem",
        maxWidth: 400,
        maxHeight: 300
    },
    Nav_Style: { 
        width: '100%' 
    },
    QuizContainer_Style: {
        margin: "0em",
        display: "flex"
    },
    Quiz_Typography_Style: { 
        color: "#3F3D56",
        marginLeft: '1em', 
        fontWeight: 600 
    },
    ExamContainer_Style: {
        margin: "0em",
        display: "flex"
    },
    Exam_Typography_Style: {
        color: "#3F3D56", 
        marginLeft: '1em', 
        fontWeight: 600,
    },
};

return {designs};
}

export default useStyle;  