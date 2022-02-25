import React from 'react'
import {Button, styled,Paper, TextField} from '@mui/material'


function CustomButton({ value, design, ...attrib }) {

    const CustomBtn = styled(Button)(design)

    return (
        <div>
            <CustomBtn {...attrib}>
                {value}
            </CustomBtn>
        </div>

    )
}


function TextValue({ txtval, design, ...props}) {
    const TxtBtn = styled(Button)(design)
    return (
        <div>
            <TxtBtn {...props}>
                {txtval}
            </TxtBtn>
        </div>
    )
}

// Paper

function CsPaper ({children, design, ...paper}) {
    const Payper = styled(Paper)(design)
    return (
     
            <Payper {...paper}>
                {children}
            </Payper>
       

    )
}

// TxtFld 
const Txtfld = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
        borderColor: '#007FFF',
    },
    '& fieldset': {
        borderRadius: '10px'
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#DBDBDB',
        },
    }

})


function CsTxtFld ({txval, txtcss, ...csstxt}){
    return (
        <Txtfld {...csstxt}>
            {txval}
        </Txtfld>

    )


}



export { CustomButton, TextValue, CsPaper, CsTxtFld  }
