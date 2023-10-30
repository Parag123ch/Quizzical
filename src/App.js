import './App.css';
import QnA from './Components/QnA';
import Ques from './Components/Questions';
import Ans from './Components/Ans';
import { useState } from 'react';

function App() {
  const [Que, setQue] = useState(Ques)
  const [play, setPlay] = useState(true)

  function toggle(id, button_id){
    setQue(prevQue => {
      const newQue = []
      for(let i = 0; i < prevQue.length; i++){
        const currentQue = prevQue[i]
        if(currentQue.id === id){
          const updateQue = {
            ...currentQue,
            on: {
              on1: (button_id === 1) ? !currentQue.on.on1 : currentQue.on.on1,
              on2: (button_id === 2) ? !currentQue.on.on2 : currentQue.on.on2,
              on3: (button_id === 3) ? !currentQue.on.on3 : currentQue.on.on3,
              on4: (button_id === 4) ? !currentQue.on.on4 : currentQue.on.on4,
            }
          }
          newQue.push(updateQue)
        }
        else{
          newQue.push(currentQue)
        }
      }
      return newQue
    })
}

  const [count, setCount] = useState(0)
  function toggleAns(){
    for(let i = 0; i < Que.length; i++){
      if(Que[i].on.on1 && Que[i].opt1 === Que[i].ans){
        setCount(prevCount => prevCount+1)
      }
      else if(Que[i].on.on2 && Que[i].opt2 === Que[i].ans){
        setCount(prevCount => prevCount+1)
      }
      else if(Que[i].on.on3 && Que[i].opt3 === Que[i].ans){
        setCount(prevCount => prevCount+1)
      }
      else if(Que[i].on.on4 && Que[i].opt4 === Que[i].ans){
        setCount(prevCount => prevCount+1)
      }
    setPlay(prevPlay => !prevPlay)
    setQue(prevQue => {
      if(!play){
        const newQue = []
        for(let i = 0; i < prevQue.length; i++){
          const currentQue = prevQue[i]
          const updateQue = {
            ...currentQue,
            on: {
              on1: false,
              on2: false,
              on3: false,
              on4: false
            }
          }
          newQue.push(updateQue)
        }
        setCount(0)
          return newQue
      }
      else{
        return prevQue
      }
      }
    )
  }
}

  const questions = Que.map(question => (
    <QnA id={question.id} ques={question.ques} opt1={question.opt1} opt2={question.opt2} opt3={question.opt3} opt4={question.opt4} ans={question.ans} on={question.on} toggle={toggle} play={play}></QnA>
  ))

  return (
    <div className="App">
      {questions}
      <Ans count={count} play={play} toggleAns={toggleAns}></Ans>
    </div>
  );
}

export default App;
