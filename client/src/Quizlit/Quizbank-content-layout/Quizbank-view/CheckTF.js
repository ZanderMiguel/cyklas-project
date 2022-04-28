import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
function CheckTF() {
    const {designs} = useStyle()
    return (
        <div><Typography sx={designs.Type_Typography_Style}>
            True or False
        </Typography>

            <Box className="Item-4" sx={designs.Item_Style}>
                <Box className="Question" sx={designs.Question_Style}>
                    <Typography sx={designs.Item_Typography_Style}>4.</Typography>

                    <Typography sx={designs.Item_Question_Typography_Style}>
                        Pizza is better with Pineapple.
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
                    <Box className="Choice-a" sx={designs.ChoiceTrue_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            A.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            True
                        </Typography>
                    </Box>

                    <Box className="Choice-b" sx={designs.ChoiceFalse_Style}>
                        <Typography sx={designs.Choice_Typography_Style}>
                            B.
                        </Typography>

                        <Typography sx={designs.Choice_Typography_Style}>
                            False
                        </Typography>
                    </Box>
                </Box>

                <Typography sx={designs.CorrectAnswer_Typography_Style}>
                    Correct Answer: True
                </Typography>
            </Box></div>
    )
}

export default CheckTF