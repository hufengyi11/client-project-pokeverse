import { useEffect, useState } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";


const ScreenSelector = () => {

    const [screen,setScreen] = useState(1);

    const screens = {

        screen1 : <Screen1 goToPage2_From1={() => handleButtonClick(2)} /> ,
        screen2: <Screen2 goToPage1_From2={() => handleButtonClick(1)} goToPage3_From2={() => handleButtonClick(3)} />,
        screen3 : <Screen3 goToPage2_From3={()=>handleButtonClick(2)} />


    }

    const handleButtonClick = (screenNumber) => {

        setScreen(screenNumber);

    }

    return(
        <>
        {screens[`screen${screen}`]}           
        </>
    )
}

export default ScreenSelector;