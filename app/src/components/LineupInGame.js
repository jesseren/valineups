import React, { useRef, useEffect } from "react"

function LineupInGame(props) {
    const canvasRef = useRef(null)
    
    useEffect(() => {
        let img = new Image()
        img.src = props.lineupSrc

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        img.onload = () => {
            context.drawImage(img,0,0, 500, 500)
            context.fillStyle = "red"
            context.strokeStyle = "red"
            context.beginPath()
            context.moveTo(props.lineupX, 0)
            context.lineTo(props.lineupX, 500)
            context.stroke()
            context.beginPath()
            context.moveTo(0, props.lineupY)
            context.lineTo(500, props.lineupY)
            context.stroke()
            context.beginPath()
            context.arc(props.lineupX, props.lineupY, 3, 0, 2 * Math.PI)
            context.fill()
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasRef} height={"500px"} width={"500px"}/>
        </div>
        
    )
}

export default LineupInGame