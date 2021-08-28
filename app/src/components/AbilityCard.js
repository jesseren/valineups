import React from "react"
import {Link} from "react-router-dom"
import store from "../store/store"

function AbilityCard(props) {
    return (
        <div className="valorantMap">
            <h2>{props.name}</h2>
            <span onClick={ () => props.setAbility( props.key ) }>
                <img src={props.imgurl} alt={props.name}/>
            </span>
        </div>
    )
}

export default AbilityCard
