import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
function CheckMultiple() {
    const { designs } = useStyle()
    return (
        <div>
            <Typography sx={designs.Type_Typography_Style}>
                Multiple Choice
            </Typography>

            <Box className="Item-1" sx={designs.Item_Style}>
                <Box className="Question" sx={designs.Question_Style}>
                    <Typography sx={designs.Item_Typography_Style}>1.</Typography>

                    <Typography sx={designs.Item_Question_Typography_Style}>
                        1 + 1 is equal to?
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
                    <Box className="Choice-a" sx={designs.ChoiceA_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            A.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            6
                        </Typography>
                    </Box>

                    <Box className="Choice-b" sx={designs.ChoiceB_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            B.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            1
                        </Typography>
                    </Box>

                    <Box className="Choice-c" sx={designs.ChoiceC_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            C.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            2
                        </Typography>
                    </Box>

                    <Box className="Choice-d" sx={designs.ChoiceD_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            D.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            3
                        </Typography>
                    </Box>
                </Box>

                <Typography sx={designs.CorrectAnswer_Typography_Style}>
                    Correct Answer: C
                </Typography>
            </Box></div>
    )
}

export default CheckMultiple