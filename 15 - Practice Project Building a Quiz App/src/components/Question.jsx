import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'


const Question = ({
    questionText , answers , onSelectAnswer , 
    selectedAnswer , answerState ,
     selectedAnswer , answerState }) => {
  return (
    <div id='question'>
    <div id="question"> 
     <QuestionTimer
        timeout={10000}
        onTimeout={handleSkipAnswer} 
        />
        <h2>{questionText}</h2>
        <Answers 
        answers={answers} 
        selectedAnswer={selectedAnswer} 
        answerState={answerState}
        onSelect={onSelectAnswer}
        /> 
            </div>
       
    </div>
  )
}

export default Question