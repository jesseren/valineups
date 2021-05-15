import React from "react"
import AgentPanel from "./AgentPanel"
import Header from './Header'

function AgentSelect(props) {
    const agents = props.agents;
    const agentSelectionPanels = agents.map((agent) => 
        <AgentPanel key={agent.name} name={agent.name} link="/Maps" imgurl={agent.panel} />
    );
    return (
        <div className='agentSelectScreen'>
            <Header />
            <img className='logo' src='images/Valorant_logo.png' />
            <h1>Select an agent</h1> 
            <div className="agentSelect">
                {agentSelectionPanels}
            </div>
        </div>
    );
}

export default AgentSelect