import React from 'react'
import {
    Box,
    Typography,
    Checkbox,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBoxes() {
    const {designs} = useStyle()
    return (
        <div>
            <Typography sx={designs.Type_Typography_Style}>
                Checkboxes
            </Typography>
            <Box className="Item-3" sx={designs.Item_Style}>
                <Box className="Question" sx={designs.Question_Style}>
                    <Typography sx={designs.Item_Typography_Style}>3.</Typography>

                    <Typography sx={designs.Item_Question_Typography_Style}>
                        Which of these animals are reptiles?
                    </Typography>

                    <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

                    <Typography sx={designs.Points_Typography_Style}>
                        2
                    </Typography>

                    <Typography sx={designs.PointsText_Typography_Style}>
                        points
                    </Typography>
                </Box>

                <Box className="Choices" sx={designs.Choices_Style}>
                    <Box className="Choice-1" sx={designs.Choice1_Style}>
                        <Checkbox
                            {...label}
                            disabled
                            checked
                            sx={designs.Checkbox_Style}
                        />

                        <Typography sx={designs.Choice_Typography_Style}>
                            Snake
                        </Typography>
                    </Box>

                    <Box className="Choice-2" sx={designs.Choice2_Style}>
                        <Checkbox {...label} disabled sx={designs.Checkbox_Style} />

                        <Typography sx={designs.Choice_Typography_Style}>
                            Monkey
                        </Typography>
                    </Box>

                    <Box className="Choice-3" sx={designs.Choice3_Style}>
                        <Checkbox
                            {...label}
                            disabled
                            checked
                            sx={designs.Checkbox_Style}
                        />

                        <Typography sx={designs.Choice_Typography_Style}>
                            Turtle
                        </Typography>
                    </Box>

                    <Box className="Choice-4" sx={designs.Choice4_Style}>
                        <Checkbox
                            {...label}
                            disabled
                            checked
                            sx={designs.Checkbox_Style}
                        />

                        <Typography sx={designs.Choice_Typography_Style}>
                            Lizard
                        </Typography>
                    </Box>
                </Box>

                <Typography sx={designs.CorrectAnswer_Typography_Style}>
                    Correct Answer: Option1, Option3, Option4
                </Typography>
            </Box></div>
    )
}

export default CheckBoxes