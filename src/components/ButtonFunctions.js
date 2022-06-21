import { useState } from "react"
import StartUpScreen from "./Screens/StartUpScreen"

const ButtonFunctions = (props) => {

    



    const screens =  {

        HomeScreen : [
            {
                class: "yesButton-invisible", 
                function: props.goToDisplayPokemonScreen_FromHomeScreen
            },
            {
                class: "DPadVerticalTOP_invisible",
                function: props.goUp_DPad
                

            },
            {
                class: "DPadVerticalBOTTOM_invisible",
                function: props.goDown_DPad
            }
        ],
        DisplayPokemonScreen: [
            {
                class : 'noButton-invisible', 
                function : props.goToHomeScreen_FromDisplayPokemonScreen
            },
            {
                class:'yesButton-invisible', 
                function: props.goToDisplayPokemonScreen_FromHomeScreen
            }
        ],
        SelectPokemonScreen: [
            {
                class : 'noButton-invisible', 
                function : props.goToHomeScreen_FromSelectPokemonScreen
            }
        ],
        RatePokemonScreen: [
            {
                class : 'noButton-invisible', 
                function : props.goToHomeScreen_FromRatePokemonScreen
            },
            {
                class: 'yesButton-invisible',
                function: props.goToFindTrainersScreen_FromRatePokemonScreen
            }
        ],
        FindTrainersScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToRatePokemonScreen_FromFindTrainersScreen
            }
        ]

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