import ScreenSelector from "../components/Screens/ScreenSelector";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import BackLightButton from "../components/Buttons/BackLightButton";
import PokeDexContainer from "./PokeDexContainer";

import { useState } from "react";

const ScreenContainer = ({onClickHere}) => {

    const [screen,setScreen] = useState("");
    const [backLightButtonNull,setBackLightButtonNull] = useState("");
    
    

    



    return(
        <>
            <div className="screen-content-container">
            <button className='power-button' onClick={()=>{
                if(screen===""){

                    setScreen(<ScreenSelector/>)
                    setBackLightButtonNull("");
                    
                    

                }else if(screen!=""){
                    setScreen("")
                    setBackLightButtonNull(<button className='backlight-button__Null' ></button>)
                    
                }
                
                
                
                
                }}></button>
                {screen}
                {backLightButtonNull}
            </div>
        </>
    )


}

export default ScreenContainer