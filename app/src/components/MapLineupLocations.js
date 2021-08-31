import React, { useRef, useEffect } from "react"

function MapLineupLocations(props) {
    const canvasRef = useRef(null)
    
    useEffect(() => {
        let img = new Image()
        img.src = props.mapSrc

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        img.onload = () => {
            context.drawImage(img,0,0, 500, 500)
            context.fillStyle = "red"
            context.strokeStyle = "red"
            context.beginPath()
            context.arc(props.agentX, props.agentY, 3, 0, 2 * Math.PI)
            context.fill()
            context.font = "12px Helvetica"
            context.fillText("Sova", props.agentX + 10, props.agentY + 5)
            context.beginPath()
            context.arc(props.abilityX, props.abilityY, 3, 0, 2 * Math.PI)
            context.fill()
            context.beginPath()
            context.arc(props.abilityX, props.abilityY, props.abilityRad, 0, 2 * Math.PI)
            context.stroke()
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasRef} height={"500px"} width={"500px"}/>
        </div>
        
    )
}

export default MapLineupLocations