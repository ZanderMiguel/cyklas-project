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
function CheckAnswers({ quizID, stdID, setScore, setOverAll,stdScore,shrtAns }) {
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
                return (
                    <div key={index}>
                        {item.answerType === "Multiple Choice" && <CheckMultiple item={item} stdID={stdID} setScore={setScore} setOverAll={setOverAll} stdScore={stdScore} />}
                        {item.answerType === "Short Answer" && <CheckShort shrtAns={shrtAns} item={item} stdID={stdID} setScore={setScore} setOverAll={setOverAll} />}
                        {item.answerType === "Checkboxes" && <CheckBoxes item={item} stdID={stdID} setScore={setScore} setOverAll={setOverAll} />}
                        {item.answerType === "True or False" && <CheckTF item={item} stdID={stdID} setScore={setScore} setOverAll={setOverAll} />}

                    </div>
                )
            })}
        </Box >
    )
}

export default CheckAnswers