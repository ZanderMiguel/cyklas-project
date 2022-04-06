import React from 'react'

function Lobby({socket}) {
    const [nameArr,setNameArr] = React.useState(null)
    socket.once('joined-quizLobby',(lobby,names)=>{
        setNameArr(names)
    })
    return (
        <div style={{width:'40%', height: '700px'}}>
            {nameArr && nameArr.map((item,index)=>{
                
                return(
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
            <input type='button' value='start' style={{position: 'absolute', bottom: '0'}}/>
        </div>
    )
}

export default Lobby