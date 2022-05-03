import React from 'react'
import {
    Box,
    Typography,
    Checkbox,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBoxes({ stdID, item, index, setScore, setOverAll }) {
    const { designs } = useStyle()
    const [exist, setExist] = React.useState(null)
    const [data, setData] = React.useState(null)
    const [checkState1, setCheckState1] = React.useState(false)
    const [checkState2, setCheckState2] = React.useState(false)
    const [checkState3, setCheckState3] = React.useState(false)
    const [checkState4, setCheckState4] = React.useState(false)
    React.useMemo(() => {
        axios.post('http://localhost:5000/answers', { answeredBy: stdID, questionID: item._id }).then(res => {

            if (res.data.length > 0) {
                setExist(true)
                setData(res.data)
                setOverAll(prev => prev + parseInt(item.points.replace(' points', '')))

                let rightAns = item.correctAnswer.split(',')
                let stdAns = res.data?.[0].answers.split(',')
                if (rightAns.every(item => {
                    return stdAns.includes(item)
                })) {
                    setScore(prev => prev + parseInt(item.points.replace(' points', '')))
                }
                stdAns.includes('answer1')?setCheckState1(true):setCheckState1(false)
                stdAns.includes('answer2')?setCheckState2(true):setCheckState2(false)
                stdAns.includes('answer3')?setCheckState3(true):setCheckState3(false)
                stdAns.includes('answer4')?setCheckState4(true):setCheckState4(false)

            }
            if (res.data.length < 1) {
                setExist(false)
                setData(null)
            }

        })
            .catch(err => console.log(err))
    }, [stdID])
    return (
        <div>
            {data && exist ? <> <Typography sx={designs.Type_Typography_Style}>
                Checkboxes
            </Typography>
                <Box className="Item-3" sx={designs.Item_Style}>
                    <Box className="Question" sx={designs.Question_Style}>
                        <Typography sx={designs.Item_Typography_Style}>3.</Typography>

                        <Typography sx={designs.Item_Question_Typography_Style}>
                            {item.questionsContent}
                        </Typography>

                        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

                        <Typography sx={designs.Points_Typography_Style}>
                            {item.points.replace(' point', '')}
                        </Typography>

                        <Typography sx={designs.PointsText_Typography_Style}>
                            points
                        </Typography>
                    </Box>

                    <Box className="Choices" sx={designs.Choices_Style}>
                        <Box className="Choice-1" sx={designs.Choice1_Style}>
                            <form>
                                <Checkbox
                                    {...label}
                                    disabled
                                    checked={checkState1}
                                    sx={designs.Checkbox_Style}
                                />
                            </form>
                            <Typography sx={designs.Choice_Typography_Style}>
                                {item.qAnswers.answer1}
                            </Typography>
                        </Box>

                        <Box className="Choice-2" sx={designs.Choice2_Style}>
                            <form>
                                <Checkbox
                                    {...label}
                                    disabled
                                    checked={checkState2}
                                    sx={designs.Checkbox_Style}
                                />
                            </form>

                            <Typography sx={designs.Choice_Typography_Style}>
                                {item.qAnswers.answer2}
                            </Typography>
                        </Box>

                        <Box className="Choice-3" sx={designs.Choice3_Style}>
                            <form>
                                <Checkbox
                                    {...label}
                                    disabled
                                    checked={checkState3}
                                    sx={designs.Checkbox_Style}
                                />
                            </form>

                            <Typography sx={designs.Choice_Typography_Style}>
                                {item.qAnswers.answer3}
                            </Typography>
                        </Box>

                        <Box className="Choice-4" sx={designs.Choice4_Style}>
                            <form>
                                <Checkbox
                                    {...label}
                                    disabled
                                    checked={checkState4}
                                    sx={designs.Checkbox_Style}
                                />
                            </form>
                            <Typography sx={designs.Choice_Typography_Style}>
                                {item.qAnswers.answer4}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography sx={designs.CorrectAnswer_Typography_Style}>
                        Correct Answer: {item.correctAnswer}
                    </Typography>
                </Box></> : <center><h4>Nothing to display</h4></center>}</div>
    )
}

export default CheckBoxes