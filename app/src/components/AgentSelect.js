import React from "react"
import AgentPanel from "./AgentPanel"
import Header from './Header'

const agents = [
    {name: "Brimstone", panel: "images/Valorant_Brimstone_Card.jpeg"},
    {name: "Killjoy", panel: "images/Valorant_Killjoy_Card.jpeg"},
    {name: "Raze", panel: "images/Valorant_Raze_Card.jpeg"},
    {name: "Sova", panel: "images/Valorant_Sova_Card.jpeg"},
    {name: "Viper", panel: "images/Valorant_Viper_Card.jpeg"}
  ]

function AgentSelect(props) {
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