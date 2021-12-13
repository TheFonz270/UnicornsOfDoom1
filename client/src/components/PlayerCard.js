import React from 'react';

const PlayerCard = ({story, selectPlayer}) => {

    const handleClick = (e) => {
        const player = story._id
        selectPlayer(player)
        // console.log(player)
    }

    return (
        <>
            <div onClick={handleClick}>
                <p>{story.character}</p>
                <img src='./imgs/image.png' alt={story.character} width="150px"/>
            </div>
        </>
    )
}

export default PlayerCard;