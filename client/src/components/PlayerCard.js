import {useEffect, useState} from 'react';

const PlayerCard = ({story, selectPlayer}) => {

    const [selection, setSelection] = useState("");

    const handleClick = (e) => {
        selectPlayer(story._id)
    }

    return (
        <>
            <div onClick={handleClick}>
                <p>{story.character}</p>
                <img src={story.charImg} alt={story.character}/>
            </div>
        </>
    )
}

export default PlayerCard;