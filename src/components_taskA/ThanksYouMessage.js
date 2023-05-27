import React from 'react'
import { AnotherUserParticipation } from './AnotherUserParticipation'

export const ThanksYouMessage = () => {

const callAnotherParticipationComp = () => {
    return <AnotherUserParticipation />
}
  return (
    <>
        <div>ThanksYouMessage</div>
        <button onClick={callAnotherParticipationComp}>Want another participation</button>    
    </>
    
  )
}
