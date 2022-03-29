import React, { useState } from 'react'
import {
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Box,
    Button,
    Grid
} from '@mui/material';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import { AddCircle, Check, MoreVert, Delete } from '@mui/icons-material';
import Quiz_imagemultiplechoice from "./AnswerTypes/Quiz_imagemultiplechoice";
import Quiz_trueorfalse from "./AnswerTypes/Quiz_trueorfalse";
import Quiz_shortanswer from "./AnswerTypes/Quiz_shortanswer";
import Image_GIF from './Image_GIF';
import QuestionConfig from './QuestionConfig';
function Questions() {

    const [questions, setQuestions] = useState(new Map());
    const [opendialog, setOpenDialog] = useState(false);
    const [image, setImage] = useState('');
    const { designs } = useStyle();

    const [selectAnswerType, setAnswerType] = useState('Multiple Choice');


    const questionKey = React.useRef();

    const handleChange = (event) => {

    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form  onSubmit={handleSubmit} id="quizform">
            <Grid container rowSpacing={1}>
                <Box
                    className="Quiz-options-responsive"
                    sx={designs.Quiz_Options_Responsive_Style}
                >
                    <IconButton
                        aria-label="options"
                        sx={designs.Quiz_Options_IconButton_Style}
                    >
                        <MoreVert sx={designs.MoreVertIcon_Style} />
                    </IconButton>
                </Box>
                <Grid item xs={12}>
                    <Box
                        className="Quiz-container"
                        sx={designs.Quiz_Container_Style}
                    >
                        <Box
                            className="Quiz-container-sub"
                            sx={designs.Quiz_Container_Sub_Style}
                        >
                            <Box
                                className="Quiz-question"
                                sx={designs.Quiz_Question_Style}
                            >
                                <Box
                                    className="Quiz-question-sub"
                                    sx={designs.Quiz_Question_Sub_Style}
                                >
                                    <TextField
                                        id="filled-basic"
                                        placeholder="Enter quiz question here..."
                                        variant="filled"
                                        autoComplete="off"
                                        sx={designs.Quiz_Question_TextField_Style}
                                        inputProps={{
                                            style: {
                                                height: '0em',
                                                fontSize: '0.8em',
                                                paddingLeft: '0.2em',
                                                paddingRight: '0em',
                                                marginBottom: '1.2em',
                                                marginRight: '3.5em',
                                                color: 'white',
                                            },
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Box
                                                        className="Quiz-item"
                                                        sx={designs.Quiz_Item_Style}
                                                    >
                                                        <Typography
                                                            sx={designs.Quiz_Item_Typography_Style}
                                                        >
                                                            1.
                                                        </Typography>
                                                    </Box>
                                                </InputAdornment>
                                            ),
                                        }}
                                        name={`questions`}
                                        tag="question"
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box
                                    className="Quiz-question-image"
                                    sx={designs.Quiz_Question_Image_Style}
                                >
                                    <Box
                                        className="Quiz-question-image-sub"
                                        sx={designs.Quiz_Question_Image_Sub_Style}
                                    >
                                        {image != '' ? (
                                            <>
                                                <Box
                                                    width="80%"
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                >
                                                    <img
                                                        src={image}
                                                        width="100%"
                                                        height="300px"
                                                        style={{
                                                            padding: '0.7em 0em 0em 1em',
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </Box>
                                                <Button
                                                    variant="contained"
                                                    onClick={() => setImage('')}
                                                >
                                                    remove
                                                </Button>
                                            </>
                                        ) : (
                                            <Box
                                                width="80%"
                                                height="300px"
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Button
                                                    variant="contained"
                                                    startIcon={
                                                        <AddCircle
                                                            style={{
                                                                marginRight: '0.2em',
                                                                fontSize: '2em',
                                                                color: '#716F87',
                                                            }}
                                                        />
                                                    }
                                                    sx={designs.Insert_Image_Button_Style}
                                                    onClick={() => setOpenDialog(true)}
                                                >
                                                    Insert an image or GIF associated to this
                                                    question.
                                                </Button>
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                            {opendialog && (
                                <Image_GIF
                                    open={opendialog}
                                    close={() => setOpenDialog(false)}
                                    maxWidth="lg"
                                    setImage={setImage}
                                />
                            )}
                            <Box
                                className="Quiz-options"
                                sx={designs.Quiz_Options_Style}
                            >
                                <QuestionConfig setAnswerType={setAnswerType} selectAnswerType={selectAnswerType} />
                            </Box>
                        </Box>

                        <Box
                            className="Quiz-answers"
                            sx={designs.Quiz_Answers_Style}
                        >
                            {selectAnswerType === 'Multiple Choice' && (
                                <>
                                    <Grid container columnSpacing={2} rowSpacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="filled-basic"
                                                placeholder="Enter Answer A..."
                                                variant="filled"
                                                autoComplete="off"
                                                name="answer1"
                                                onChange={(event) =>
                                                    handleChange( event)
                                                }
                                                sx={designs.Answer_A_TextField_Style}
                                                inputProps={{
                                                    style: {
                                                        height: '0em',
                                                        fontSize: '0.8em',
                                                        paddingLeft: '0.1em',
                                                        paddingRight: '0em',
                                                        marginBottom: '1em',
                                                        marginRight: '0.5em',
                                                        color: 'white',
                                                    },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Box
                                                                className="Quiz-item"
                                                                sx={designs.Quiz_Item_Style2}
                                                            >
                                                                <Typography
                                                                    sx={
                                                                        designs.Answer_A_Typography_Style
                                                                    }
                                                                >
                                                                    A.
                                                                </Typography>
                                                            </Box>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="correct-answer"
                                                                sx={
                                                                    designs.Correct_Answer_IconButton_Style
                                                                }
                                                            >
                                                                <Check sx={designs.CheckIcon_Style} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="filled-basic"
                                                placeholder="Enter Answer B..."
                                                variant="filled"
                                                autoComplete="off"
                                                name="answer2"
                                                onChange={
                                                    handleChange
                                                }
                                                sx={designs.Answer_B_TextField_Style}
                                                inputProps={{
                                                    style: {
                                                        height: '0em',
                                                        fontSize: '0.8em',
                                                        paddingLeft: '0.1em',
                                                        paddingRight: '0em',
                                                        marginBottom: '1em',
                                                        marginRight: '0.5em',
                                                        color: 'white',
                                                    },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Box
                                                                className="Quiz-item"
                                                                sx={designs.Quiz_Item_Style2}
                                                            >
                                                                <Typography
                                                                    sx={
                                                                        designs.Answer_B_Typography_Style
                                                                    }
                                                                >
                                                                    B.
                                                                </Typography>
                                                            </Box>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="correct-answer"
                                                                sx={
                                                                    designs.Correct_Answer_IconButton_Style
                                                                }
                                                            >
                                                                <Check sx={designs.CheckIcon_Style} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid container columnSpacing={2} rowSpacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="filled-basic"
                                                placeholder="Enter Answer C..."
                                                variant="filled"
                                                autoComplete="off"
                                                name="answer3"
                                                onChange={
                                                    handleChange
                                                }
                                                sx={designs.Answer_C_TextField_Style}
                                                inputProps={{
                                                    style: {
                                                        height: '0em',
                                                        fontSize: '0.8em',
                                                        paddingLeft: '0.1em',
                                                        paddingRight: '0em',
                                                        marginBottom: '1em',
                                                        marginRight: '0.5em',
                                                        color: 'white',
                                                    },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Box
                                                                className="Quiz-item"
                                                                sx={designs.Quiz_Item_Style2}
                                                            >
                                                                <Typography
                                                                    sx={
                                                                        designs.Answer_C_Typography_Style
                                                                    }
                                                                >
                                                                    C.
                                                                </Typography>
                                                            </Box>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="correct-answer"
                                                                sx={
                                                                    designs.Correct_Answer_IconButton_Style
                                                                }
                                                            >
                                                                <Check sx={designs.CheckIcon_Style} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                id="filled-basic"
                                                placeholder="Enter Answer D..."
                                                variant="filled"
                                                autoComplete="off"
                                                name="answer4"
                                                onChange={
                                                    handleChange
                                                }
                                                sx={designs.Answer_D_TextField_Style}
                                                inputProps={{
                                                    style: {
                                                        height: '0em',
                                                        fontSize: '0.8em',
                                                        paddingLeft: '0.1em',
                                                        paddingRight: '0em',
                                                        marginBottom: '1em',
                                                        marginRight: '0.5em',
                                                        color: 'white',
                                                    },
                                                }}
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Box
                                                                className="Quiz-item"
                                                                sx={designs.Quiz_Item_Style2}
                                                            >
                                                                <Typography
                                                                    sx={
                                                                        designs.Answer_D_Typography_Style
                                                                    }
                                                                >
                                                                    D.
                                                                </Typography>
                                                            </Box>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="correct-answer"
                                                                sx={
                                                                    designs.Correct_Answer_IconButton_Style
                                                                }
                                                            >
                                                                <Check sx={designs.CheckIcon_Style} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )}

                            {selectAnswerType === 'Image Multiple Choice' && (
                                <Quiz_imagemultiplechoice />
                            )}
                            {selectAnswerType === 'True or False' && (
                                <Quiz_trueorfalse />
                            )}
                            {selectAnswerType === 'Short Answer' && <Quiz_shortanswer />}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </form>
    )
}

export default Questions