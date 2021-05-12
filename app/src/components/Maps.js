import React from "react"
import ValorantMap from "./ValorantMap"

function Maps(props) {
    const maps = props.maps;
    const mapSelection = maps.map((valorantMap) => 
        <ValorantMap key={valorantMap.name} name={valorantMap.name} link="/Maps" imgurl={valorantMap.image} />
    );
    return (
        <div className="mapSelection">
            {mapSelection}
        </div>
    );
}
    

export default Maps