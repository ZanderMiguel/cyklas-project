import React from 'react';
import avt from '../../assets/Images/avatar_male.png'
import unmute from '../../assets/Images/unmute18.png'
import mute from '../../assets/Images/mute18.png'
import { useParams } from 'react-router-dom'
import Peer from 'peerjs'

function MemTile({ socket }) {

    const vidContainer = React.useRef(null)

    /*     const [size,setSize] = React.useState(1)
        const [rows,setRows] = React.useState(1)
        const [columns,setColumns] = React.useState(1) */
    const myVidRatio = document.createElement('div')
    document.documentElement.style.setProperty('background-color', '#202124');
    const { teleRoom } = useParams()
    const myPeer = new Peer(undefined, {
        host: '/',
        port: '3002'
    })

    const peers = {}
    socket.on('user-disconnected', (userId) => {
        if (peers[userId]) peers[userId].close()
    })
    myPeer.on('open', id => {
        socket.emit('join-room', teleRoom, id)
    })


    const myVideo = document.createElement('video')
    const child = () => {
        vidContainer.current.childNodes.forEach((item) => {
            if (vidContainer.current.childNodes.length === 1) {
                item.style.setProperty('height', `100%`)
                item.style.setProperty('width', `100%`)

            }
            else {
                item.style.setProperty('width', `45%`)
                item.style.setProperty('height', `56.25%`)
            }
        })
    }


    //Getting your video and audio stream
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        addVideoStream(myVideo, stream, myVidRatio)
        myPeer.on('call', call => {
            call.answer(stream)
            const video = document.createElement('video')
            const vidRatio = document.createElement('div')
            console.log('tangina')
            call.on('stream', userVideoStream => {
                console.log(userVideoStream)
                addVideoStream(video, userVideoStream, vidRatio, child)
            })
        })
        socket.on('user-connected', userId => { // When user is connected, 
            connectToNewUser(userId, stream)    // we will automatically call them
            console.log(userId, stream)
            //setSize(newSize=>newSize++)
        })
    })
    //Displaying video stream
    function addVideoStream(video, stream, vidRatio, child) {

        vidRatio.style.setProperty('width', `100%`)
        vidRatio.style.setProperty('height', `100%`)
        vidRatio.style.setProperty('margin', `5px`)


        video.style.setProperty('object-fit', 'cover')
        video.style.setProperty('width', `100%`)
        video.style.setProperty('height', `100%`)
        video.muted = true
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        child && child()
        vidRatio.append(video)
        vidContainer.current.append(vidRatio)

    }
    //Other user's video stream
    function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream) // Calling a user and sending our stream
        const video = document.createElement('video')
        const vidRatio = document.createElement('div')
        console.log("call", call)
        call.on('stream', userVideoStream => {
            //participants(size)
            console.log('taenamo')
            addVideoStream(video, userVideoStream, vidRatio, child)
        })
        call.on('close', () => {
            video.remove()
            vidRatio.remove()
            child()
        })
        peers[userId] = call
    }
    return (<div style={{

        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: '20px',
        height: '100%',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    }}>

        <div style={{


            display: 'flex',
            alignContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',

            borderRadius: '10px',
            height: '100%',
            width: '100%'
        }}
            ref={vidContainer}>
        </div>

    </div >);
}

export default MemTile;