import React from "react"
import axios from 'axios'

function Sova(props) {
    axios.get('http://localhost:8000/lineups/').then(response => {
        const data = response.data
        console.log(data[0])
    })
    return(
        <div className="Sova">
            Sova
        </div>
    )
}
    

export default Sova