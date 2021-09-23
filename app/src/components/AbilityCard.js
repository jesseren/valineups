import React from "react"
// import store from "../store/store"

function AbilityCard(props) {
    return (
        // <div className="ability_container">
        <div 
            className={`ability_container${ props.selectedAbility == props.name ? '_selected':'' }`}
            onClick={() => props.setAbility( props.name )}
        >
            <h2>{props.name}</h2>
            <img src={props.imgurl} alt={props.name}/>
        </div>
    )
}

export default AbilityCard
