import { useEffect, useState } from "react";
import Screen1 from "../Screen1";
import Screen2 from "../Screen2";
import Screen3 from "../Screen3";
import HomeScreen from "./HomeScreen";
import StartUpScreen from "./StartUpScreen";
import DisplayPokemonScreen from "./DisplayPokemonScreen";


const ScreenSelector = () => {

    const [screen,setScreen] = useState('Home');

    const screens = {

        StartUpScreen:{},
        HomeScreen : <HomeScreen goToDisplayPokemonScreen_FromHomeScreen={()=> handleButtonClick('DisplayPokemon')}/> ,
        DisplayPokemonScreen: <DisplayPokemonScreen goToHomeScreen_FromDisplayPokemonScreen={()=>handleButtonClick('Home')}/>,
        screen2: <Screen2 goToPage1_From2={() => handleButtonClick(1)} goToPage3_From2={() => handleButtonClick(3)} />,
        screen3 : <Screen3 goToPage2_From3={()=>handleButtonClick(2)} />

    }

    const handleButtonClick = (screenName) => {

        setScreen(screenName);

    }

    return(
        <>
        {screens[`${screen}Screen`]}           
        </>
    )
}

export default ScreenSelector;