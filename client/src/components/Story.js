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
        <h3>The Story of {StoryState.character}</h3>
        <Page pageContent={StoryState.pages[currentPage]} />
        {currentPage!==(0)?<button onClick={handlePrevPage} >Prev Page</button>:null}
        {currentPage!==(StoryState.pages.length-1)?<button onClick={handleNextPage} >Next Page</button>:null}
        {showQuiz===false?<button onClick={handleQuizClick} handleHome={handleHome}>Quiz</button>:null }
    </>
    )
};

export default Story;