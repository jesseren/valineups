import React from 'react'
import YouTube from 'react-youtube'

function AgentLineup(props) {
    const opts = {
        height: '300',
        width: '500',
        playerVars: {
          start: props.lineup.start,
          end: props.lineup.end
        }
    }
    function getVideoId(url) {
        return url.substring(url.indexOf('be/') + 3)
    }

    console.log('lineup', props.lineup)
    
    return(
        <div className="agentLineup">
            <YouTube videoId={getVideoId(props.lineup.url)} opts={opts} />
            <p>- Ability: {props.lineup.ability}</p>
            <p>- Agent Location: {props.lineup.agentLocation}</p>
            <p>- Ability Site: {props.lineup.abilitySite}</p>
            <p>- Ability Location: {props.lineup.abilityLocation}</p>
            <p>- Game Phase: {props.lineup.gamePhase}</p>
        </div>
    )
}

export default AgentLineup

