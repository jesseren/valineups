import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from './Header'
import store from "../store/store"

// might need to make component for sites
const sites = ['a', 'b']

const abilities = {
    'Sova': ['Recon bolt', 'shock_dart', 'hunter_fury'],
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
        <div className="valorantMap"
            onClick={() => setAbility(ability)}
        >
            <h2>test</h2>
            { ability[0].toUpperCase() + ability.slice(1) } 
        </div>
    )

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
                    <p>Submit</p>
                </Link>
            </div>
        </div>
    );
}

export default LocationAbility
