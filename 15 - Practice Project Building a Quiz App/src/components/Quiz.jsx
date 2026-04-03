import React, { useState ,  useCallback } from 'react'
import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from './Question'

const Quiz = () => {
    const [answerState, setAnswerState] = useState('unanswered');
    const [userAnswers, setUserAnswers] = useState([]);
  
   
    const activeQuestionIndex = answerState === '' 
    ?  userAnswers.length : userAnswers.length - 1; 
  

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswers)=> {
        return [...prevUserAnswers, selectedAnswer];
      }); 

      setTimeout(() => {
        if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }
        
        setTimeout(()=> {
          setAnswerState('');
        },2000)
      }, 1000);
    }, [activeQuestionIndex]);
 

    const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null) ,
     [handleSelectAnswer]);


    if(quizIsComplete) {
        return <div id="summary"> 
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed</h2>
        </div>
    }


  return (   
   <div id="quiz">
  <Question
  key={activeQuestionIndex}
   questionText={QUESTIONS[activeQuestionIndex].text}
   answers={QUESTIONS[activeQuestionIndex].answers}
   onSelectAnswer={handleSelectAnswer} 
   answerState={answerState}
   selectedAnswer={userAnswers[userAnswers.length - 1]}
   onSkipAnswer={handleSkipAnswer}
  />
   </div>
  )
}

export default Quiz