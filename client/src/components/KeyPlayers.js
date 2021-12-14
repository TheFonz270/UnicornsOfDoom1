import React from 'react';

import PlayerCard from './PlayerCard';

const KeyPlayers = ({Stories, selectPlayer}) => {

    const PlayerList = Stories.map((story) =>{
        return <PlayerCard story={story} selectPlayer={selectPlayer} />
        });

    return (
        <div id="keyPlayers">
        {PlayerList}
            <div class='dummyPlayer'>
                    <p>Coming Soon</p>
                    <img src='./imgs/image.png' alt="Placeholder image" />
            </div>
            <div class='dummyPlayer'>
                    <p>Coming Soon</p>
                    <img src='./imgs/image.png' alt="Placeholder image" />
            </div>
            <div class='dummyPlayer'>
                    <p>Coming Soon</p>
                    <img src='./imgs/image.png' alt="Placeholder image" />
            </div>
       </div>
    )
}


export default  KeyPlayers;