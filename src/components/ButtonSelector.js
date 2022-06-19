import { useState } from "react";
import ButtonsContainer from "../containers/ButtonsContainer";

const ButtonSelector = () => {

    const [button, setButtons] = useState('Home');

    const buttons = {
        HomeButtons: <ButtonsContainer whatButtonsDo = {console.log("What home buttons should do")}></ButtonsContainer>,
        MainMenuButtons: <ButtonsContainer whatButtonDo = {console.log("What main menu buttons should do")}></ButtonsContainer>,
        HomeButtons: <div><button>Goes to </button></div>
    }

    return(
        <>
            {buttons[`${buttons}Buttons`]}

        </>
    )


}

export default ButtonSelector;