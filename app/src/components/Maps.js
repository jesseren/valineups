import React from "react"
import ValorantMap from "./ValorantMap"
import Header from './Header'

function Maps(props) {
    const maps = props.maps;
    const mapSelection = maps.map((valorantMap) => 
        <ValorantMap key={valorantMap.name} name={valorantMap.name} link="/Maps" imgurl={valorantMap.image} />
    );
    return (
        <div className="mapSelectionScreen">
            <Header />
            <img className='logo' src='images/Valorant_logo.png' />
            <h1>Select a map</h1> 
            <div className="mapSelection">
                {mapSelection}
            </div>
        </div>
    );
}
    

export default Maps