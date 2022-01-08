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
        ability: constants.abilities[store.getState().agent],
        side: {
            attacking: {
                str: 'Attacking',
                val: true,
            },
            defending: {
                str: 'Defending',
                val: true,
            },
        },
        roundPhase: {
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
        agentLocation: JSON.parse(JSON.stringify(constants.mapLocations[store.getState().map])),
        abilitySite: constants.sites[store.getState().map],
        abilityLocation: JSON.parse(JSON.stringify(constants.mapLocations[store.getState().map])),
    })
    const [showFilter, setShowFilter] = useState(false)

    console.log("Store", store.getState())
    // console.log(filters)

    var url = 'http://localhost:8000/lineups/?agent=' + store.getState().agent + '&gameMap=' + store.getState().map

    function dispatchFilters() {
        url = 'http://localhost:8000/lineups/?agent=' + store.getState().agent + '&gameMap=' + store.getState().map
        for (const [ikey, ivalue] of Object.entries(filters)) {            
            url += '&' + ikey + '__in='
            // for (const [jkey, jvalue] of Object.entries(filters[ikey])) {
            for (const [jkey, jvalue] of Object.entries(ivalue)) {    
                if (jvalue.val) {
                    url += jvalue.str + ','
                }
            }
        }

        console.log(url)
        
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setLineups(data)
                console.log('data', data)
            })

        setShowFilter(false)
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setLineups(data)
                console.log('data', data)
            })
    }, [])

    const abilityVals = []
    const sideVals = []
    const roundPhaseVals = []
    const agentLocationVals = []
    const abilitySiteVals = []
    const abilityLocationVals = []
    
    for (const ability in filters.ability) {
        abilityVals.push(ability)
    }
    for (const side in filters.side) {
        sideVals.push(side)
    }
    for (const roundPhase in filters.roundPhase) {
        roundPhaseVals.push(roundPhase)
    }
    for (const agentLocation in filters.agentLocation) {
        agentLocationVals.push(agentLocation)
    }
    for (const abilitySite in filters.abilitySite) {
        abilitySiteVals.push(abilitySite)
    }
    for (const abilityLocation in filters.abilityLocation) {
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
        for (const location in filtersCopy.abilityLocation) {
            if (filtersCopy.abilityLocation[location].str.substring(0, site.length) === site) {
                filtersCopy.abilityLocation[location].val = filtersCopy[section][field].val
            }
        }
        setFilters(filtersCopy)
    }
    return(
        <div className='agentLineupsScreen'>
            <Header />
            <img className='agentHeaderImage'src='images/sova-valorant.jpeg' alt='Sova'/>
            <ReactModal isOpen={showFilter} style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
              content: {
                position: "fixed",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              }
            }}>
                <button className='closeModal' onClick={() => setShowFilter(false)}>X</button>
                <div className='filterForm'>
                    <h2>Abilities</h2>
                    <div className='filterSection'>
                    {
                        abilityVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('ability', field)} checked={filters.ability[field].val}/>
                            <label for={field}>{filters.ability[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Side</h2>
                    <div className='filterSection'>
                    {
                        sideVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('side', field)} checked={filters.side[field].val}/>
                            <label for={field}>{filters.side[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Round Phase</h2>
                    <div className='filterSection'>
                    {
                        roundPhaseVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('roundPhase', field)} checked={filters.roundPhase[field].val}/>
                            <label for={field}>{filters.roundPhase[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Agent Location</h2>
                    <div className='filterSection'>
                    {
                        agentLocationVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('agentLocation', field)} checked={filters.agentLocation[field].val}/>
                            <label for={field}>{filters.agentLocation[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Ability Site</h2>
                    <div className='filterSection'>
                    {
                        abilitySiteVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeSiteFilter('abilitySite', field)} checked={filters.abilitySite[field].val}/>
                            <label for={field}>{filters.abilitySite[field].str}</label>
                        </div>)
                    }
                    </div>
                    <h2>Ability Location</h2>
                    <div className='filterSection'>
                    {
                        abilityLocationVals.map((field) => 
                        <div>
                            <input type="checkbox" id={field} onClick={() => changeFilter('abilityLocation', field)} checked={filters.abilityLocation[field].val}/>
                            <label for={field}>{filters.abilityLocation[field].str}</label>
                        </div>)
                    }
                    </div>
                    <button className='filterButton' onClick={() => {dispatchFilters()}}>Filter</button> 
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