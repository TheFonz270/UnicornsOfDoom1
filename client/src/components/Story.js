import { useState } from 'react'
import Page from './Page.js';

const Story = ({StoryState}) => {

    console.log("story within story: ", StoryState)

    if (!StoryState.character) {
        return (
            <p>loading</p>
        )
        } 
    
    console.log("StoryState.pages: ", StoryState.pages)

    const pages = StoryState.pages.map((page) => {
        console.log("Page: ", page)
        return <Page pageContent={page}/>
    })

    console.log("pages: ", pages)

    return (
    <>
        <h3>Story</h3>
        <h3>{StoryState.character}</h3>
        {pages}
    </>
    )
};

export default Story;