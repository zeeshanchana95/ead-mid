import React, { useState } from 'react'
import { UserParticipation } from './UserParticipation'
import { Outlet } from 'react-router-dom'

export const PollDisplay = () => {
    const [votesOption1, setOption1Votes] = useState(0)
    const [votesOption2, setOption2Votes] = useState(0)
    const [votesOption3, setOption3Votes] = useState(0)
    const [votesOption4, setOption4Votes] = useState(0)
    const pollQuestion = "What is your favorite programming language?";
    const answers = [
        { option: "JavaScript", votes: votesOption1 },
        { option: "Python", votes: votesOption2 },
        { option: "Java", votes: votesOption3 },
        { option: "C#", votes: votesOption4 }
    ]
    const openParticipation =  () => {
        return <UserParticipation 
            vote1 = {setOption1Votes} setOption1Votes = {setOption1Votes}
            vote2 = {setOption2Votes} setOption2Votes = {setOption2Votes}
            vote3 = {setOption3Votes} setOption3Votes = {setOption3Votes}
            vote4 = {setOption4Votes} setOption4Votes = {setOption4Votes}
        />
    }
  return (
    <div>
        <h2>Poll Question: {pollQuestion}</h2>
        <h2>Answer Choices with Vote counts</h2>
        <ul>
            <li>{answers[0].option}: {votesOption1}</li>
            <li>{answers[1].option}: {votesOption2}</li>
            <li>{answers[2].option}: {votesOption3}</li>
            <li>{answers[3].option}: {votesOption4}</li>
        </ul>
        <button onClick={openParticipation}>Start Voting</button>
        <Outlet />
    </div>
  )
}
