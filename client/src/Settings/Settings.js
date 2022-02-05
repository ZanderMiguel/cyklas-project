import React from 'react'
import { MenuList, MenuItem, ListItemIcon, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CsPaper} from './CustomButton'
import ChangeState from './AllStyles'
import MSAccount from './MSAccount'
import MainSettings from './MainSettings'

// The Profile and Account btn in the Settings
function Settings({setValue}) {

    const { Styles, setColor } = ChangeState()

    return (
        <CsPaper variant='none' style={Styles.paper}>
            <MenuList>

                <MenuItem style={Styles.btnprofile}
                    onClick={() => {
                        setColor({
                            profileColors: '#3F3D56',
                            prfBg: '#EBEBEB',
                            accountColor: '#3F3D56',
                            accBg: 'white',
                        })
                        setValue(<MainSettings/>)

                    }}
                >
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon fontSize='small' />
                    </ListItemIcon>

                    <Typography style={Styles.typo}> Profile</Typography>
                </MenuItem>



                <MenuItem style={Styles.btnacc}
                    onClick={() => {
                        setColor({
                            profileColors: '#3F3D56',
                            prfBg: 'white',
                            accountColor: '#3F3D56',
                            accBg: '#EBEBEB',
                        })
                        setValue(<MSAccount/>)

                    }}
                >
                    <ListItemIcon>
                        <LockOutlinedIcon fontSize='small' />
                    </ListItemIcon>
                    <Typography style={Styles.typo}> Account</Typography>
                </MenuItem>

            </MenuList>
        </CsPaper>

    )
}


export default Settings