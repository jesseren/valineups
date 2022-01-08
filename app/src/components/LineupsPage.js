import React, { useState, useEffect } from "react"
import AgentLineup from './AgentLineup'
import Header from './Header'
import store from "../store/store"
import * as constants from '../constants'
import ReactModal from 'react-modal';

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

    const [filters, setFilters] = useState({
        abilities: constants.abilities[store.getState().agent],
        sides: {
            attacking: {
                str: 'Attacking',
                val: true,
            },
            defending: {
                str: 'Defending',
                val: true,
            },
        },
        roundPhases: {
            takeSite: {
                str: 'Take_Site',
                val: true,
            },
            holdSite: {
                str: 'Hold_Site',
                val: true,
            },
            preventPlant: {
                str: 'Prevent_Plant',
                val: true,
            },
            preventDefuse: {
                str: 'Prevent_Defuse',
                val: true,
            },
        },
        agentLocations: JSON.parse(JSON.stringify(constants.mapLocations[store.getState().map])),
        abilitySites: constants.sites[store.getState().map],
        abilityLocations: JSON.parse(JSON.stringify(constants.mapLocations[store.getState().map])),
    })
    const [showFilter, setShowFilter] = useState(false)

    // console.log("Store", store.getState())
    console.log(filters)

    var url = 'http://localhost:8000/lineups/?agent=' + store.getState().agent + '&map=' + store.getState().map

    if (store.getState().site != "") {
        url += '&site='
        url += store.getState().site
    }
    if (store.getState().ability != "") {
        url += '&ability='
        url += store.getState().ability
    }

    function dispatchFilters() {
        url = 'http://localhost:8000/lineups/?agent=' + store.getState().agent + '&map=' + store.getState().map
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setLineups(data)
                console.log(data)
            })
    }, [])

    // const [data, setData] = useState({
    //     abilities: 
    // })

    const abilityVals = []
    const sideVals = []
    const roundPhaseVals = []
    const agentLocationVals = []
    const abilitySiteVals = []
    const abilityLocationVals = []
    
    for (const ability in filters.abilities) {
        abilityVals.push(ability)
    }
    for (const side in filters.sides) {
        sideVals.push(side)
    }
    for (const roundPhase in filters.roundPhases) {
        roundPhaseVals.push(roundPhase)
    }
    for (const agentLocation in filters.agentLocations) {
        agentLocationVals.push(agentLocation)
    }
    for (const abilitySite in filters.abilitySites) {
        abilitySiteVals.push(abilitySite)
    }
    for (const abilityLocation in filters.abilityLocations) {
        abilityLocationVals.push(abilityLocation)
    }

    function changeFilter(section, field) {
        let filtersCopy = {...filters}
        filtersCopy[section][field].val = !filtersCopy[section][field].val 
        setFilters(filtersCopy)
    }

    function changeSiteFilter(section, field) {
        let filtersCopy = {...filters}
        let site = filtersCopy[section][field].str
        filtersCopy[section][field].val = !filtersCopy[section][field].val
        for (const abilityLocation in filtersCopy.abilityLocations) {
            if (filtersCopy.abilityLocations[abilityLocation].str.substring(0, site.length) === site) {
                filtersCopy.abilityLocations[abilityLocation].val = filtersCopy[section][field].val
            }
        }
        setFilters(filtersCopy)
    }
    return(
        <div className='agentLineupsScreen'>
            <Header />
            <img className='agentHeaderImage'src='images/sova-valorant.jpeg' alt='Sova'/>
            <ReactModal isOpen={showFilter}>
                <button className='closeModal' onClick={() => setShowFilter(false)}>X</button>
                <div className='filterForm'>
                    <h2>Abilities</h2>
                    <div className='filterSection'>
                    {
                        abilityVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('abilities', field)} checked={filters.abilities[field].val}/>
                            <label for={field}>{filters.abilities[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Side</h2>
                    <div className='filterSection'>
                    {
                        sideVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('sides', field)} checked={filters.sides[field].val}/>
                            <label for={field}>{filters.sides[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Round Phase</h2>
                    <div className='filterSection'>
                    {
                        roundPhaseVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('roundPhases', field)} checked={filters.roundPhases[field].val}/>
                            <label for={field}>{filters.roundPhases[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Agent Location</h2>
                    <div className='filterSection'>
                    {
                        agentLocationVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('agentLocations', field)} checked={filters.agentLocations[field].val}/>
                            <label for={field}>{filters.agentLocations[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Ability Site</h2>
                    <div className='filterSection'>
                    {
                        abilitySiteVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeSiteFilter('abilitySites', field)} checked={filters.abilitySites[field].val}/>
                            <label for={field}>{filters.abilitySites[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Ability Location</h2>
                    <div className='filterSection'>
                    {
                        abilityLocationVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('abilityLocations', field)} checked={filters.abilityLocations[field].val}/>
                            <label for={field}>{filters.abilityLocations[field].str}</label>
                        </div>)
                    }
                    </div>
                    <button className='filterButton' onClick={() => {setShowFilter(false) }}>Filter</button> 
                </div>
            </ReactModal>
            <div className='agentLineups'>
                {lineups.map((lineup) => <AgentLineup key={lineup.lineup_id} lineup={lineup} />)}
            </div>
            <button className='filterButton filterOpen' onClick={() => setShowFilter(true)}>Filter</button>
        </div>
    )
}
    

export default Agent