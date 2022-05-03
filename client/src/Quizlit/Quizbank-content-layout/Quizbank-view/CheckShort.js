import React from 'react'
import {
    Box,
    Typography,
    TextField,
    Input,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import axios from 'axios'
function CheckShort({ stdID, item, setScore, setOverAll, shrtAns }) {
    const { designs } = useStyle()
    const [exist, setExist] = React.useState(null)
    const [data, setData] = React.useState(null)
    const addScore = (cb) => {

        let doNotIncrement
        return (...args) => {
            clearTimeout(doNotIncrement)
            doNotIncrement = setTimeout(() => {
                cb(...args)
            }, 1000)
        }
    }
    const updateScore = addScore(points => {
        let prevAns = shrtAns.current?.[stdID]?.[item._id] || 0
        setScore(prev => prev - parseInt(prevAns))
        if (points === '') {
            shrtAns.current[stdID] = { [item._id]: 0 }
            document.querySelector('#shortAnswerScore').value = 0

        }
        if (parseInt(points) > parseInt(item.points.replace(' points', ''))) {
            setScore(prev => prev + parseInt(item.points.replace(' points', '')))
            document.querySelector('#shortAnswerScore').value = item.points.replace(' points', '')
            shrtAns.current[stdID] = { [item._id]: parseInt(item.points.replace(' points', '')) }
            console.log(parseInt(item.points.replace(' points', '')))
            //shrtAns.current[item._id] = parseInt(item.points.replace(' points', ''))
        }
        if (parseInt(points) <= parseInt(item.points.replace(' points', ''))) {
            setScore(prev => prev + parseInt(points))
            shrtAns.current[stdID] = { [item._id]: parseInt(points) }
            //shrtAns.current[item._id] = points


        }

    })
    
    React.useMemo(() => {
        axios.post('http://localhost:5000/answers', { answeredBy: stdID, questionID: item._id }).then(res => {

            console.log(data)
            if (res.data.length > 0) {
                setExist(true)
                setData(res.data)
                setOverAll(prev => prev + parseInt(item.points.replace(' points', '')))

                document.querySelector('#shortAnswerScore').value = shrtAns.current?.[stdID]?.[item._id] || 0
                updateScore(document.querySelector('#shortAnswerScore').value)
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
            {data && exist ? <>
                <Typography sx={designs.Type_Typography_Style}>
                    Short Answer
                </Typography><Box className="Item-2" sx={designs.Item_Style}>
                    <Box className="Question" sx={designs.Question_Style}>
                        <Typography sx={designs.Item_Typography_Style}>2.</Typography>

                        <Typography sx={designs.Item_Question_Typography_Style}>
                            {item.questionsContent}
                        </Typography>

                        <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

                        <TextField
                            InputProps={{
                                style: {
                                    height: '1.5em',
                                    fontSize: '0.8em',
                                    paddingTop: '0.3em',
                                    fontWeight: '600',
                                    color: '#007FFF',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontSize: '0.8em',
                                    fontWeight: '600',
                                    color: '#007FFF',
                                },
                            }}

                            variant="standard"
                            sx={designs.Points_TextField_Style}
                            id='shortAnswerScore'
                            onInput={(e) => {
                                updateScore(e.target.value)
                            }}

                        />

                        <Typography sx={designs.PointsText_Typography_Style}>
                            /{item.points.replace(' points', '')} points
                        </Typography>
                    </Box>

                    <Box className="Short-answer" sx={designs.Choices_Style}>
                        <Input
                            variant="standard"
                            multiline
                            fullWidth
                            rows={6}
                            value={data ? data[0].answers : ''}
                            disableUnderline
                            readOnly
                            sx={designs.ShortAnswer_Input_Style}
                        />
                    </Box>
                </Box></> : <center><h4>Nothing to display</h4></center>}</div>
    )
}

export default CheckShort