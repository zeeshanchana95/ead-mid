import React from 'react'
import {props} from 'react'
import { ThanksYouMessage } from './ThanksYouMessage'

export const AnotherUserParticipation = () => {
    const answers = [
        { option: "JavaScript", votes: props.vote1 },
        { option: "Python", votes: props.vote2 },
        { option: "Java", votes: props.vote3 },
        { option: "C#", votes: props.vote4 }
    ]
    
    const addVotes = (e) => {
        if(e.value === "JavaScript" ){
            answers[0].votes = props.setOption1Votes((vote => vote +1 ))
        }
        else if(e.value === "Python" ){
            answers[0].votes = props.setOption2Votes((vote => vote +1 ))
        }
        else if(e.value === "Java" ){
            answers[0].votes = props.setOption3Votes((vote => vote +1 ))
        }
        else if(e.value === "C#" ){
            answers[0].votes = props.setOption4Votes((vote => vote +1 ))
        }
    }

    const submitVotes = () => {
        return (
            <>
                <ThanksYouMessage />
               
            </>
        )
    }
    return (
   <>
    <h1>Give Votes</h1>
    <input type="radio" value="JavaScript" name="option" onChange={addVotes}/> {answers[0].option}
    <input type="radio" value="Python" name="option" onChange={addVotes}/> {answers[1].option}
    <input type="radio" value="Java" name="option" onChange={addVotes}/> {answers[2].option}
    <input type="radio" value="C#" name="option" onChange={addVotes}/> {answers[3].option}
    <button onClick={submitVotes}>Submit</button>
   </>
  )
}

