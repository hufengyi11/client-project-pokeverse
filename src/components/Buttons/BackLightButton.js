import { useRef } from "react";
import * as ReactDOM from 'react-dom';
import PokeDexContainer from "../../containers/PokeDexContainer";

const BackLightButton = ({backLightToggle}) => {




    

    return(
        <>
        
        <button className='backlight-button' onClick={()=>{backLightToggle()}}></button>
        </>

    )



}

export default BackLightButton;