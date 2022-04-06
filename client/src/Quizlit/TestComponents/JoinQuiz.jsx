import React from 'react'
import {Redirect} from 'react-router-dom'
function JoinQuiz() {
    const lobby = React.useRef({})
    const [redirect,setRedirect] = React.useState(null)
    return (
        <div><form onSubmit={(e)=>{
            e.preventDefault()
            setRedirect(<Redirect to={`/quizlit/lobby/${lobby.current.room}/${lobby.current.name}`} />)
        }}>
            <label htmlFor='room'>Room ID</label>
            
            <input type="text" id="room" onChange={(e)=>{
                lobby.current['room'] = e.target.value
                console.log(lobby.current['room'])
            }}/>
            <label htmlFor='name'>Username</label>
            <input type="text" id="name"onChange={(e)=>{
                lobby.current['name'] = e.target.value
            }}/>
            <input type="submit" value="JOIN"/>
        </form>
        {redirect && redirect}
        </div>
    )
}

export default JoinQuiz