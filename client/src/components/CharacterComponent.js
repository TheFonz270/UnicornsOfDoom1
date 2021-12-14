import { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import Quiz from './Quiz';
import Story from './Story';
Chart.register(ArcElement);

const CharacterComponent = ({StoryState}) => {

    console.log("in char cont: ", StoryState)

    const [show,setShow]=useState(false)

    return (
    <>
        <h1>Character Container</h1>
        <Story StoryState={StoryState} />
        {<button onClick={()=>setShow(!show)} >Quiz</button> }
        { 
            show?<Quiz character={StoryState.character}/>:null
            
        }
        
    </>
    )
};

export default CharacterComponent;