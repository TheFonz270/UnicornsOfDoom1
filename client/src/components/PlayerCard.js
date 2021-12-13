import {useEffect, useState} from 'react';

const PlayerCard = ({story, selectPlayer}) => {

    const [selection, setSelection] = useState("");
    console.log("selection: ", selection)

    const handleClick = (e) => {
        // setSelection(story._id);
        selectPlayer(story._id)
        // console.log(player)
    }
    
    // useEffect(() => {
    //     // selectPlayer(selection)
    //     console.log("use effect called")
    // }, [selection])

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