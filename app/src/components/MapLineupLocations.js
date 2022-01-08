import React, { useRef, useEffect } from "react"

function MapLineupLocations(props) {
    const canvasRef = useRef(null)
    
    useEffect(() => {
        let img = new Image()
        img.src = props.mapSrc

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        img.onload = () => {
            context.drawImage(img,0,0, props.width, props.height)
            context.fillStyle = "red"
            context.strokeStyle = "red"
            context.beginPath()
            context.arc(props.agentX * props.width, props.agentY * props.height, 3, 0, 2 * Math.PI)
            context.fill()
            context.font = "12px Helvetica"
            context.fillText("Sova", props.agentX * props.width + 10, props.agentY * props.height + 5)
            context.beginPath()
            context.arc(props.abilityX * props.width, props.abilityY * props.height, 3, 0, 2 * Math.PI)
            context.fill()
            context.beginPath()
            context.arc(props.abilityX * props.width, props.abilityY * props.height, props.abilityRad, 0, 2 * Math.PI)
            context.stroke()
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasRef} height={props.height + "px"} width={props.width + "px"}/>
        </div>
    )
}

export default MapLineupLocations