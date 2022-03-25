// import React, { useState } from 'react'
// import { Grid, Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
// import { Check } from "@mui/icons-material";
// import useStyle from "./Styles/Quiz_multiplechoice_style";

// function Quiz_multiplechoice() {
//     const [questions, setQuestions] = useState(new Map());
//   const [opendialog, setOpenDialog] = useState(false);
//   const [image, setImage] = useState('');
//   const { designs } = useStyle();

//   const [selectAnswerType, setAnswerType] = useState('Multiple Choice');
//   const [selectTimeLimit, setTimeLimit] = useState('');
//   const [selectPoints, setPoints] = useState('');

//   const handleChange1 = (event) => {
//     setAnswerType(event.target.value);
//   };
//   const handleChange2 = (event) => {
//     setTimeLimit(event.target.value);
//   };
//   const handleChange3 = (event) => {
//     setPoints(event.target.value);
//   };

//   const questionKey = React.useRef();

//   questions.set('kahitano', {
//     question: '',
//     answer1: '',
//     answer2: '',
//     answer3: '',
//     answer4: '',
//   });
//   const handleChange = (index, event) => {
//     const value = [...questions];
//     if (event.target.tag === 'question') {
//       questionKey.current = event.target.name;
//       setQuestions(
//         questions.set([questionKey], {
//           question: event.target.value,
//           ...questions[questionKey.current],
//         })
//       );
//     } else {
//       setQuestions(
//         questions.set([questionKey], {
//           ...questions[questionKey.current],
//           [event.target.name]: [event.target.value],
//         })
//       );
//     }
//     console.log(questions);
//     console.log(event.target.tag);
//   };
//   const handleQuestionAdd = () => {
//     setQuestions([
//       ...questions,
//       {
//         question: '',
//         answer1: '',
//         answer2: '',
//         answer3: '',
//         answer4: '',
//       },
//     ]);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//     <Grid container columnSpacing={2} rowSpacing={1}>
//                               <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   id="filled-basic"
//                                   placeholder="Enter Answer A..."
//                                   variant="filled"
//                                   autoComplete="off"
//                                   name="answer1"
//                                   onChange={(event) =>
//                                     handleChange(index, event)
//                                   }
//                                   sx={designs.Answer_A_TextField_Style}
//                                   inputProps={{
//                                     style: {
//                                       height: '0em',
//                                       fontSize: '0.8em',
//                                       paddingLeft: '0.1em',
//                                       paddingRight: '0em',
//                                       marginBottom: '1em',
//                                       marginRight: '0.5em',
//                                       color: 'white',
//                                     },
//                                   }}
//                                   InputProps={{
//                                     disableUnderline: true,
//                                     startAdornment: (
//                                       <InputAdornment position="start">
//                                         <Box
//                                           className="Quiz-item"
//                                           sx={designs.Quiz_Item_Style2}
//                                         >
//                                           <Typography
//                                             sx={
//                                               designs.Answer_A_Typography_Style
//                                             }
//                                           >
//                                             A.
//                                           </Typography>
//                                         </Box>
//                                       </InputAdornment>
//                                     ),
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton
//                                           aria-label="correct-answer"
//                                           sx={
//                                             designs.Correct_Answer_IconButton_Style
//                                           }
//                                         >
//                                           <Check sx={designs.CheckIcon_Style} />
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                 />
//                               </Grid>

