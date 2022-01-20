import React from 'react';
import avt from '../../assets/Images/avatar_male.png'
import unmute from '../../assets/Images/unmute18.png'
import mute from '../../assets/Images/mute18.png'
function MemTile() {
    const [state, useState] = React.useState(1)
    const tile = [{
        avatar: <img src={avt} alt="" />,
        mic: <image src={unmute} alt="" />,
        text: <h6>javen</h6>
    }, {
        avatar: <img src={avt} alt="" />,
        mic: <image src={mute} alt="" />,
        text: <h6>javen</h6>
    }, {
        avatar: <img src={avt} alt="" />,
        mic: <image src={mute} alt="" />,
        text: <h6>javen</h6>
    }
        , {
        avatar: <img src={avt} alt="" />,
        mic: <image src={mute} alt="" />,
        text: <h6>javen</h6>
    }
        , {
        avatar: <img src={avt} alt="" />,
        mic: <image src={mute} alt="" />,
        text: <h6>javen</h6>
    }]
    let tileRows = "auto "
    /* for (let i = 0; i < Math.sqrt(tile.length) % 1 === 0 ? Math.sqrt(tile.length) : parseInt(Math.sqrt(tile.length) + 1); i++) {
        tileRows += "auto "
    } */
    return (<div style={{
        backgroundColor: '#3C4043',
        width: `${Math.sqrt(tile.length) % 1 === 0 ? 1 / Math.sqrt(tile.length) : 1 / parseInt(Math.sqrt(tile.length) + 1)}`,
        height: `${Math.sqrt(tile.length) % 1 === 0 ? 1 / Math.sqrt(tile.length) : 1 / parseInt(Math.sqrt(tile.length) + 1)}`,
        display: 'grid',
        gridTemplateColumns: `${tileRows}`,
        
    }}>
        {tile.map((item, idx) => {
            const { avatar, mic, text } = item
            return (
                <div key={idx} >
                    {avatar}
                    <div>
                        {mic}{text}
                    </div>
                </div>
            )
        })}
    </div>);
}

export default MemTile;
