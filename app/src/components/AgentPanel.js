import React from "react"
import {Link} from "react-router-dom"

function AgentPanel(props) {
    console.log(props.imgurl)
    return (
        <div className="agentPanel">
            <h2>{props.name}</h2>
            <Link 
                to={{
                    pathname: props.link,
                    state: {agent: props.name},
                }}
            >
                <img src={props.imgurl} alt={props.name}/>
            </Link>
        </div>
    )
}

export default AgentPanel