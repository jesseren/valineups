import React from "react"
import { Link } from "react-router-dom"
import store from "../store/store"

function ValorantMap(props) {
    function dispatchMap() {
        store.dispatch({ type: 'map/selectMap', payload: props.name })
    }

    return(
        <div className="valorantMap">
            <h2>{props.name}</h2>
            <Link to="filters">
                <span onClick={ dispatchMap }>
                    <img src={props.imgurl} alt={props.name}/>
                </span>
            </Link>
        </div>
    )
}
    

export default ValorantMap