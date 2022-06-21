import {useState} from 'react';
import ButtonFunctions from '../ButtonFunctions';
import "./HomeScreen.css"


const HomeScreen = ({goToDisplayPokemonScreen_FromHomeScreen,goToRatePokemonScreen_FromHomeScreen,
                     goToFindTrainersScreen_FromHomeScreen}) => {

    let [screenOption,setScreenOption] = useState(1);


    const goDown_DPad = () => {
        
        setScreenOption(++screenOption);
        
        if(screenOption>8){
            setScreenOption(1)
        }
       
    }

    const goUp_DPad = () => {

        setScreenOption(--screenOption);
        

        if(screenOption<1){

            setScreenOption(8)
        }
    
    }

    const selectOption = (screen) => {

            options[`option${screen}`] = selectedOptions[`option${screen}`]

    }

    const options ={
        option1: <p className= "option">Find Pokemon</p>,
                    
        option2:<p className= "option">Rate Pokemon</p>,
        option3: <p className= "option">Find Trainers</p>,
        option4: <p className= "option">Move Trainers</p>,
        option5: <p className= "option">Delete Pokemon</p>,
        option6: <p className= "option">Delete Trainers</p>,
        option7: <p className= "option">Catch New Pokemon</p>,
        option8: <p className= "option">Add a Trainer</p>

    }

    const selectedOptions ={

        option1: <p className= "option" style= {{color: "red"}}>Find Pokemon</p>,
        option2:<p className= "option" style= {{color: "red"}}>Rate Pokemon</p>,
        option3: <p className= "option" style= {{color: "red"}}>Find Trainers</p>,
        option4: <p className= "option" style= {{color: "red"}}>Move Trainers</p>,
        option5: <p className= "option" style= {{color: "red"}}>Delete Pokemon</p>,
        option6: <p className= "option" style= {{color: "red"}}>Delete Trainers</p>,
        option7: <p className= "option" style= {{color: "red"}}>Catch New Pokemon</p>,
        option8: <p className= "option" style= {{color: "red"}}>Add a Trainer</p>



    }

    const screenDestinations = {
         option1: goToDisplayPokemonScreen_FromHomeScreen,
         option2: goToRatePokemonScreen_FromHomeScreen,
         option3: goToFindTrainersScreen_FromHomeScreen
         

    }

    const screenSelect = () => {

        return(screenDestinations[`option${screenOption}`])

    }


    return(
        <>
            <section className='ScreenContainer'>
            <h1>Welcome</h1>
            <p>Select an option:</p>
            {selectOption(screenOption)}
            {options["option1"]}
            {options["option2"]}
            {options["option3"]}
            {options["option4"]}
            {options["option5"]}
            {options["option6"]}
            {options["option7"]}
            {options["option8"]}
            </section>
            


            <ButtonFunctions goTo = {screenSelect()} screen = {'HomeScreen'}
                             goDown_DPad = {()=>{goDown_DPad()}}
                             goUp_DPad  ={()=>{goUp_DPad()}}  />
        </>
    )
}

export default HomeScreen;