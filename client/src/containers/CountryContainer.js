import React, {useState, useEffect} from 'react';
import CharacterComponent from '../components/CharacterComponent';
import KeyPlayers from '../components/KeyPlayers';
import { getStories, getStory } from '../services/storyService';

const CountryContainer = () => {
    const country = "Scotland"
    const [StoryState, setStoryState] = useState({});
    const [Stories, setStories] = useState([[]]);
    const [showKeyPlayers,setShowKeyPlayers]=useState(true)
    const [showQuiz,setShowQuiz]=useState(false)
    const [showStory,setShowStory]=useState(true)
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleQuizClick = () => {
        setShowQuiz(true)
        setShowStory(false)
    }
    // setStoryState({});

    useEffect(()=>{
    getStories().then((allStories)=>{
      setStories(allStories);
    })}, [])

    const selectPlayer = id => {
        getStory(id).then((selectedStory) => {
            setStoryState(selectedStory)
            setShowStory(true)
            setShowKeyPlayers(false)
            setCurrentPage(0)
        })
    };

    const handleHome = () => {
        setShowQuiz(false)
        setShowStory(false)
        setShowKeyPlayers(true)
    }

    const handleStory = () => {
        setShowQuiz(false)
        setShowStory(true)
        setCurrentPage(0)
    }

    // console.log("In country container:", StoryState)

    return (
    <div id="countryContainer">
        {/* MAP */}
        {showKeyPlayers?<KeyPlayers Stories={Stories} selectPlayer={selectPlayer}/>:null}
        <CharacterComponent StoryState={StoryState} handleHome={handleHome} handleQuizClick={handleQuizClick} handleStory={handleStory} showStory={showStory} showQuiz={showQuiz} currentPage={currentPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
    </div>
    )
};

//showQuiz?<Quiz character={StoryState.character}/>:null

export default CountryContainer;