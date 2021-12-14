import { useState, useEffect } from 'react'
import quizService from '../services/quizService.js';
import DoughnutChart from './DoughnutChart.js';

const Quiz = ({character, handleHome, handleStory, handleQuiz, score, showScore, setScore, setShowScore, handleTimmysBubble}) => {
        
	const [questions, setQuestions] = useState([])

	
    useEffect(() => {
		console.log('text')
		quizService.getQuestions()
		.then(questions => {setQuestions(questions)
			
        })
    }, [])

	useEffect(() =>{
		// console.log("showScore: ",showScore)
		// console.log("score: ",score)
		if (showScore) {handleTimmysBubble(score)};
	}, [showScore])

	console.log(questions)
	
	const [currentQuestion, setCurrentQuestion] = useState(0);


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	
	if ((!questions.length) && (questions.character !== { character })) {
		return "Loading ..."
	}
	



	return (
		
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					
					You scored {score} out of {questions.length}
					<DoughnutChart score={score} questions={questions} />
                    <button onClick={handleHome} >Return to Gallery</button><button onClick={handleStory} >Return to Story</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					
				</>
			)}
		</div>
	);
}


export default Quiz;