import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
import { TimerOutlined } from '@mui/icons-material';
import useStyle from '../Styles/Exam_start_style';
import { Redirect } from 'react-router-dom'
function ExamTimer({ data, socket }) {
    const { designs } = useStyle();
    const seconds = React.useRef(0)
    const minutes = React.useRef(0)
    const hours = React.useRef(0)
    const [tick,setTick] = React.useState(true)
    const [redirect, setRedirecct] = React.useState(null)
    React.useEffect(() => {
        const time = data.timeLimit.replace(' minutes', ':').replace(' hours', ':0:').replace(' hour', ':0:').split(':')
        console.log(time)
        socket.emit('start-exam', JSON.parse(localStorage.userData).data.user._id, time)
        socket.on('timer-start', (examTime) => {
            console.log(examTime)
            if (examTime.length === 2) {
                seconds.current = examTime[1]
                minutes.current = examTime[0]
            }
            if (examTime.length === 3) {
                seconds.current=examTime[2]
                minutes.current = examTime[1]
                hours.current = examTime[0]
            }

        })

    }, [])
    const clock = setTimeout(() => {
        if (seconds.current <= 0 && minutes.current <= 0 && hours.current <= 0) {
            setRedirecct(<Redirect to="/dashboard" />)
        }
        if (seconds.current > 0) { seconds.current-- }
        if (seconds.current <= 0 && minutes.current > 0) {
            minutes.current--
            seconds.current = 59

        } 
        if(minutes.current <= 0 && hours.current > 0){
            hours.current--
            minutes.current = 59
            seconds.current = 59
        }
        if(hours.current <= 0){
            hours.current = 0
        }
        setTick(prev => !prev)
        
    }, 1000)
    return (
        <Box className="Timer-main" sx={designs.TimerMain_Style}>
            <Box className="Timer" sx={designs.Timer_Style}>
                <TimerOutlined sx={designs.TimerOutlinedIcon_Style} />
                <Typography sx={designs.Timer_Typography_Style}>
                    {`${hours.current}:${minutes.current}:${seconds.current}`}
                </Typography>
            </Box>
            {redirect && redirect}
        </Box>
    )
}

export default ExamTimer