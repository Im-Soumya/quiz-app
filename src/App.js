import React, { useState } from 'react';
import "./App.css"

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  const [currQues, setCurrQues] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function handleClick(isCorrect) {
    if(isCorrect === true) {
      setScore(prevScore => prevScore + 1)
    }
    let nextQues = currQues + 1
    if(nextQues < questions.length) {
      setCurrQues(nextQues)
    } else {
      setShowScore(prevState => !prevState)
    }
  }

  function handleReset() {
    setCurrQues(0)
    setScore(0)
    setShowScore(0)
  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
        <div className='scoreContainer'>
				  <div className='score-section'>You scored {score} out of {questions.length}</div>
          <button onClick={handleReset} className='resetBtn'>Reset</button>
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currQues + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currQues].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currQues].answerOptions.map(item => (
              <button onClick={()=>handleClick(item.isCorrect)}>{item.answerText}</button>
              ))}
					</div>
				</>
			)}
		</div>
	);
}