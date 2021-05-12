import React from "react"
import {Link} from "react-router-dom"

function ValorantMap(props) {
    return(
        <div class="valorantMap">
            <h2>{props.name}</h2>
            <Link to="Sova">
                <img src={props.imgurl} alt={props.name}/>
            </Link>
        </div>
    )
}
    

export default ValorantMap