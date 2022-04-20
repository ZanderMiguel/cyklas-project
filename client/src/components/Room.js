import React from 'react'
import Prof from '../Rooms/Room-content-layout/Room_inside'
import Student from '../Rooms/Room-content-layout/Room_layout_student'
function Room({...attib}) {
  return (
    <div>
        {JSON.parse(localStorage.userData).data.user.userType === "Professor"? <Prof {...attib}/>: <Student {...attib}/>}

    </div>
  )
}

export default Room