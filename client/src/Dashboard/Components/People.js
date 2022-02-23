import React from 'react';
import { Typography, Avatar, Divider } from '@mui/material';
import Blue from '../../assets/Images/avatar_male.png';
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import Box from '@mui/material/Box'
import { ConstructionOutlined } from '@mui/icons-material';
import Layout from './Layout'
import DeleteIcon from '@mui/icons-material/Delete';


function People() {


    const [data, setData] = React.useState(null)
    React.useEffect(function () {
        axios.get("http://192.168.1.5:5000/register").then(function (response) {
            console.log(response.data)
            setData(response.data)

        }).catch(function (error) {
            console.log(error)
        })
    }, [])

    const members = [{
        text: "Professor",
        button: <Button variant="contained" startIcon={<LogoutIcon />} color="error" sx={{borderRadius: '5px'}}>
            Leave Room
        </Button>


    },
    {
        text: "Student",
        button: <Button variant="contained" startIcon={<DeleteIcon />} color="error" sx={{borderRadius: '5px'}}>
            Remove all student
        </Button>
    },
    {
        text: "Group",
        button: <Button variant="contained" startIcon={<DeleteForeverIcon />} color="error" sx={{borderRadius: '5px'}}>
            Remove all student
        </Button>
    }]
    const memberCount = React.useRef()
    React.useMemo(()=>{
        memberCount.current = {
            std: 0,
            prf: 0,
            grp: 0
        }
        data && data.forEach((el)=>{
        
        if(el.userType === "Professor"){
            memberCount.current = {
                std: memberCount.current.std,
                prf: memberCount.current.prf + 1,
                grp: memberCount.current.grp
            }
        }
        else {
            if(el.userType === "Student"){
                memberCount.current = {
                    std: memberCount.current.std+ 1,
                    prf: memberCount.current.prf ,
                    grp: memberCount.current.grp
                }
            }else{
                memberCount.current = {
                    std: memberCount.current.std,
                    prf: memberCount.current.prf ,
                    grp: memberCount.current.grp+ 1
                }
            }
        }
    })},[data])

    console.log(memberCount)
    return <div style={{ display: "grid" }}>

        <div style={{ margin: "auto 8.5%  auto auto", }}>
            <Button variant="contained" startIcon={<AddCircleIcon />} color="primary" >
                Add Member
            </Button>

        </div>
        
        {members.map(function (item, index) {   
            const { text, button } = item
            return (
                <div key={index}>
                <div style={{textAlign: 'right', marginRight: '9%'}}>{index === 0 ? <h3>{memberCount.current.prf} Professor(s)</h3>: index === 1 ? <h3>{memberCount.current.std} Student(s)</h3>: <h3>{memberCount.current.grp} Group(s)</h3>}</div>
                    
                <div 
                style={{ border: "2px solid green", width: "80%", backgroundColor: "#D4D4D4", paddingLeft: "2%", paddingRight: "2%", margin: "30px auto 0 auto", padding: "1em", }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", }}><Typography sx={{ fontWeight: 'bold' }}>{text + "s"}</Typography>
                        {button}</div>

                    <Divider style={{ marginTop: "10px" }} />
                    {data && data.map(function (element1, index2) {
                        
                        return text === element1.userType && <div key={index2}><Layout element1={element1} index={index} /></div>

                    })}
                    </div>
                </div>
            )
        })}











    </div>;
}

export default People;
