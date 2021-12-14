import React from 'react';

import PlayerCard from './PlayerCard';

const KeyPlayers = ({Stories, selectPlayer}) => {

    const PlayerList = Stories.map((story) =>{
        return <PlayerCard story={story} selectPlayer={selectPlayer} />
        });

    return (
        <div id="keyPlayers">
        {PlayerList}
            <div class='playerCard'>
                    <img src='./imgs/coming_soon.png' alt="Placeholder image" />
                    <h3>Coming Soon</h3>
            </div>
            <div class='playerCard'>
                    <img src='./imgs/coming_soon.png' alt="Placeholder image" />
                    <h3>Coming Soon</h3>
            </div>
            <div class='playerCard'>
                    <img src='./imgs/coming_soon.png' alt="Placeholder image" />
                    <h3>Coming Soon</h3>
            </div>
       </div>
    )
}


export default  KeyPlayers;