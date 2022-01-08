import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from './Header'
import store from "../store/store"

import AbilityCard from "./AbilityCard"

// might need to make component for sites
const sites = ['A', 'B']

// https://valorant.fandom.com/wiki/Category:Ability_Images
const abilities = {
    'Brimstone': [
        {
            key: 'incendiary',
            name:'Incendiary',
            image: 'Incendiary.png',
        },
    ],
    'Viper': [
        {
            key: 'snake_bite',
            name:'Snake bite',
            image: 'Snake_Bite.png',
        },
        {
            key: 'poison_orb',
            name:'Poison orb',
            image: 'Poison_Cloud.png',
        }, 
    ],
    'Omen': [
        // todo blind
    ],
    'Killjoy': [
        {
            key: 'nanoswarm',
            name:'Nanoswarm',
            image: 'Nanoswarm.png',
        },
    ],
    'Cypher': [
        // todo
    ],
    'Sova': [
        {
            key: 'recon_bolt',
            name:'Recon_Bolt',
            image: 'Recon_Bolt.png',
        },
        {
            key: 'shock_dart',
            name:'Shock_Dart',
            image: 'Shock_Bolt.png',
        }, 
    ],
    'Sage': [
        // todo
    ],
    'Jett': [
        // todo
    ],
    'Raze': [
        // todo
    ],
    'Kayo': [
        // todo
    ],
}

function LocationAbility(props) {
    const [ selectedSite, setSite ] = useState('')
    const [ selectedAbility, setAbility ] = useState('')

    const selectedAgent = store.getState().agent

    // need logic for c site
    const siteSelection = sites.map((site) => 
        <div className={(selectedSite==site?'filterMap_active':'filterMap')}  key={site}
            onClick={() => {
                setSite(site)
            }}
        >
            <h2>test</h2>
            { site.toUpperCase() + ' Site' } 
        </div>
    )

    const abilitySelection = abilities[selectedAgent].map((ability) => 
        <AbilityCard key={ability.key} name={ability.name} selectedAbility={selectedAbility} setAbility={setAbility} imgurl={'images/abilities/' + ability.image} />
    )

    function dispatchFilters() {
        var payload = {
            'site': selectedSite,
            'ability': selectedAbility,
        }
        store.dispatch({ type: 'filters/selectFilters', payload: payload })
    }

    return (
        <div className="filterSelectionScreen">
            <Header />
            <img className='logo' src='images/Valineups_logo.png' />

            <h1>Select the site</h1> 
            <div className="filterSelection">
                { siteSelection }
            </div>

            <h1>Select the ability</h1> 
            <div className="filterSelection">
                { abilitySelection }
            </div>

            <div className="nextButton">
                <Link to="lineups">
                    <span onClick={ dispatchFilters }>
                        <p>Submit</p>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default LocationAbility
