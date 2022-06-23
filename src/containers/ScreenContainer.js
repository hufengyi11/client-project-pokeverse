import ScreenSelector from "../components/Screens/ScreenSelector";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import BackLightButton from "../components/Buttons/BackLightButton";
import PokeDexContainer from "./PokeDexContainer";
import PokemonGame from "../components/PokemonGame/PokemonGame";
import useSound from "use-sound";
import { useState } from "react";
import PikaSound from './Pikachu-Sound-Effect.mp3'
import './ScreenContainer.css'

const ScreenContainer = ({ onClickHere }) => {

    const [screen, setScreen] = useState("");
    const [backLightButtonNull, setBackLightButtonNull] = useState("");

    const [play] = useSound(PikaSound);


    return (
        <>
            <div className="screen-content-container">
                <button
                    className="centerButton-invisible"
                    onClick={() => {
                        setScreen(<PokemonGame />)
                    }}>
                </button>
                <button
                    className='power-button'
                    onClick={() => {
                        if (screen === "") {
                            setScreen(<ScreenSelector />)
                            setBackLightButtonNull("");
                            play();
                        } else if (screen != "") {
                            setScreen("")
                            setBackLightButtonNull(<button className='backlight-button__Null' ></button>)
                        }
                    }}>
                </button>
                {screen}
                {backLightButtonNull}
            </div>
        </>
    )


}

export default ScreenContainer