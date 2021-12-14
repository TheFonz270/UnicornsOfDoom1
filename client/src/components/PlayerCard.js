import {useEffect, useState} from 'react';

const PlayerCard = ({story, selectPlayer}) => {

    const [selection, setSelection] = useState("");

    const handleClick = (e) => {
        selectPlayer(story._id)
        
    }

    return (
            <div class="playerCard" onClick={handleClick}>
                <img src={story.charImg} alt={story.character}/>
                <h3>{story.character}</h3>
            </div>
    )
}

export default PlayerCard;