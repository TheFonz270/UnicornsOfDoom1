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
    const [bubble, setBubble]=useState("BubbleText1.png")
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleQuizClick = () => {
        setShowQuiz(true)
        setShowStory(false)
        setBubble("BubbleText3.png")
    }
    // setStoryState({});

    const handleTimmysBubble = () => {
        switch(score) {
            case 0:
                setBubble("0of5.png")
                break;
            case 1:
                setBubble("1of5.png")
                break;
            case 2:
                setBubble("2of5.png")
                break;
            case 3:
                setBubble("3of5.png")
                break;
            case 4:
                setBubble("4of5.png")
                break;
            case 5:
                setBubble("5of5.png")
                break;
            // default:
          }
        //   console.log("Bubble: ", bubble)
    }

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
            setBubble("BubbleText2.png")
        })
    };

    const handleHome = () => {
        setShowQuiz(false)
        setShowStory(false)
        setShowKeyPlayers(true)
        setBubble("BubbleText1.png")
        setScore(0);
        setShowScore(false)
    }
    
    const handleStory = () => {
        setShowQuiz(false)
        setShowStory(true)
        setCurrentPage(0)
        setBubble("BubbleText2.png")
        setScore(0);
        setShowScore(false)
    }

    // console.log("In country container:", StoryState)

    return (
        <>
        <div id="HeadingBar">
                <div id="heading">
                    <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BBC_logo_white.svg/1200px-BBC_logo_white.svg.png"/>
                    <h1 onClick={handleHome}>Scottish History</h1>
                </div>
            </div>
    <div id="countryContainer">
        <div class="main">
            {showKeyPlayers?<div class="Gallery">
                <div class="map"><img src="./imgs/Scotland.png" alt="ScotlandImage"></img></div>
                <KeyPlayers Stories={Stories} selectPlayer={selectPlayer}/>
            </div>:null}
            <CharacterComponent
                StoryState={StoryState}
                handleHome={handleHome}
                handleQuizClick={handleQuizClick}
                handleStory={handleStory}
                showStory={showStory}
                showQuiz={showQuiz}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                score={score} showScore={showScore}
                setScore={setScore}
                setShowScore={setShowScore}
                handleTimmysBubble={handleTimmysBubble}/>
        </div>
        <div class="kid">
            <img src={`./imgs/${bubble}`}></img>
            <img src="./imgs/timmy_transparent.png" alt="timmy"></img>
        </div>
    </div>
    </>
    )
};

//showQuiz?<Quiz character={StoryState.character}/>:null

export default CountryContainer;