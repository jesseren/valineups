import React, { useState, useEffect } from "react"
import AgentLineup from './AgentLineup'
import Header from './Header'
import store from "../store/store"

function Agent(props) {
    const [lineups, setLineups] = useState([{
        lineup_id: '',
        agent: "",
        gameMap: "",
        ability: "",
        side: "",
        roundPhase: "",
        agentLocation: "",
        agentX: 0,
        agentY: 0,
        abilitySite: "",
        abilityLocation: "",
        abilityX: 0,
        abilityY: 0,
        url: "",
    }])
    
    console.log("Store", store.getState())

    var url = 'http://localhost:8000/lineups/?agent=' + store.getState().agent + '&map=' + store.getState().map

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setLineups(data))
    }, [])

    return(
        <div className='agentLineupsScreen'>
            <Header />
            <img className='agentHeaderImage'src='images/sova-valorant.jpeg' />
            <div className='agentLineups'>
                {lineups.map((lineup) => <AgentLineup key={lineup.lineup_id} lineup={lineup} />)}
            </div>
        </div>
    )
}
    

export default Agent