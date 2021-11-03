import React, { useState, useEffect } from "react"
import AgentLineup from './AgentLineup'
import Header from './Header'
import store from "../store/store"

function Agent(props) {
    const [lineups, setLineups] = useState([{
        id: '',
        ability: "",
        abilityLocation: "",
        abilitySite: "",
        agent: "",
        agentLocation: "",
        end: 0,
        gameMap: "",
        gamePhase: "",
        start: 0,
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
                {lineups.map((lineup) => <AgentLineup key={lineup.id} lineup={lineup} />)}
            </div>
        </div>
    )
}
    

export default Agent