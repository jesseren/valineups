import React from "react"
import {Link} from "react-router-dom"

function AgentPanel(props) {
    console.log(props.imgurl)
    return (
        <div class="agentPanel">
            <h2>{props.name}</h2>
            <Link to={props.link}>
                <img src={props.imgurl} alt={props.name}/>
            </Link>
        </div>
    )
}

export default AgentPanel