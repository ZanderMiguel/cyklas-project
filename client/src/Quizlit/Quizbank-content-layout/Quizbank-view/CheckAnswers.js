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
function CheckAnswers({ quizID, stdID }) {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        axios.post('http://localhost:5000/question', { quizID })
            .then(res => {
                setData(res.data)
                
            }).catch(err => console.log(err))
    }, [])
    const { designs } = useStyle()

    return (
        <Box className="Quiz-sheet" sx={designs.Quiz_Sheet_Style} >
            {data && data.map((item, index) => {
                console.log(item)
                return (
                    <div key={index}>

                        {item.answerType === "Multiple Choice" && <CheckMultiple item={item} stdID={stdID} index={index}/>}
                        {item.answerType === "Short Answer" && <CheckShort />}
                        {item.answerType === "Checkboxes" && <CheckBoxes />}
                        {item.answerType === "True or False" && <CheckTF />}
                    </div>
                )
            })}

        </Box >
    )
}

export default CheckAnswers