//                               <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   id="filled-basic"
//                                   placeholder="Enter Answer B..."
//                                   variant="filled"
//                                   autoComplete="off"
//                                   name="answer2"
//                                   onChange={(event) =>
//                                     handleChange(index, event)
//                                   }
//                                   sx={designs.Answer_B_TextField_Style}
//                                   inputProps={{
//                                     style: {
//                                       height: '0em',
//                                       fontSize: '0.8em',
//                                       paddingLeft: '0.1em',
//                                       paddingRight: '0em',
//                                       marginBottom: '1em',
//                                       marginRight: '0.5em',
//                                       color: 'white',
//                                     },
//                                   }}
//                                   InputProps={{
//                                     disableUnderline: true,
//                                     startAdornment: (
//                                       <InputAdornment position="start">
//                                         <Box
//                                           className="Quiz-item"
//                                           sx={designs.Quiz_Item_Style2}
//                                         >
//                                           <Typography
//                                             sx={
//                                               designs.Answer_B_Typography_Style
//                                             }
//                                           >
//                                             B.
//                                           </Typography>
//                                         </Box>
//                                       </InputAdornment>
//                                     ),
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton
//                                           aria-label="correct-answer"
//                                           sx={
//                                             designs.Correct_Answer_IconButton_Style
//                                           }
//                                         >
//                                           <Check sx={designs.CheckIcon_Style} />
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                 />
//                               </Grid>
//                             </Grid>

//                             <Grid container columnSpacing={2} rowSpacing={1}>
//                               <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   id="filled-basic"
//                                   placeholder="Enter Answer C..."
//                                   variant="filled"
//                                   autoComplete="off"
//                                   name="answer3"
//                                   onChange={(event) =>
//                                     handleChange(index, event)
//                                   }
//                                   sx={designs.Answer_C_TextField_Style}
//                                   inputProps={{
//                                     style: {
//                                       height: '0em',
//                                       fontSize: '0.8em',
//                                       paddingLeft: '0.1em',
//                                       paddingRight: '0em',
//                                       marginBottom: '1em',
//                                       marginRight: '0.5em',
//                                       color: 'white',
//                                     },
//                                   }}
//                                   InputProps={{
//                                     disableUnderline: true,
//                                     startAdornment: (
//                                       <InputAdornment position="start">
//                                         <Box
//                                           className="Quiz-item"
//                                           sx={designs.Quiz_Item_Style2}
//                                         >
//                                           <Typography
//                                             sx={
//                                               designs.Answer_C_Typography_Style
//                                             }
//                                           >
//                                             C.
//                                           </Typography>
//                                         </Box>
//                                       </InputAdornment>
//                                     ),
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton
//                                           aria-label="correct-answer"
//                                           sx={
//                                             designs.Correct_Answer_IconButton_Style
//                                           }
//                                         >
//                                           <Check sx={designs.CheckIcon_Style} />
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                 />
//                               </Grid>

//                               <Grid item xs={12} sm={6}>
//                                 <TextField
//                                   id="filled-basic"
//                                   placeholder="Enter Answer D..."
//                                   variant="filled"
//                                   autoComplete="off"
//                                   name="answer4"
//                                   onChange={(event) =>
//                                     handleChange(index, event)
//                                   }
//                                   sx={designs.Answer_D_TextField_Style}
//                                   inputProps={{
//                                     style: {
//                                       height: '0em',
//                                       fontSize: '0.8em',
//                                       paddingLeft: '0.1em',
//                                       paddingRight: '0em',
//                                       marginBottom: '1em',
//                                       marginRight: '0.5em',
//                                       color: 'white',
//                                     },
//                                   }}
//                                   InputProps={{
//                                     disableUnderline: true,
//                                     startAdornment: (
//                                       <InputAdornment position="start">
//                                         <Box
//                                           className="Quiz-item"
//                                           sx={designs.Quiz_Item_Style2}
//                                         >
//                                           <Typography
//                                             sx={
//                                               designs.Answer_D_Typography_Style
//                                             }
//                                           >
//                                             D.
//                                           </Typography>
//                                         </Box>
//                                       </InputAdornment>
//                                     ),
//                                     endAdornment: (
//                                       <InputAdornment position="end">
//                                         <IconButton
//                                           aria-label="correct-answer"
//                                           sx={
//                                             designs.Correct_Answer_IconButton_Style
//                                           }
//                                         >
//                                           <Check sx={designs.CheckIcon_Style} />
//                                         </IconButton>
//                                       </InputAdornment>
//                                     ),
//                                   }}
//                                 />
//                               </Grid>
//                             </Grid>
//     </>
//   )
// }

// export default Quiz_multiplechoice