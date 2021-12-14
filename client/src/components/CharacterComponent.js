import { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import Quiz from './Quiz';
import Story from './Story';
Chart.register(ArcElement);

const CharacterComponent = ({StoryState}) => {

    console.log("in char cont: ", StoryState)

    return (
    <div id="CharacterComponent">
        <h1>Character Component</h1>
        <Story StoryState={StoryState}/>
        <Quiz character={StoryState.character}/>
    </div>
    )
};

export default CharacterComponent;