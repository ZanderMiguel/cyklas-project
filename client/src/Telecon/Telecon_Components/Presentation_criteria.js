import React from 'react'
import { Typography, Box, Divider, TextField, Checkbox } from "@mui/material";
import useStyle from "../Telecon_Components_Styles/Presentation_style";

const dataOrganization = [
    {
        attributeName: "Appropriateness"
    },
    {
        attributeName: "In Sequence"
    },
    {
        attributeName: "Citation"
    },
];

const dataContent = [
    {
        attributeName: "Attention Getting"
    },
    {
        attributeName: "Well-Defined Terms"
    },
    {
        attributeName: "Accurate Information"
    },
    {
        attributeName: "Relevant Of The Used Materials"
    },
    {
        attributeName: "Points Made Are Reflected Well"
    },
    {
        attributeName: "Obvious Conclusion"
    }
];

const dataPresentation = [
    {
        attributeName: "Good Gestures"
    },
    {
        attributeName: "Clear & Audible Voice"
    },
    {
        attributeName: "Controlled Delivery"
    },
    {
        attributeName: "Good Language & Pronounciation Skills"
    },
    {
        attributeName: "Effective of Visual Aids"
    },
    {
        attributeName: "Controlled Presentation Length"
    },
    {
        attributeName: "Well Communicated"
    }
];

function Presentation_criteria() {
    const {designs} = useStyle();

  return (
            // <Box className = "Presentation-criteria" sx = {designs.PresentationCriteria_Box_Style}>
                <>
                <Box className = "Exam-checkbox" sx = {designs.Exam_Checkbox_Style}>
                    <Checkbox sx = {designs.Checkbox_Style}/>
                
                    <Typography
                    sx = {designs.Exam_Typography_Style}>
                    Exam
                    </Typography>
                </Box>

                <Typography
                sx = {designs.Note_Typography_Style}>
                If this is checked, this presentation will be graded as exam.
                </Typography>

                <Box className = "Organization" sx = {designs.Menu_Style}>
                    <Typography
                    sx = {designs.MenuSub_Typography_Style}>
                    Organization
                    </Typography>

                    <Typography
                    sx = {designs.Points_Typography_Style}>
                    15 pts
                    </Typography>
                </Box>

                <Divider sx = {designs.Divider2_Style}/>
                
                {dataOrganization.map(function(items, index) {
                    return(
                        <Box className = "Attribute" sx = {designs.Attribute_Style}>
                            <Typography
                            sx = {designs.AttributeName_Typography_Style}>
                            {items.attributeName}
                            </Typography>

                            <TextField
                                id="standard-read-only-input"
                                InputProps={{style: {height: "1.2em", fontSize: "0.8em", paddingTop: "0.3em", fontWeight: "500", color: "#3F3D56"}, disableUnderline: true,}}
                                InputLabelProps = {{style: {fontSize: "0.8em", fontWeight: "500",  color: "#3F3D56"}}}
                                variant="standard"
                                sx = {designs.Points_TextField_Style}
                            />
                        </Box>
                    )
                })}

                <Box className = "Content" sx = {designs.Menu_Style}>
                    <Typography
                    sx = {designs.MenuSub_Typography_Style}>
                    Content
                    </Typography>

                    <Typography
                    sx = {designs.Points_Typography_Style}>
                    45 pts
                    </Typography>
                </Box>

                <Divider sx = {designs.Divider2_Style}/>
                
                {dataContent.map(function(items, index) {
                    return(
                        <Box className = "Attribute" sx = {designs.Attribute_Style}>
                            <Typography
                            sx = {designs.AttributeName_Typography_Style}>
                            {items.attributeName}
                            </Typography>

                            <TextField
                                id="standard-read-only-input"
                                InputProps={{style: {height: "1.2em", fontSize: "0.8em", paddingTop: "0.3em", fontWeight: "500", color: "#3F3D56"}, disableUnderline: true,}}
                                InputLabelProps = {{style: {fontSize: "0.8em", fontWeight: "500",  color: "#3F3D56"}}}
                                variant="standard"
                                sx = {designs.Points_TextField_Style}
                            />
                        </Box>
                    )
                })}

                <Box className = "Presentation" sx = {designs.Menu_Style}>
                    <Typography
                    sx = {designs.MenuSub_Typography_Style}>
                    Presentation
                    </Typography>

                    <Typography
                    sx = {designs.Points_Typography_Style}>
                    40 pts
                    </Typography>
                </Box>

                <Divider sx = {designs.Divider2_Style}/>
                
                {dataPresentation.map(function(items, index) {
                    return(
                        <Box className = "Attribute" sx = {designs.Attribute_Style}>
                            <Typography
                            sx = {designs.AttributeName_Typography_Style}>
                            {items.attributeName}
                            </Typography>

                            <TextField
                                id="standard-read-only-input"
                                InputProps={{style: { textAlign: "center", height: "1.2em", fontSize: "0.8em", paddingTop: "0.3em", fontWeight: "500", color: "#3F3D56"}, disableUnderline: true,}}
                                InputLabelProps = {{style: {fontSize: "0.8em", fontWeight: "500",  color: "#3F3D56"}}}
                                variant="standard"
                                sx = {designs.Points_TextField_Style}
                            />
                        </Box>
                    )
                })}
            {/* // </Box> */}
            </>
  )
}

export default Presentation_criteria