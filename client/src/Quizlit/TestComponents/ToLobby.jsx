import React from 'react'
import {Redirect,useParams} from 'react-router-dom'
function ToLobby({socket}) {
    const {lobby,name} = useParams()
    socket.emit('join-quizLobby',lobby,name)
  return (
    <div><Redirect to="/quizlit/lobby"/></div>
  )
}

export default ToLobby