import React, { useState ,  useCallback } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  

  const handleSelectAnswer =  useCallback(function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers)=> {
        return [...prevUserAnswers, selectedAnswer];
      }); 
    }, []);
 

    const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null) ,
     [handleSelectAnswer]);


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
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer} 
        />
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