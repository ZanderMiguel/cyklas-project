import React from 'react'
import offCamAvatar from '../../assets/Images/avatar_male.png'
import mute18 from '../../assets/Images/mute18.png'
function OffCamTile() {
  return (
    <div style={{width: '100%',  height: '100%', display: 'grid',border: '1px solid white'}} className="offCam">
        <img src={offCamAvatar} alt="" style={{margin: 'auto auto'}}  />
        <div style={{display: 'flex', alignItems: 'center', margin: 'auto auto 0 0'}}><img src={mute18} alt=""/><p>Javen Habalita</p></div>
        </div>
  )
}

export default OffCamTile