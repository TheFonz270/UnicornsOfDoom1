import { useState } from 'react'
import Page from './Page.js';

const Story = ({StoryState, handleHome, currentPage, handleNextPage, handlePrevPage, handleQuizClick, showQuiz}) => {

    // console.log("story within story: ", StoryState)
    
    // console.log("StoryState.pages: ", StoryState.pages)




    // const pages = StoryState.pages.filter((page) => { pages(currentPage)
    //     console.log("Page: ", page)
    //     return <Page pageContent={page}/>
    // })

    console.log("Storystate: ", StoryState)

    return (
    <>
        <Page pageContent={StoryState.pages[currentPage]} />
        <div id="buttonBar">
            {currentPage!==(0)?<button onClick={handlePrevPage} >←</button>:null}
            {currentPage!==(StoryState.pages.length-1)?<button onClick={handleNextPage} >→</button>:null}
            {currentPage===(StoryState.pages.length-1)?<button onClick={handleQuizClick} handleHome={handleHome}>Quiz</button>:null }
            <button onClick={handleHome} >Return to Gallery</button>
        </div>
    </>
    )
};

export default Story;