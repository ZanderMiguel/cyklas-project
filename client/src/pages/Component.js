import React from 'react'
import {Box, Button, TextField, styled} from '@mui/material'

function Buttons({hover,...attrib}) {
    const Btn = styled(Button)({
        '&:hover': hover
    })

    return (
        <Btn {...attrib}>
            
        </Btn>
    )
}

function Boxs({children,...attrib}) {
    return (
        <Box {...attrib}>
            {children}
        </Box>
    )
}

function TextFields({...attrib}) {
    return <TextField {...attrib}/> 
}

export {Buttons,Boxs,TextFields}
