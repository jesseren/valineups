import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from './Header'
import store from "../store/store"

import AbilityCard from "./AbilityCard"

// might need to make component for sites
const sites = ['a', 'b']

const abilities = {
    'Sova': [
        {
            key: 'recon_bolt',
            name:'Recon bolt',
            image: '',
        },
        {
            key: 'shock_dart',
            name:'Shock dart',
            image: '',
        }, 
    ],
    'Viper': ['snakebite', 'poison_gas'],
}

function LocationAbility(props) {
    const [ selectedSite, setSite ] = useState('')
    const [ selectedAbility, setAbility ] = useState('')

    const selectedAgent = store.getState().agent

    // need logic for c site
    const siteSelection = sites.map((site) => 
        <div className="valorantMap" key={site}
            onClick={() => setSite(site)}
        >
            <h2>test</h2>
            { site.toUpperCase() + ' Site' } 
        </div>
    )

    const abilitySelection = abilities[selectedAgent].map((ability) => 
        <AbilityCard key={ability.key} name={ability.name} setAbility={setAbility} imgurl={ability.image} />
    )

    function dispatchFilters() {
        var payload = {
            'site': selectedSite,
            'ability': selectedAbility,
        }
        store.dispatch({ type: 'filters/selectFilters', payload: payload })
    }

    return (
        <div className="mapSelectionScreen">
            <Header />
            <img className='logo' src='images/Valorant_logo.png' />

            <h1>Select the site</h1> 
            <div className="mapSelection">
                { siteSelection }
            </div>

            <h1>Select the ability</h1> 
            <div className="mapSelection">
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
