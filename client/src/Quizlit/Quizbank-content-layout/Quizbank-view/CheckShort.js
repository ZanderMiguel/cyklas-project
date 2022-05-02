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
function CheckShort({ stdID, item, setScore, setOverAll }) {
    const { designs } = useStyle()
    const [exist, setExist] = React.useState(null)
    const [data, setData] = React.useState(null)

    React.useMemo(() => {
        axios.post('http://localhost:5000/answers', { answeredBy: stdID, questionID: item._id }).then(res => {

            if (res.data.length > 0) {
                setExist(true)
                setData(res.data)
                setOverAll(prev => prev + parseInt(item.points.replace(' points', '')))

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

            <Typography sx={designs.Type_Typography_Style}>
                Short Answer
            </Typography><Box className="Item-2" sx={designs.Item_Style}>
                <Box className="Question" sx={designs.Question_Style}>
                    <Typography sx={designs.Item_Typography_Style}>2.</Typography>

                    <Typography sx={designs.Item_Question_Typography_Style}>
                        What is your wish for Christmas?
                    </Typography>

                    <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

                    <TextField
                        id="standard-read-only-input"
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
                        onChange={(e) => {
                            try {
                                if (parseInt(e.target.value) > parseInt(item.points.replace(' points', ''))) {
                                    setScore(prev => prev+ parseInt(item.points.replace(' points', '')))
                                }
                                if (parseInt(e.target.value) <= parseInt(item.points.replace(' points', ''))) {
                                    setScore(prev => prev+ e.target.value)
                                }
                                
                            } catch (err) {
                                e.target.value = ''
                            }
                        }}
                    />

                    <Typography sx={designs.PointsText_Typography_Style}>
                        points
                    </Typography>
                </Box>

                <Box className="Short-answer" sx={designs.Choices_Style}>
                    <Input
                        variant="standard"
                        multiline
                        fullWidth
                        rows={6}
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
                        disableUnderline
                        readOnly
                        sx={designs.ShortAnswer_Input_Style}
                    />
                </Box>
            </Box></div>
    )
}

export default CheckShort