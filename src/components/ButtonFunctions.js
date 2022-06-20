import { useState } from "react"
import StartUpScreen from "./Screens/StartUpScreen"

const ButtonFunctions = (props) => {

    const [currentFunctions,setCurrentFunctions] = useState(<button  className='yesButton-invisible' onClick={props.goToDisplayPokemonScreen_FromHomeScreen}></button>)

    const goSomeWhere = (someWhere) => {

        return props[`goTo${someWhere}`]
    }



    

    const buttonFunctions =  {

        StartUpScreen : 
            {  }
        ,
        HomeScreen : {
            goTo_DisplayPokemonScreen : <button  className='yesButton-invisible' onClick={()=>{goSomeWhere(`DisplayPokemonScreen_FromHomeScreen`); setCurrentFunctions(buttonFunctions["DisplayPokemonScreen"]["goTo_HomeScreen"])}}></button>,
            goUp : () => {console.log("Clicked Up")},
            goDown: () => {console.log("Clicked Down")},
            goTo: <button className="yesButton-invisble" onClick={() => {console.log("Clicked Go To")}}></button>,
        },
        DisplayPokemonScreen : {
            goTo_HomeScreen : <button  className='noButton-invisible' ></button>,

        }


    }

    

    return(
        <>

        {currentFunctions}
        
        </>
    )





}

export default ButtonFunctions