import React, {useState, useEffect} from 'react';
import CharacterComponent from '../components/CharacterComponent';
import KeyPlayers from '../components/KeyPlayers';
import { getStories, getStory } from '../services/storyService';

const CountryContainer = () => {
    const country = "Scotland"
    const [StoryState, setStoryState] = useState({});
    const [Stories, setStories] = useState([[]]);
    // setStoryState({});

    useEffect(()=>{
    getStories().then((allStories)=>{
      setStories(allStories);
    })}, [])

    const selectPlayer = id => {
        getStory(id).then((selectedStory) => {
            setStoryState(selectedStory)
        })
    };

    // console.log("In country container:", StoryState)

    return (
    <>
    <h1>Country Container</h1>
    {/* MAP */}
    <KeyPlayers Stories={Stories} selectPlayer={selectPlayer}/>
    <CharacterComponent StoryState={StoryState}/>
    </>
    )
};

export default CountryContainer;