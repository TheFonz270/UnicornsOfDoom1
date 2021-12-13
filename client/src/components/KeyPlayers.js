import React from 'react';

import PlayerCard from './PlayerCard';

const KeyPlayers = ({Stories, selectPlayer}) => {

    const PlayerList = Stories.map((story) =>{
        return <PlayerCard story={story} selectPlayer={selectPlayer} />
        });

    return (
        <>
       {PlayerList}
       </>
    )
}


export default  KeyPlayers;