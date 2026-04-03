import React, { useState } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];


    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers)=> {
        return [...prevUserAnswers, selectedAnswer];
      });
    }


    if(quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed</h2>
        </div>
    }

     shuffledAnswers.sort(() => Math.random() - 0.5);
     const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
 
  return (  
   <div id="quiz">
     <div id="question"> 
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
         <ul id="answers"> 
            {shuffledAnswers.map((answer) => (
             <li key={answer} className='answer' onClick={() => handleSelectAnswer(answer)}> 
                 <button>
                    {answer}
                 </button>
             </li>
            )) }
         </ul>
    </div>
   </div>
  )
}

export default Quiz