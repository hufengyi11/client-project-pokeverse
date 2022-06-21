import {useState} from 'react';
import ButtonFunctions from '../ButtonFunctions';
import "./HomeScreen.css"


const HomeScreen = ({goToDisplayPokemonScreen_FromHomeScreen,goDown_DPad}) => {

    const [screenOption,setScreenOption] = useState(1);

    const selectOption = (goDown_DPad) => {

        if(goDown_DPad==null){
            
            options["option1"] = <p className= "option" style= {{color: "red"}}>Find Pokemon</p>
            


        }

        

        


    }

    const options ={
        option1: <p className= "option">Find Pokemon</p>,
                    
        option2:<p className= "option">Rate Pokemon</p>,
        option3: <p className= "option">Find Trainers</p>,
        option4: <p className= "option">Move Trainers</p>,
        option5: <p className= "option">Delete Pokemon</p>,
        option6: <p className= "option">Delete Trainers</p>

    }


    return(
        <>
            <h1>Welcome</h1>
            <p>Select an option:</p>
            {options["option1"]}
            {options["option1"]}
            


            <ButtonFunctions goToDisplayPokemonScreen_FromHomeScreen = {goToDisplayPokemonScreen_FromHomeScreen} screen = {'HomeScreen'}
                             goDown_DPad = {goDown_DPad}    />
        </>
    )
}

export default HomeScreen;