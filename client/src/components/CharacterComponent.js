import { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import Quiz from './Quiz';
import Story from './Story';
Chart.register(ArcElement);

const CharacterComponent = ({StoryState, handleHome, handleQuizClick, handleStory, showStory, showQuiz, currentPage, handleNextPage, handlePrevPage}) => {

    console.log("in char cont: ", StoryState)



    

    if (!StoryState.character) {
        return (
            <>
            </>
        )
        } 

    return (
    <>
        {showStory?<Story StoryState={StoryState} handleHome={handleHome} currentPage={currentPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handleQuizClick = {handleQuizClick} showQuiz={showQuiz}/>:null}
        { 
            showQuiz?<Quiz character={StoryState.character} handleHome={handleHome} handleStory={handleStory}/>:null
            
        }
        
    </>
    )
};

export default CharacterComponent;