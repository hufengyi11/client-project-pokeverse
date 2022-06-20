import { useState } from "react"
import StartUpScreen from "./Screens/StartUpScreen"

const ButtonFunctions = (props) => {

    



    const screens =  {

        HomeScreen : [{class: "yesButton-invisible", function: props.goToDisplayPokemonScreen_FromHomeScreen}],
        DisplayPokemonScreen: [{class : 'noButton-invisible', function : props.goToHomeScreen_FromDisplayPokemonScreen},
                               {class:'yesButton-invisible', function: props.goToDisplayPokemonScreen_FromHomeScreen}]

    }

    

    return(
        <>

        

        {screens[props.screen].map((button, index) => {
            return <button className={button.class} onClick={button.function} key={index}></button>
        })}
        
        </>
    )





}

export default ButtonFunctions