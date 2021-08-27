import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from './Header'
import store from "../store/store"

// might need to make component for sites
const sites = ['a', 'b']

const abilities = {
    sova: ['Recon bolt', 'shock_dart', 'hunter_fury'],
    viper: ['snakebite', 'poison_gas'],
}

function LocationAbility(props) {
    const [ selectedSite, setSite ] = useState('')
    const [ selectedAbility, setAbility ] = useState('')

    // need logic for c site
    const siteSelection = sites.map((site) => 
        <div className="valorantMap"
            onClick={() => setSite(site)}
        >
            <h2>test</h2>
            { site.toUpperCase() + ' Site' } 
        </div>
    )


    return (
        <div className="mapSelectionScreen">
            <Header />
            <img className='logo' src='images/Valorant_logo.png' />
            <h1>Select the site</h1> 
            <div className="mapSelection">
                {siteSelection}
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
