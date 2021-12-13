import { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import Quiz from '../components/Quiz';
import Story from '../components/Story';
Chart.register(ArcElement);

const CharacterContainer = () => {


    return (
    <>
        <h1>Character Container</h1>
        <Story />
        <Quiz />
    </>
    )
};

export default CharacterContainer;