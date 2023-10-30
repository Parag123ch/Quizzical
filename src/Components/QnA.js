import React from 'react'
import { useState } from 'react'

function QnA(props) {

  return (
    <div>
        <h3>{props.ques}</h3>
        <div className='buttons'>
            <button disabled={!props.play ? true : false} style={{backgroundColor: props.play ? (props.on.on1 ? "#d6dbf5" : "#f5f7fb") : (props.on.on1 ? (props.opt1 === props.ans ? "#94d7a2" : "#f7d9db") : (props.opt1 === props.ans) ? "#94d7a2" : "#f5f7fb"), color: (!props.play && props.ans !== props.opt1) ? "#8f94af" : "#293264", borderColor: (!props.play && props.ans !== props.opt1) ? "#8f94af" : "#293264", border: (props.play) ? (props.on.on1 ? "1.5px solid #d6dbf5" : "1.5px solid #293264") : (props.on.on1 ? (props.ans === props.opt1 ? "1.5px solid #94d7a2" : "1.5px solid #f7d9db") : (props.ans === props.opt1 ? "1.5px solid #94d7a2" : "1.5px solid #293264"))}} className='button' onClick={() => props.toggle(props.id, 1)}>{props.opt1}</button>
            <button disabled={!props.play ? true : false} style={{backgroundColor: props.play ? (props.on.on2 ? "#d6dbf5" : "#f5f7fb") : (props.on.on2 ? (props.opt2 === props.ans ? "#94d7a2" : "#f7d9db") : (props.opt2 === props.ans) ? "#94d7a2" : "#f5f7fb"), color: (!props.play && props.ans !== props.opt2) ? "#8f94af" : "#293264", borderColor: (!props.play && props.ans !== props.opt2) ? "#8f94af" : "#293264", border: (props.play) ? (props.on.on2 ? "1.5px solid #d6dbf5" : "1.5px solid #293264") : (props.on.on2 ? (props.ans === props.opt2 ? "1.5px solid #94d7a2" : "1.5px solid #f7d9db") : (props.ans === props.opt2 ? "1.5px solid #94d7a2" : "1.5px solid #293264"))}} className='button' onClick={() => props.toggle(props.id, 2)}>{props.opt2}</button>
            <button disabled={!props.play ? true : false} style={{backgroundColor: props.play ? (props.on.on3 ? "#d6dbf5" : "#f5f7fb") : (props.on.on3 ? (props.opt3 === props.ans ? "#94d7a2" : "#f7d9db") : (props.opt3 === props.ans) ? "#94d7a2" : "#f5f7fb"), color: (!props.play && props.ans !== props.opt3) ? "#8f94af" : "#293264", borderColor: (!props.play && props.ans !== props.opt3) ? "#8f94af" : "#293264", border: (props.play) ? (props.on.on3 ? "1.5px solid #d6dbf5" : "1.5px solid #293264") : (props.on.on3 ? (props.ans === props.opt3 ? "1.5px solid #94d7a2" : "1.5px solid #f7d9db") : (props.ans === props.opt3 ? "1.5px solid #94d7a2" : "1.5px solid #293264"))}} className='button' onClick={() => props.toggle(props.id, 3)}>{props.opt3}</button>
            <button disabled={!props.play ? true : false} style={{backgroundColor: props.play ? (props.on.on4 ? "#d6dbf5" : "#f5f7fb") : (props.on.on4 ? (props.opt4 === props.ans ? "#94d7a2" : "#f7d9db") : (props.opt4 === props.ans) ? "#94d7a2" : "#f5f7fb"), color: (!props.play && props.ans !== props.opt4) ? "#8f94af" : "#293264", borderColor: (!props.play && props.ans !== props.opt4) ? "#8f94af" : "#293264", border: (props.play) ? (props.on.on4 ? "1.5px solid #d6dbf5" : "1.5px solid #293264") : (props.on.on4 ? (props.ans === props.opt4 ? "1.5px solid #94d7a2" : "1.5px solid #f7d9db") : (props.ans === props.opt4 ? "1.5px solid #94d7a2" : "1.5px solid #293264"))}} className='button' onClick={() => props.toggle(props.id, 4)}>{props.opt4}</button>
        </div>
        <hr className='line'></hr>
    </div>
  )
}

export default QnA