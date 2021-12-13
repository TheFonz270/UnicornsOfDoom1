import React, {useState, useEffect} from 'react';
import CharacterContainer from './CharacterContainer';
import KeyPlayers from '../components/KeyPlayers';
import { getStories, getStory } from '../services/storyService';

const CountryContainer = () => {
    const country = "Scotland"
    const [Story, setStory] = useState({});
    const [Stories, setStories] = useState([[]]);

    useEffect(()=>{
    getStories().then((allStories)=>{
      setStories(allStories);
    })

    const selectPlayer = ((id) => {
        const selectedStory = getStory(id)
        setStory(selectedStory)
        console.log(Story)
});
    

  }, []);


    return (
    <>
    <h1>Country Container</h1>
    {/* MAP */}
    <KeyPlayers Stories={Stories} selectPlayer={selectPlayer}/>
    <CharacterContainer />
    </>
    )
};

export default CountryContainer;