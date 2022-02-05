import React from 'react';
import avt from '../../assets/Images/avatar_male.png'
import unmute from '../../assets/Images/unmute18.png'
import mute from '../../assets/Images/mute18.png'
import { useParams } from 'react-router-dom'
import Peer from 'peerjs'

function MemTile({socket}) {
    
    const vidContainer = React.useRef(null)

    
    const { teleRoom } = useParams()
    const myPeer = new Peer(undefined, {
        host: '/',
        port: '3002'
    })

    const peers = {}
    myPeer.on('open', id => {
        socket.emit('join-room', teleRoom, id)
    })


    const myVideo = document.createElement('video')
    myVideo.muted = true
    //Displaying video stream
    const addVideoStream = (video,stream) => {

        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        vidContainer.current.append(video)

    }
    //Other user's video stream
    const connectToNewUser = (userId, stream) => {
        const call = myPeer.call(userId, stream) // Calling a user and sending our stream
        const video = document.createElement('video')
        video.muted = true
        call.on('stream', userVideoStream => {
            addVideoStream(video,userVideoStream)
        })
        call.on('close', () => {
            video.remove()
        })

    }

    //Getting your video and audio stream
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        addVideoStream(myVideo,stream)
        myPeer.on('call', call => {
            call.answer(stream)
            const video = document.createElement('video')
            video.muted = true
            call.on('stream', userVideoStream => {
                addVideoStream(video,userVideoStream)
            })
        })
        socket.on('user-connected', userId => { // When user is connected, 
            connectToNewUser(userId, stream)    // we will automatically call them
        })
    })
    return (<div style={{
        
        margin: '14px 0 0 1%',
        width: '73%',
        height: '86vh',
        display: 'flex',
        padding: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        gridGap: '10px 10px',

    }}>
        {/* {videos.length >= 1 && props.vidPanel.Children.map((item, idx) => {
            const { avatar, mic, text } = item */}
        {/*  return ( */}
        <div style={{
            
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center'
        }}
            ref={vidContainer}>
            {/*  <div >
                        {avatar}
                    </div>
                    <div style={{
                        display: 'flex',
                        height: '18px', 
                        width: '100%',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        marginLeft: '2%',
                        alignSelf: 'flex-end'
                    }}>
                        {mic}<h6 style={{ color: 'white' }}>{text}</h6>
                    </div> */}




        </div>
        {/*  )
        })} */}
    </div>);
}

export default MemTile;
