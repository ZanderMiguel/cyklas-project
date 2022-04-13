import React from 'react';
import {Typography, Radio, RadioGroup, FormControl, Avatar, Button, Box } from "@mui/material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";

function Evaluation() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [selectedValue2, setSelectedValue2] = React.useState('a');

  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  const [selectedValue3, setSelectedValue3] = React.useState('a');

  const handleChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  const [selectedValue4, setSelectedValue4] = React.useState('a');

  const handleChange4 = (event) => {
    setSelectedValue4(event.target.value);
  };

  const [selectedValue5, setSelectedValue5] = React.useState('a');

  const handleChange5 = (event) => {
    setSelectedValue5(event.target.value);
  };

  const [selectedValue6, setSelectedValue6] = React.useState('a');

  const handleChange6 = (event) => {
    setSelectedValue6(event.target.value);
  };

  const [selectedValue7, setSelectedValue7] = React.useState('a');

  const handleChange7 = (event) => {
    setSelectedValue7(event.target.value);
  };

  const [selectedValue8, setSelectedValue8] = React.useState('a');

  const handleChange8 = (event) => {
    setSelectedValue8(event.target.value);
  };

  const [selectedValue9, setSelectedValue9] = React.useState('a');

  const handleChange9 = (event) => {
    setSelectedValue9(event.target.value);
  };

  const [selectedValue10, setSelectedValue10] = React.useState('a');

  const handleChange10 = (event) => {
    setSelectedValue10(event.target.value);
  };

  const [selectedValue11, setSelectedValue11] = React.useState('a');

  const handleChange11 = (event) => {
    setSelectedValue11(event.target.value);
  };

  const [selectedValue12, setSelectedValue12] = React.useState('a');

  const handleChange12 = (event) => {
    setSelectedValue12(event.target.value);
  };

  const [selectedValue13, setSelectedValue13] = React.useState('a');

  const handleChange13 = (event) => {
    setSelectedValue13(event.target.value);
  };

  const [selectedValue14, setSelectedValue14] = React.useState('a');

  const handleChange14 = (event) => {
    setSelectedValue14(event.target.value);
  };

  const [selectedValue15, setSelectedValue15] = React.useState('a');

  const handleChange15 = (event) => {
    setSelectedValue15(event.target.value);
  };

  const [selectedValue16, setSelectedValue16] = React.useState('a');

  const handleChange16 = (event) => {
    setSelectedValue16(event.target.value);
  };

  const [selectedValue17, setSelectedValue17] = React.useState('a');

  const handleChange17 = (event) => {
    setSelectedValue17(event.target.value);
  };

  const [selectedValue18, setSelectedValue18] = React.useState('a');

  const handleChange18 = (event) => {
    setSelectedValue18(event.target.value);
  };

  const [selectedValue19, setSelectedValue19] = React.useState('a');

  const handleChange19 = (event) => {
    setSelectedValue19(event.target.value);
  };

  const [selectedValue20, setSelectedValue20] = React.useState('a');

  const handleChange20 = (event) => {
    setSelectedValue20(event.target.value);
  };

  const [selectedValue21, setSelectedValue21] = React.useState('a');

  const handleChange21 = (event) => {
    setSelectedValue21(event.target.value);
  };

  const [selectedValue22, setSelectedValue22] = React.useState('a');

  const handleChange22 = (event) => {
    setSelectedValue22(event.target.value);
  };

  const [selectedValue23, setSelectedValue23] = React.useState('a');

  const handleChange23 = (event) => {
    setSelectedValue23(event.target.value);
  };

  const [selectedValue24, setSelectedValue24] = React.useState('a');

  const handleChange24 = (event) => {
    setSelectedValue24(event.target.value);
  };
  return (
        <Box className = "Container" width = "100%" height = "auto" display = "flex" flexDirection = "column" justifyContent = "center" alignItems = "center" gap = "20px">
            <Typography
            sx = {{
                color: "#3F3D56",
                width: "90%",
                fontSize: "27px",
                fontWeight: "600",
                height: "max-content",
                textAlign: "center",
                margin: "50px 0px 15px 0px"
            }}>
            How would you evaluate this Professor?
            </Typography>

            <Box className = "Room-rating-keys" width = "90%" height = "auto" display = "flex" gap = "20px">
                <Box className = "Room" padding = "15px 5px" width = "55%" height = "auto" display = "flex" gap = "15px" borderRadius = "1em" boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                    <Box className = "Professor" width = "25%" display = "flex" flexDirection = "column" justifyContent = "center" alignItems = "center">
                        <Avatar alt="Remy Sharp" src={AvatarIcon} 
                            sx = {{
                                height: "100px",
                                width: "100px"
                            }}/>
                        <Typography
                        sx = {{
                            marginTop: "10px",
                            color: "#3F3D56",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "600",
                            textTransform: "Capitalize",
                            height: "max-content",
                            textAlign: "center"
                        }}>
                        Mark Andrei
                        </Typography>
                    </Box>

                    <Box className = "Room-sub"  width = "65%">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            width: "100%",
                            fontSize: "20px",
                            fontWeight: "600",
                            textTransform: "Uppercase",
                            height: "max-content",
                            textAlign: "left"
                        }}>
                        Embedded Programming
                        </Typography>

                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "600",
                            textTransform: "Uppercase",
                            height: "max-content",
                            textAlign: "left"
                        }}>
                        bscs 3a
                        </Typography>

                        <Box className = "Class1" marginTop = "15px" width = "100%" height = "auto" display = "flex" gap = "18px">
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "16%",
                                fontSize: "10px",
                                textTransform: "Capitalize",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            monday
                            </Typography>

                            <Box className = "Seperator-v" width = "1px" height = "relative" margin = "5px 0px" backgroundColor = "#C9C9C9"></Box>
                            
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "30%",
                                fontSize: "10px",
                                textTransform: "Uppercase",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            1:30 pm - 4:30 pm
                            </Typography>
                        </Box>

                        <Box className = "Class2" width = "100%" height = "auto" display = "flex" gap = "18px">
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "16%",
                                fontSize: "10px",
                                textTransform: "Capitalize",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            wednesday
                            </Typography>

                            <Box className = "Seperator-v" width = "1px" height = "relative" margin = "5px 0px" backgroundColor = "#C9C9C9"></Box>
                            
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "30%",
                                fontSize: "10px",
                                textTransform: "Uppercase",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            10:00 am - 12:00 pm
                            </Typography>
                        </Box>

                        <Box className = "Class3" width = "100%" height = "auto" display = "flex" gap = "18px">
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "16%",
                                fontSize: "10px",
                                textTransform: "Capitalize",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            saturday
                            </Typography>

                            <Box className = "Seperator-v" width = "1px" height = "relative" margin = "5px 0px" backgroundColor = "#C9C9C9"></Box>
                            
                            <Typography
                            sx = {{
                                color: "#8C8C8C",
                                width: "30%",
                                fontSize: "10px",
                                textTransform: "Uppercase",
                                height: "max-content",
                                textAlign: "left"
                            }}>
                            4:30 pm - 6:00 pm
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className = "Rating-keys" width = "45%" height = "relative">
                    <Typography
                    sx = {{
                        backgroundColor: "#007FFF",
                        padding: "7px 0px",
                        color: "white",
                        width: "100%",
                        fontSize: "17px",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        height: "max-content",
                        textAlign: "center",
                        borderRadius: "0.7em 0.7em 0em 0em"
                    }}>
                    Rating Keys
                    </Typography>

                    <Box className = "Rating-keys-sub" padding = "5px 15px 0px 15px" width = "relative" height = "auto" display = "flex" gap = "15px">
                        <Box className = "Rating-left" width  = "50%" height = "auto">
                            <Box className = "Rating1" display = "flex" gap = "12px" width = "100%" height = "auto">
                                <Typography
                                sx = {{
                                    backgroundColor: "#0069D3",
                                    marginTop: "1px",
                                    padding: "5px",
                                    color: "white",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "17px",
                                    textTransform: "Uppercase",
                                    textAlign: "center",
                                    borderRadius: "1em"
                                }}>
                                1
                                </Typography>

                                <Typography
                                sx = {{
                                    color: "#3F3D56",
                                    margin: "3px 0px",
                                    width: "max-content",
                                    fontSize: "15px",
                                    textTransform: "Capitalize",
                                    height: "relative",
                                    textAlign: "left"
                                }}>
                                = &nbsp; Unsatisfactory
                                </Typography>
                            </Box>

                            <Box className = "Rating2" marginTop = "4px" display = "flex" gap = "12px" width = "100%" height = "auto">
                                <Typography
                                sx = {{
                                    backgroundColor: "#0069D3",
                                    marginTop: "1px",
                                    padding: "5px",
                                    color: "white",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "17px",
                                    textTransform: "Uppercase",
                                    textAlign: "center",
                                    borderRadius: "1em"
                                }}>
                                2
                                </Typography>

                                <Typography
                                sx = {{
                                    color: "#3F3D56",
                                    margin: "3px 0px",
                                    width: "max-content",
                                    fontSize: "15px",
                                    textTransform: "Capitalize",
                                    height: "relative",
                                    textAlign: "left"
                                }}>
                                = &nbsp; Fair
                                </Typography>
                            </Box>

                            <Box className = "Rating3" marginTop = "4px" display = "flex" gap = "12px" width = "100%" height = "auto">
                                <Typography
                                sx = {{
                                    backgroundColor: "#0069D3",
                                    marginTop: "1px",
                                    padding: "5px",
                                    color: "white",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "17px",
                                    textTransform: "Uppercase",
                                    textAlign: "center",
                                    borderRadius: "1em"
                                }}>
                                3
                                </Typography>

                                <Typography
                                sx = {{
                                    color: "#3F3D56",
                                    margin: "3px 0px",
                                    width: "max-content",
                                    fontSize: "15px",
                                    textTransform: "Capitalize",
                                    height: "relative",
                                    textAlign: "left"
                                }}>
                                = &nbsp; Satisfactory
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box className = "Rating-right" width  = "50%" height = "auto">
                            <Box className = "Rating4" display = "flex" gap = "12px" width = "100%" height = "auto">
                                <Typography
                                sx = {{
                                    backgroundColor: "#0069D3",
                                    marginTop: "1px",
                                    padding: "5px",
                                    color: "white",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "17px",
                                    textTransform: "Uppercase",
                                    textAlign: "center",
                                    borderRadius: "1em"
                                }}>
                                4
                                </Typography>

                                <Typography
                                sx = {{
                                    color: "#3F3D56",
                                    margin: "3px 0px",
                                    width: "max-content",
                                    fontSize: "15px",
                                    textTransform: "Capitalize",
                                    height: "relative",
                                    textAlign: "left"
                                }}>
                                = &nbsp; Very Good
                                </Typography>
                            </Box>

                            <Box className = "Rating5" marginTop = "4px" display = "flex" gap = "12px" width = "100%" height = "auto">
                                <Typography
                                sx = {{
                                    backgroundColor: "#0069D3",
                                    marginTop: "1px",
                                    padding: "5px",
                                    color: "white",
                                    width: "20px",
                                    height: "20px",
                                    fontSize: "17px",
                                    textTransform: "Uppercase",
                                    textAlign: "center",
                                    borderRadius: "1em"
                                }}>
                                5
                                </Typography>

                                <Typography
                                sx = {{
                                    color: "#3F3D56",
                                    margin: "3px 0px",
                                    width: "max-content",
                                    fontSize: "15px",
                                    textTransform: "Capitalize",
                                    height: "relative",
                                    textAlign: "left"
                                }}>
                                = &nbsp; Excellent
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className = "Evaluation-content" marginTop = "15px" width = "90%" height = "auto" display = "flex" flexDirection = "column">
                <Box className = "Attributes-rating" width = "100%" height = "auto" padding = "7px 0px" backgroundColor = "#007FFF" display = "flex" gap = "650px" borderRadius = "0.8em 0.8em 0em 0em">
                    <Typography
                    sx = {{
                        marginLeft: "40px",
                        color: "white",
                        fontSize: "17px",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        height: "max-content",
                        width: "max-content",
                        textAlign: "center"
                    }}>
                    Attributes &nbsp; & &nbsp; Performances   
                    </Typography>

                    <Typography
                    sx = {{
                        color: "white",
                        fontSize: "17px",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        height: "max-content",
                        width: "max-content",
                        textAlign: "center"
                    }}>
                   Ratings
                    </Typography>
                </Box>

                <Box className = "Rating" padding = "12px 0px" width = "100%" height = "auto" display = "flex" gap = "20px">
                    <Typography
                        sx = {{
                            marginLeft: "870px",
                            backgroundColor: "#0069D3",
                            padding: "5px",
                            color: "white",
                            width: "25px",
                            height: "25px",
                            fontSize: "18px",
                            textTransform: "Uppercase",
                            textAlign: "center",
                            borderRadius: "1em"
                        }}>
                        1
                    </Typography>

                    <Typography
                        sx = {{
                            backgroundColor: "#0069D3",
                            padding: "5px",
                            color: "white",
                            width: "25px",
                            height: "25px",
                            fontSize: "18px",
                            textTransform: "Uppercase",
                            textAlign: "center",
                            borderRadius: "1em"
                        }}>
                        2
                    </Typography>

                    <Typography
                        sx = {{
                            backgroundColor: "#0069D3",
                            padding: "5px",
                            color: "white",
                            width: "25px",
                            height: "25px",
                            fontSize: "20px",
                            textTransform: "Uppercase",
                            textAlign: "center",
                            borderRadius: "1em"
                        }}>
                        3
                    </Typography>

                    <Typography
                        sx = {{
                            backgroundColor: "#0069D3",
                            padding: "5px",
                            color: "white",
                            width: "25px",
                            height: "25px",
                            fontSize: "18px",
                            textTransform: "Uppercase",
                            textAlign: "center",
                            borderRadius: "1em"
                        }}>
                        4
                    </Typography>

                    <Typography
                        sx = {{
                            backgroundColor: "#0069D3",
                            padding: "5px",
                            color: "white",
                            width: "25px",
                            height: "25px",
                            fontSize: "18px",
                            textTransform: "Uppercase",
                            textAlign: "center",
                            borderRadius: "1em"
                        }}>
                        5
                    </Typography>
                </Box>

                <Box className = "Seperator" width = "100%" height = "2px" backgroundColor = "#D4D4D4"></Box>
                
                <Box className = "Attributes-container" paddingBottom = "12px" width = "100%" height = "auto">
                    <Box className = "Attribute1" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Introduction given (of both self and topic)
                        </Typography>
                        <FormControl>
                        <RadioGroup
                        row>
                            <Radio
                            checked={selectedValue === '1'}
                            onChange={handleChange}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                            />
                            <Radio
                                checked={selectedValue === '2'}
                                onChange={handleChange}
                                value="2"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '2' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue === '3'}
                                onChange={handleChange}
                                value="3"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '3' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue === '4'}
                                onChange={handleChange}
                                value="4"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '4' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue === '5'}
                                onChange={handleChange}
                                value="5"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '5' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                        </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box className = "Attribute2" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Dress, neatness and appearance
                        </Typography>

                        <FormControl>
                        <RadioGroup
                        row>
                            <Radio
                            checked={selectedValue2 === '1'}
                            onChange={handleChange2}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                            />
                            <Radio
                                checked={selectedValue2 === '2'}
                                onChange={handleChange2}
                                value="2"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '2' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue2 === '3'}
                                onChange={handleChange2}
                                value="3"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '3' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue2 === '4'}
                                onChange={handleChange2}
                                value="4"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '4' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                            <Radio
                                checked={selectedValue2 === '5'}
                                onChange={handleChange2}
                                value="5"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': '5' }}
                                sx = {{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 40,
                                    },
                                    color: "#939393",
                                    width: "33px",
                                    height: "33px",
                                    margin: "1px 22px 0px 0px"
                                }}
                            />
                        </RadioGroup>
                        </FormControl>
                    </Box>
                    
                    <Box className = "Attribute3" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Writing on the board, figures/ diagrams (visual aids)
                        </Typography>

                        <Radio
                            checked={selectedValue3 === '1'}
                            onChange={handleChange3}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue3 === '2'}
                            onChange={handleChange3}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue3 === '3'}
                            onChange={handleChange3}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue3 === '4'}
                            onChange={handleChange3}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue3 === '5'}
                            onChange={handleChange3}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute4" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Usage of classroom language
                        </Typography>

                        <Radio
                            checked={selectedValue4 === '1'}
                            onChange={handleChange4}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue4 === '2'}
                            onChange={handleChange4}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue4 === '3'}
                            onChange={handleChange4}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue4 === '4'}
                            onChange={handleChange4}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue4 === '5'}
                            onChange={handleChange4}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute5" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Circulated during class to check all the students
                        </Typography>

                        <Radio
                            checked={selectedValue5 === '1'}
                            onChange={handleChange5}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue5 === '2'}
                            onChange={handleChange5}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue5 === '3'}
                            onChange={handleChange5}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue5 === '4'}
                            onChange={handleChange5}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue5 === '5'}
                            onChange={handleChange5}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute6" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Eye contact with the students
                        </Typography>

                        <Radio
                            checked={selectedValue6 === '1'}
                            onChange={handleChange6}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue6 === '2'}
                            onChange={handleChange6}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue6 === '3'}
                            onChange={handleChange6}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue6 === '4'}
                            onChange={handleChange6}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue6 === '5'}
                            onChange={handleChange6}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>
                    
                    <Box className = "Attribute7" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Gesture and Posture
                        </Typography>

                        <Radio
                            checked={selectedValue7 === '1'}
                            onChange={handleChange7}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue7 === '2'}
                            onChange={handleChange7}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue7 === '3'}
                            onChange={handleChange7}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue7 === '4'}
                            onChange={handleChange7}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue7 === '5'}
                            onChange={handleChange7}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute8" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Spoke loudly and clearly
                        </Typography>

                        <Radio
                            checked={selectedValue8 === '1'}
                            onChange={handleChange8}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue8 === '2'}
                            onChange={handleChange8}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue8 === '3'}
                            onChange={handleChange8}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue8 === '4'}
                            onChange={handleChange8}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue8 === '5'}
                            onChange={handleChange8}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute9" marginTop = "12px"width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Communication (language, choice of words, grammar and influency)
                        </Typography>

                        <Radio
                            checked={selectedValue9 === '1'}
                            onChange={handleChange9}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue9 === '2'}
                            onChange={handleChange9}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue9 === '3'}
                            onChange={handleChange9}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue9 === '4'}
                            onChange={handleChange9}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue9 === '5'}
                            onChange={handleChange9}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute10" marginTop = "12px"width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"                        }}>
                    Encouraged students to ask questions
                        </Typography>

                        <Radio
                            checked={selectedValue10 === '1'}
                            onChange={handleChange10}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue10 === '2'}
                            onChange={handleChange10}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue10 === '3'}
                            onChange={handleChange10}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue10 === '4'}
                            onChange={handleChange10}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue10 === '5'}
                            onChange={handleChange10}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute11" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Aroused students' interests and encourages them for participation
                        </Typography>

                        <Radio
                            checked={selectedValue11 === '1'}
                            onChange={handleChange11}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue11 === '2'}
                            onChange={handleChange11}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue11 === '3'}
                            onChange={handleChange11}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue11 === '4'}
                            onChange={handleChange11}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue11 === '5'}
                            onChange={handleChange11}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute12" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Used words and expressions within the student level of understanding
                        </Typography>

                        <Radio
                            checked={selectedValue12 === '1'}
                            onChange={handleChange12}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue12 === '2'}
                            onChange={handleChange12}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue12 === '3'}
                            onChange={handleChange12}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue12 === '4'}
                            onChange={handleChange12}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue12 === '5'}
                            onChange={handleChange12}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute13" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Was there any element of creativity (by way of certain examples)
                        </Typography>

                        <Radio
                            checked={selectedValue13 === '1'}
                            onChange={handleChange13}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue13 === '2'}
                            onChange={handleChange13}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue13 === '3'}
                            onChange={handleChange13}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue13 === '4'}
                            onChange={handleChange13}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue13 === '5'}
                            onChange={handleChange13}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute14" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Subject matter knowledge/ command on subject/ topic
                        </Typography>

                        <Radio
                            checked={selectedValue14 === '1'}
                            onChange={handleChange14}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue14 === '2'}
                            onChange={handleChange14}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue14 === '3'}
                            onChange={handleChange14}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue14 === '4'}
                            onChange={handleChange14}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue14 === '5'}
                            onChange={handleChange14}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute15" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Presented subject matter clearly an systematically
                        </Typography>

                        <Radio
                            checked={selectedValue15 === '1'}
                            onChange={handleChange15}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue15 === '2'}
                            onChange={handleChange15}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue15 === '3'}
                            onChange={handleChange15}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue15 === '4'}
                            onChange={handleChange15}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue15 === '5'}
                            onChange={handleChange15}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute16" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Aptitude (ability, skill and talent) displayed
                        </Typography>

                        <Radio
                            checked={selectedValue16 === '1'}
                            onChange={handleChange16}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue16 === '2'}
                            onChange={handleChange16}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue16 === '3'}
                            onChange={handleChange16}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue16 === '4'}
                            onChange={handleChange16}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue16 === '5'}
                            onChange={handleChange16}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute17" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Methodology, taught for student understanding
                        </Typography>

                        <Radio
                            checked={selectedValue17 === '1'}
                            onChange={handleChange17}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue17 === '2'}
                            onChange={handleChange17}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue17 === '3'}
                            onChange={handleChange17}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue17 === '4'}
                            onChange={handleChange17}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue17 === '5'}
                            onChange={handleChange17}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute18" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Answered questions
                        </Typography>

                        <Radio
                            checked={selectedValue18 === '1'}
                            onChange={handleChange18}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue18 === '2'}
                            onChange={handleChange18}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue18 === '3'}
                            onChange={handleChange18}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue18 === '4'}
                            onChange={handleChange18}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue18 === '5'}
                            onChange={handleChange18}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute19" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Class control
                        </Typography>

                        <Radio
                            checked={selectedValue19 === '1'}
                            onChange={handleChange19}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue19 === '2'}
                            onChange={handleChange19}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue19 === '3'}
                            onChange={handleChange19}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue19 === '4'}
                            onChange={handleChange19}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue19 === '5'}
                            onChange={handleChange19}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute20" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Time management
                        </Typography>

                        <Radio
                            checked={selectedValue20 === '1'}
                            onChange={handleChange20}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue20 === '2'}
                            onChange={handleChange20}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue20 === '3'}
                            onChange={handleChange20}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue20 === '4'}
                            onChange={handleChange20}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue20 === '5'}
                            onChange={handleChange20}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute21" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Was organized one
                        </Typography>

                        <Radio
                            checked={selectedValue21 === '1'}
                            onChange={handleChange21}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue21 === '2'}
                            onChange={handleChange21}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue21 === '3'}
                            onChange={handleChange21}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue21 === '4'}
                            onChange={handleChange21}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue21 === '5'}
                            onChange={handleChange21}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute22" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Conclusion/ summarization made; or lecture abruptly ended
                        </Typography>

                        <Radio
                            checked={selectedValue22 === '1'}
                            onChange={handleChange22}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue22 === '2'}
                            onChange={handleChange22}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue22 === '3'}
                            onChange={handleChange22}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue22 === '4'}
                            onChange={handleChange22}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue22 === '5'}
                            onChange={handleChange22}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute23" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Confidence level exhibited
                        </Typography>

                        <Radio
                            checked={selectedValue23 === '1'}
                            onChange={handleChange23}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue23 === '2'}
                            onChange={handleChange23}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue23 === '3'}
                            onChange={handleChange23}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue23 === '4'}
                            onChange={handleChange23}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue23 === '5'}
                            onChange={handleChange23}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>

                    <Box className = "Attribute24" marginTop = "12px" width = "100%" height = "auto" display = "flex">
                        <Typography
                        sx = {{
                            color: "#3F3D56",
                            fontSize: "15px",
                            textTransform: "none",
                            height: "auto",
                            width: "60%",
                            textAlign: "left",
                            margin: "5px 0px"
                        }}>
                    Showed dynamism and enthusiasm
                        </Typography>

                        <Radio
                            checked={selectedValue24 === '1'}
                            onChange={handleChange24}
                            value="1"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '1'}}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 140px"
                            }}
                        />
                        <Radio
                            checked={selectedValue24 === '2'}
                            onChange={handleChange24}
                            value="2"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '2' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue24 === '3'}
                            onChange={handleChange24}
                            value="3"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '3' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue24 === '4'}
                            onChange={handleChange24}
                            value="4"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '4' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                        <Radio
                            checked={selectedValue24 === '5'}
                            onChange={handleChange24}
                            value="5"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': '5' }}
                            sx = {{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 40,
                                },
                                color: "#939393",
                                width: "33px",
                                height: "33px",
                                margin: "1px 22px 0px 0px"
                            }}
                        />
                    </Box>
                </Box>
                
                <Box className = "Seperator" width = "100%" height = "2px" backgroundColor = "#D4D4D4"></Box>

                <Box className = "Submit-button" margin = "12px 0px 50px 0px" width = "100%" height = "auto" >
                    <Button variant="contained"
                        sx = {{
                            float: "Right",
                            backgroundColor: "#0069D3",
                            textTransform: "Capitalize",
                            fontWeight: "bold",
                            width: "max-content",
                            padding: "10px 60px",
                            borderRadius: "0.4em"
                        }}>
                    Submit
                    </Button>
                </Box>
            </Box>
        </Box>
  )
}

export default Evaluation;
