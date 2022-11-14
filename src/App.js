
import { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Result from './components/Result';
const PEAKSOFT = [
  {
    title: "React - это ...?",
    variants: ["библиотика", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ...?",
    variants: [
      "приложение",
      "часть приложение или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "JS7 менторлору кидер?",
    variants: ["Билбейм", "Нурс, Бекболсун", "Мавлюда, Жасмина"],
    correct: 1,
  },
  {
    title: "JS7нин инструктору ким?",
    variants: ["Бекболсун", "Нурс", "Жасмина"],
    correct: 2,
  },
];

function App() {
  const [step,setStep]=useState(0)
  const [correct, setCorrect]=useState(0)
  const question = PEAKSOFT[step]

  console.log(question);
  const onClickVariant = (index)=>{
    console.log(step, index);
    setStep(step + 1)
    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {step !== PEAKSOFT.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} PEAKSOFT={PEAKSOFT}  />):( <Result correct={correct} PEAKSOFT={PEAKSOFT}/> )}
      
     
    </div>
  );
}

export default App;
