import React from 'react'
import "./Result.css"
const Result = ({correct,PEAKSOFT}) => {
  return (
    <div className='result'>
        <img src="https://img.icons8.com/color/2x/applause.png" alt="" />
        <h2>Вы отгадали {correct} ответа из {PEAKSOFT.length}</h2>
        <a href="http://localhost:3001/">
        <button>Попробовать снова</button>
        </a>
    </div>
  )
}

export default Result