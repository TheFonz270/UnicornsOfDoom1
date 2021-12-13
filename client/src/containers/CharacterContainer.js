import { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import Quiz from '../components/Quiz';
import Story from '../components/Story';
Chart.register(ArcElement);

const CharacterContainer = ({StoryState}) => {

    console.log("in char cont: ", StoryState)

    return (
    <>
        <h1>Character Container</h1>
        <Story StoryState={StoryState}/>
        <Quiz />
    </>
    )
};

export default CharacterContainer;