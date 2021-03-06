import { useState } from "react"
import StartUpScreen from "./Screens/StartUpScreen"

const ButtonFunctions = (props) => {





    const screens = {

        HomeScreen: [
            {
                class: "yesButton-invisible",
                function: props.goTo
            },
            {
                class: "DPadVerticalTOP_invisible",
                function: props.goUp_DPad
            },
            {
                class: "DPadVerticalBOTTOM_invisible",
                function: props.goDown_DPad
            },
            {
                class: "DPadHorizontalLEFT_invisible",
                function: props.goLeft_DPad
            },
            {
                class: "DPadHorizontalRIGHT_invisible",
                function: props.goRight_DPad
            },
            
        ],
        DisplayPokemonScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromDisplayPokemonScreen
            },
            {
                class: 'yesButton-invisible',
                function: props.goToDisplayPokemonScreen_FromHomeScreen
            }
        ],
        SelectPokemonScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromSelectPokemonScreen
            }
        ],
        RatePokemonScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromRatePokemonScreen
            }
        ],
        FindTrainersScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromFindTrainersScreen
            },
            {
                class: 'yesButton-invisible',
                function: props.goToHomeScreen_FromFindTrainersScreen
            }
        ],
        MoveTrainersScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromMoveTrainersScreen
            },
            {
                class:'yesButton-invisible',
                function: props.acceptChange
            },
            {
                class: "DPadHorizontalLEFT_invisible",
                function: props.goLeft_DPad_moveTrainer
            },
            {
                class: "DPadHorizontalRIGHT_invisible",
                function: props.goRight_DPad_moveTrainer
            },
            {
                class: "DPadVerticalTOP_invisible",
                function: props.goUp_DPad_moveTrainer
            },
            {
                class: "DPadVerticalBOTTOM_invisible",
                function: props.goDown_DPad__moveTrainer
            }

        ],
        CatchNewPokemonScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen
            }
        ],
        AddNewTrainerScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromAddNewTrainerScreen
            }
        ],
        DeleteTrainersScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromDeleteTrainersScreen
            }
        ],
        DeletePokemonScreen: [
            {
                class: 'noButton-invisible',
                function: props.goToHomeScreen_FromDeletePokemonScreen
            }
        ],
        PokemonGameScreen: [
            {
                class: "yesButton-invisible",
                function: props.yesButtonGame
            },
            {
                class: "noButton-invisible",
                function: props.noButtonGame
            },
            {
                class: "DPadVerticalTOP_invisible",
                function: props.dPadUpGame
            },
            {
                class: "DPadVerticalBOTTOM_invisible",
                function: props.dPadDownGame
            },
            {
                class: "DPadHorizontalLEFT_invisible",
                function: props.dPadLeftGame
            },
            {
                class: "DPadHorizontalRIGHT_invisible",
                function: props.dPadRightGame
            }
        ]

    }



    return (
        <>
            {screens[props.screen].map((button, index) => {
                return <button className={button.class} onClick={button.function} key={index}></button>
            })}
        </>
    )





}

export default ButtonFunctions