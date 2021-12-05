import React, { useState } from "react"
import ValorantMap from "./ValorantMap"
import Header from './Header'
import store from "../store/store"

const maps = [
    {name: "Ascent", image: "images/Loading_Screen_Ascent.png"},
    {name: "Bind", image: "images/Loading_Screen_Bind.png"},
    {name: "Breeze", image: "images/Loading_Screen_Breeze.png"},
    {name: "Haven", image: "images/Loading_Screen_Haven.png"},
    {name: "Icebox", image: "images/Loading_Screen_Icebox.png"},
    {name: "Split", image: "images/Loading_Screen_Split.png"}
  ]

function Maps(props) {
    // const agent = props.location.state.agent
    // console.log("Store", store.getState())
    const mapSelection = maps.map((valorantMap) => 
        <ValorantMap key={valorantMap.name} name={valorantMap.name} link="/maps" imgurl={valorantMap.image} />
    );
    //console.log(props)
    return (
        <div className="mapSelectionScreen">
            <Header />
            <img className='logo' src='images/Valineups_logo.png' />
            <h1>Select a map</h1> 
            <div className="mapSelection">
                {mapSelection}
            </div>
        </div>
    );
}
    
export default Maps
