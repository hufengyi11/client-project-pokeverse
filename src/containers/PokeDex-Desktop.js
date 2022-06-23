import React, { useState } from 'react'
import BackLightButton from "../components/Buttons/BackLightButton";
import ScreenSelector from '../components/Screens/ScreenSelector';
import pokedex from '../components/pokedex.svg';
import ButtonsContainer from './ButtonsContainer';
import ScreenContainer from './ScreenContainer';
// import './PokeDex-Desktop.css'

const blackBoxShadow = "inset 0px 1px 15px 10px rgba(0, 0, 0, 0.5)";
const whiteBoxShadow = "0px 1px 15px 4px rgba(255, 255, 255, 0.5)";
const PokeDex_Desktop = () => {
    const [ScreenState, setScreenState] = useState({ backgroundColor: "black", boxShadow: blackBoxShadow });
    const backLightToggle = () => {
        if (ScreenState.backgroundColor === "black") {
            setScreenState({ backgroundColor: "white", boxShadow: whiteBoxShadow });
        }
        else {
            setScreenState({ backgroundColor: "black", boxShadow: blackBoxShadow });
        }
    }
    return (
        <div className='overall'>
            <div className='screenContainer-frame'>
                <ScreenContainer />
            </div>
            <img className="content" src={pokedex} alt="a pokedex" />
        </div>
    )
}
export default PokeDex_Desktop;