import { useState } from 'react'

const Story = ({StoryState}) => {

    console.log("story within story: ", StoryState)

    if (!StoryState.character) {
        return (
            <p>loading</p>
        )
        }

    // const pages = StoryState.pages.map((page) => {

    // })

    return (
    <>
        <h3>Story</h3>
        <h3>{StoryState.character}</h3>
    </>
    )
};

export default Story;