import React, { useState } from 'react'

function Ans(props) {

  return (
    <div className='check_ans'>
        <p className='score'>{props.play ? "" : `Your scored ${props.count}/5 correct answers`}</p>
        <button className='ans_button' onClick={props.toggleAns}>{props.play ? "Check answers" : "Play again"}</button>
    </div>
  )
}

export default Ans