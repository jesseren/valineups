import React from 'react'

function AgentLineup(props) {
    return(
        <div className="agentLineup">
            <p>- Ability: {props.lineup.ability}</p>
            <p>- Agent Location: {props.lineup.agentLocation}</p>
            <p>- Ability Site: {props.lineup.abilitySite}</p>
            <p>- Ability Location: {props.lineup.abilityLocation}</p>
            <p>- Round Phase: {props.lineup.roundPhase}</p>
            <div className='images'>
                <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/AbilityLocation/' + props.lineup.lineup_id + '.png' } alt = ''/>
                <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/AgentPosition/' + props.lineup.lineup_id + '.png'} alt = 'No Position Available'/>
                <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/Crosshair/' + props.lineup.lineup_id + '.png'} alt = ''/>
            </div>
        </div>
    )
}

export default AgentLineup

