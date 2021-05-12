import React from "react"
import AgentPanel from "./AgentPanel"

function AgentSelect(props) {
    const agents = props.agents;
    const agentSelectionPanels = agents.map((agent) => 
        <AgentPanel key={agent.name} name={agent.name} link="/Maps" imgurl={agent.panel} />
    );
    return (
        <div className="agentSelect">
            {agentSelectionPanels}
        </div>
    );
}

export default AgentSelect