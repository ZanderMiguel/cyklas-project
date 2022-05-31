import React,{useState} from 'react'
import {
    IconButton,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import { Delete } from '@mui/icons-material';
function QuestionConfig({selectAnswerType, setAnswerType,questionMemo,counter}) {
    const { designs } = useStyle();
    const dataAnswerType = [
        {
            value: 'Multiple Choice',
            label: 'Multiple Choice',
        },
        {
            value: 'Image Multiple Choice',
            label: 'Image Multiple Choice',
        },
        {
            value: 'True or False',
            label: 'True or False',
        },
        // {
        //     value: 'Short Answer',
        //     label: 'Short Answer',
        // },
    ];

    const dataTimeLimit = [
        {
            value: '5 seconds',
            label: '5 seconds',
        },
        {
            value: '10 seconds',
            label: '10 seconds',
        },
        {
            value: '15 seconds',
            label: '15 seconds',
        },
        {
            value: '20 seconds',
            label: '20 seconds',
        },
        {
            value: '25 seconds',
            label: '25 seconds',
        },
        {
            value: '30 seconds',
            label: '30 seconds',
        },
        {
            value: '40 seconds',
            label: '40 seconds',
        },
        {
            value: '1 minute',
            label: '1 minute',
        },
        {
            value: '2 minutes',
            label: '2 minutes',
        },
    ];

    const dataPoints = [
        {
            value: '0 point',
            label: '0 point',
        },
        {
            value: '1 point',
            label: '1 point',
        },
        {
            value: '2 points',
            label: '2 points',
        },
        {
            value: '3 points',
            label: '3 points',
        },
        {
            value: '4 points',
            label: '4 points',
        },
        {
            value: '5 points',
            label: '5 points',
        },
        {
            value: '6 points',
            label: '6 points',
        },
        {
            value: '7 points',
            label: '7 points',
        },
        {
            value: '8 points',
            label: '8 points',
        },
        {
            value: '9 points',
            label: '9 points',
        },
    ];

    const [selectTimeLimit, setTimeLimit] = useState('10 seconds');
    const [selectPoints, setPoints] = useState('1 point');
    const handleChange1 = (event) => {
        setAnswerType(event.target.value);
        questionMemo.current[counter - 1][event.target.name] = event.target.value
    };
    const handleChange2 = (event) => {
        setTimeLimit(event.target.value);
        questionMemo.current[counter - 1][event.target.name] = event.target.value
    };
    const handleChange3 = (event) => {
        setPoints(event.target.value);
        questionMemo.current[counter - 1][event.target.name] = event.target.value
    };

    return (
        <Box
            className="Other-buttons"
            sx={designs.Other_Buttons_Style}
        >
            <Box
                className="Delete-question"
                sx={designs.Delete_Question_Style}
            >
                <IconButton
                    aria-label="delete"
                    sx={designs.Delete_IconButton_Style}
                >
                    <Delete sx={designs.DeleteIcon_Style} />
                </IconButton>
            </Box>

            <FormControl
                variant="standard"
                sx={designs.FormControl_Style}
            >
                <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={designs.InputLabel_Style}
                >
                    Answer Type
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectAnswerType}
                    onChange={handleChange1}
                    label="SelectAnswerType"
                    disableUnderline
                    sx={designs.Select_Style}
                    name="answerType"
                >
                    {dataAnswerType.map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                            {' '}
                            {label}{' '}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl
                variant="standard"
                sx={designs.FormControl_Style}
            >
                <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={designs.InputLabel_Style}
                >
                    Time Limit
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectTimeLimit}
                    onChange={handleChange2}
                    label="SelectTimeLimit"
                    disableUnderline
                    sx={designs.Select_Style}
                    name="timeLimit"
                >
                    {dataTimeLimit.map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                            {' '}
                            {label}{' '}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl
                variant="standard"
                sx={designs.FormControl_Style}
            >
                <InputLabel
                    id="demo-simple-select-standard-label"
                    sx={designs.InputLabel_Style}
                >
                    Points
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectPoints}
                    onChange={handleChange3}
                    label="SelectPoints"
                    disableUnderline
                    sx={designs.Select_Style}
                    name="points"
                >
                    {dataPoints.map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                            {' '}
                            {label}{' '}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default QuestionConfig