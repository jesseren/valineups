import React from "react"
import {Link} from "react-router-dom"
import store from "../store/store"

function AbilityCard(props) {
    return (
        <div className="valorantMap">
            <h2>{props.name}</h2>
            <Link to={{ pathname: props.link }}>
                <span onClick={ dispatchAgent }>
                    <img src={props.imgurl} alt={props.name}/>
                </span>
            </Link>
        </div>
    )
}

export default AbilityCard
