import React from 'react'
import { Avatar, Typography, Box, Button, IconButton, Checkbox, Tooltip } from "@mui/material";
import { MicOff, PushPin } from "@mui/icons-material";
import AvatarIcon from "../../assets/ImageJaven/Avatar.png";
import useStyle from "../Telecon_Components_Styles/Presentation_style";

const dataMembers = [
    {
        memberName: "Paul Rudd"
    },
    {
        memberName: "Tom Holland"
    },
    {
        memberName: "Tom Hiddleston"
    },
    {
        memberName: "Robert Downey Jr."
    },
    {
        memberName: "Sebastian Stan"
    }
];

function Presentation_members() {
    
    const {designs} = useStyle();
    
  return (
        <>
        {dataMembers.map(function(items, index) {
            return (
                <>
                <Box key = {index} className = "Student" sx = {designs.Student_Style}>
                <Checkbox sx = {designs.Student_CheckBox_Style}/>

                <Avatar alt="Remy Sharp" src={AvatarIcon} 
                    sx = {designs.AvatarIcon_Avatar_Style}/>

                <Typography noWrap
                    sx = {designs.StudentName_Typography_Style}>
                    {items.memberName}
                </Typography>
                        
                <IconButton id = "profile-micoff" aria-label="profile-micoff" sx = {designs.MicOff_IconButton_Style}>
                    <MicOff
                    sx = {designs.MicOffIcon_Style}/>
                </IconButton>

                <Tooltip title="Pin this member to the mainscreen" placement="right">
                <IconButton id = "profile-pushpin" aria-label="profile-pushpin" sx = {designs.PushPin_IconButton_Style}>
                    <PushPin
                    sx = {designs.PushPinIcon_Style}/>
                </IconButton>
                </Tooltip>
                </Box>
                </>
            )
        })}
         <Box className = "Apply-score-button" sx = {designs.Apply_Score_Button_Style}>
        <Button variant="contained"
            sx = {designs.ApplyScore_Button_Style}>
            Apply Score
        </Button>
        <Typography
        sx = {designs.Note_Typography2_Style}>
        The points from the criteria will be graded to the selected students.
        </Typography>
        </Box>
        </>
        
            
  )
}

export default Presentation_members