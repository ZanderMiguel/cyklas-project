import React from 'react';
import info from '../../assets/Images/Meeting Info.png'
import members from '../../assets/Images/members.png'
import messageTel from '../../assets/Images/messageTel.png'
import presentation from '../../assets/Images/presentation.png'
import unmute from '../../assets/Images/unmute.png'
import offCam from '../../assets/Images/offCam.png'
import ss from '../../assets/Images/ss.png'
import breakout from '../../assets/Images/breakout.png'
import quizlit from '../../assets/Images/quizlit.png'
import endCall from '../../assets/Images/endCall.png'
function Actions(props) {
    const actions = [{
        buttons: [<img src={info} alt=""/>,
        <img src={members} alt=""/>,
        <img src={messageTel} alt=""/>,
        <img src={presentation} alt=""/>],
        style: {
            width: '70%',
            backgroundColor: 'transparent',
            borderRadius: '0',
            justifyContent: 'normal',
            padding: '5px',
            marginLeft: '2%'
        }
    },{
        buttons: [<img src={unmute} alt=""/>,
        <img src={offCam} alt=""/>,
        <img src={ss} alt=""/>,
        <img src={breakout} alt=""/>,
        <img src={quizlit} alt=""/>,
        <img src={endCall} alt=""/>],
        style: {
            width: '35%',
            backgroundColor: '#3C4043',
            borderRadius: '20px',
            justifyContent: 'space-evenly',
            padding: '5px 0 5px 0',
           marginLeft: '0'
            
        }
    }]
  return (<div style={{marginTop: '1%',width: '100%',}}><div style={{width: '98%', display: 'flex', backgroundColor: 'transparent'}}>
      {actions.map((item,idx)=>{
          const {buttons,style} = item
          return(
              <div key={idx} style={{width: style.width, 
              backgroundColor: style.backgroundColor,
              
              display: 'flex', 
              justifyContent: style.justifyContent,
              borderRadius: style.borderRadius}}>
                  {buttons.map((item2,idx2)=>{
                      return (<div key={idx2} style={{padding: style.padding, marginLeft: style.marginLeft}}>
                          {item2}
                          </div>)
                  })}
              </div>
          )
      })}

  </div></div>);
}

export default Actions;
