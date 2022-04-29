import React from 'react';
import {
    Box,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import CheckMultiple from './CheckMultiple';
import CheckShort from './CheckShort';
import CheckBoxes from './CheckBoxes';
import CheckTF from './CheckTF';
import axios from 'axios'
function CheckAnswers({ quizID }) {
    const [data, setData] = React.useState(null)
    React.useRef(() => {
        axios.post('http://localhost:5000/question', { quizID })
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(err => console.log(err))
    }, [])
    const { designs } = useStyle()
    return (
        <Box className="Quiz-sheet" sx={designs.Quiz_Sheet_Style} >
            <div>
                <CheckMultiple />
                <CheckShort />
                <CheckBoxes />
                <CheckTF />
            </div>
        </Box >
    )
}

export default CheckAnswers