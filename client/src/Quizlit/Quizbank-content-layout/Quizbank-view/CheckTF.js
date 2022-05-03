import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios'
function CheckTF({ stdID, item, index, setScore, setOverAll }) {
    const { designs } = useStyle()
    const [exist, setExist] = React.useState(null)
    const [data, setData] = React.useState(null)
    React.useMemo(() => {
        axios.post('http://localhost:5000/answers', { answeredBy: stdID, questionID: item._id }).then(res => {

            if (res.data.length > 0) {
                setExist(true)
                setData(res.data)
                setOverAll(prev => prev + parseInt(item.points.replace(' points', '')))

                if (item.correctAnswer === res.data?.[0].answers) {
                    setScore(prev => prev + parseInt(item.points.replace(' points', '')))
                }
            }
            if (res.data.length < 1) {
                setExist(false)
                setData(null)
            }

        })
            .catch(err => console.log(err))
    }, [stdID])
    return (
        <div>{data && exist ?<><Typography sx={designs.Type_Typography_Style}>
            True or False
        </Typography>

            <Box className="Item-4" sx={designs.Item_Style}>
                <Box className="Question" sx={designs.Question_Style}>
                    <Typography sx={designs.Item_Typography_Style}>4.</Typography>

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
                    <Box className="Choice-a" sx={data[0]?.answers === "answer1" ?designs.ChoiceTrue_Style:designs.ChoiceFalse_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            A.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            True
                        </Typography>
                    </Box>

                    <Box className="Choice-b" sx={data[0]?.answers === "answer2" ?designs.ChoiceTrue_Style:designs.ChoiceFalse_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            B.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            False
                        </Typography>
                    </Box>
                </Box>

                <Typography sx={designs.CorrectAnswer_Typography_Style}>
                    Correct Answer: {item.correctAnswer === "answer1"?'True':'False'}
                </Typography>
            </Box></> : <center><h4>Nothing to display</h4></center>}</div>
    )
}

export default CheckTF