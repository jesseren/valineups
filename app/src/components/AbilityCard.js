import React from "react"
// import store from "../store/store"

function AbilityCard(props) {
    return (
        <div className="ability_container">
            <h2>{props.name}</h2>
            <span onClick={() => props.setAbility( props.name )}>
                <img src={props.imgurl} alt={props.name}/>
            </span>
        </div>
    )
}

export default AbilityCard
