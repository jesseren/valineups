import React, {useState} from 'react'
import MapLineupLocations from './MapLineupLocations'
import { Carousel } from 'react-responsive-carousel';
import ReactModal from 'react-modal';
import { abilityRads } from '../constants';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AgentLineup(props) {
    const [showModal, setShowModal] = useState(false)
    const [selectedPic, setSelectedPic] = useState(0)

    return(
        <div className='agentLineup'>
            <div class='lineupInfo'>
                <p>Ability: <b>{props.lineup.ability.replace('_', ' ')}</b></p>
                <p>Side: <b>{props.lineup.side.replace('_', ' ')}</b></p>
                <p>Agent Location: <b>{props.lineup.agentLocation.replace('_', ' ')}</b></p>
                <p>Ability Location: <b>{props.lineup.abilityLocation.replace('_', ' ')}</b></p>
                <p>Round Phase: <b>{props.lineup.roundPhase.replace('_', ' ')}</b></p>
                <p>Video: <a href={props.lineup.url}>{props.lineup.url.replace('_', ' ')}</a></p>
            </div>
            <div className="map" onClick={() => {
                setShowModal(true)
                setSelectedPic(0)
            }}>
                <MapLineupLocations mapSrc='images/Ascent_Callouts.jpeg' agent={props.lineup.agent} agentX={props.lineup.agentX} agentY={props.lineup.agentY} abilityX={props.lineup.abilityX} abilityY={props.lineup.abilityY} abilityRad={abilityRads[props.lineup.ability]} height={500} width={500}/>
            </div>
            <img src={props.lineup.abilityLocationUrlprops.lineup.abilityLocationUrl} alt = '' onClick={() => {
                setShowModal(true)
                setSelectedPic(1)
            }}/>
            <img src={props.lineup.agentLocationUrl} alt = 'No Position Available' onClick={() => {
                setShowModal(true)
                setSelectedPic(2)
            }}/>
            <img src={props.lineup.crosshairUrl} alt = '' onClick={() => {
                setShowModal(true)
                setSelectedPic(3)
            }}/>
            <ReactModal isOpen={showModal}>
                <button className='closeModal' onClick={() => setShowModal(false)}>X</button>
                <Carousel showArrows={true} showThumbs={false} selectedItem={selectedPic}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} className='control-arrow control-prev' title={label} style={{opacity: 1}}>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} className='control-arrow control-next' title={label} style={{opacity: 1}}>
                        </button>
                    )
                }>
                    <MapLineupLocations mapSrc='images/Ascent_Callouts.jpeg' agentX={props.lineup.agentX} agentY={props.lineup.agentY} abilityX={props.lineup.abilityX} abilityY={props.lineup.abilityY} abilityRad={abilityRads[props.lineup.ability]} height={1000} width={1000}/>
                    <img src={props.lineup.abilityLocationUrl} alt = ''/>
                    <img src={props.lineup.agentLocationUrl} alt = 'No Position Available'/>
                    <img src={props.lineup.crosshairUrl} alt = ''/>
                </Carousel>
            </ReactModal>
            {/* <MapLineupLocations mapSrc='images/Ascent_Callouts.jpeg' agentX={props.lineup.agentX} agentY={props.lineup.agentY} abilityX={props.lineup.abilityX} abilityY={props.lineup.abilityY} abilityRad={75}/>
            <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/AbilityLocation/' + props.lineup.lineup_id + '.png' } alt = ''/>
            <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/AgentPosition/' + props.lineup.lineup_id + '.png'} alt = 'No Position Available'/>
            <img src={'images/' + props.lineup.agent + '/' + props.lineup.gameMap + '/Crosshair/' + props.lineup.lineup_id + '.png'} alt = ''/> */}
        </div>
    )
}

export default AgentLineup

