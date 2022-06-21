import {useState} from 'react';
import ButtonFunctions from '../ButtonFunctions';
import "./HomeScreen.css"
import Picka from './Picka_sit.jpeg'
import Picka_hi from './Picka_hi.jpeg'


const HomeScreen = ({goToDisplayPokemonScreen_FromHomeScreen,goToRatePokemonScreen_FromHomeScreen,
                     goToFindTrainersScreen_FromHomeScreen}) => {

    let [screenOption,setScreenOption] = useState(1);
    let [horizontalScreenOption,setHorizontalScreenOption] = useState(1);


    const goDown_DPad = () => {
        
        setScreenOption(++screenOption);
        
        if(screenOption>4){
            setScreenOption(1)
        }
       
    }

    const goUp_DPad = () => {

        setScreenOption(--screenOption);
        

        if(screenOption<1){

            setScreenOption(4)
        }
    
    }

    const goLeft_DPad= () => {
        if(horizontalScreenOption===1){
            setHorizontalScreenOption(2)
        }
        else if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
        
    }

    const goRight_DPad = () => {
        if(horizontalScreenOption===1){
            setHorizontalScreenOption(2)
        }
        else if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
    }

    const selectOptionPokemon = (screen) => {

            optionsPokemon[`option${screen}`] = selectOptionsPokemon[`option${screen}`]

    }

    const selectOptionTrainers = (screen) => {

        optionsTrainers[`option${screen}`] = selectOptionsTrainers[`option${screen}`]

}

    // const options ={
    //     option1: <p className= "option">Find Pokemon</p>,
                    
    //     option2:<p className= "option">Rate Pokemon</p>,
    //     option3: <p className= "option">Find Trainers</p>,
    //     option4: <p className= "option">Move Trainers</p>,
    //     option5: <p className= "option">Delete Pokemon</p>,
    //     option6: <p className= "option">Delete Trainers</p>,
    //     option7: <p className= "option">Catch New Pokemon</p>,
    //     option8: <p className= "option">Add a Trainer</p>

    // }

    // const selectedOptions ={

    //     option1: <p className= "option" style= {{color: "red"}}>Find Pokemon</p>,
    //     option2:<p className= "option" style= {{color: "red"}}>Rate Pokemon</p>,
    //     option3: <p className= "option" style= {{color: "red"}}>Find Trainers</p>,
    //     option4: <p className= "option" style= {{color: "red"}}>Move Trainers</p>,
    //     option5: <p className= "option" style= {{color: "red"}}>Delete Pokemon</p>,
    //     option6: <p className= "option" style= {{color: "red"}}>Delete Trainers</p>,
    //     option7: <p className= "option" style= {{color: "red"}}>Catch New Pokemon</p>,
    //     option8: <p className= "option" style= {{color: "red"}}>Add a Trainer</p>



    // }

    const optionsPokemon = {
        option1: <p className= "option">Find Pokemon</p>,
        option2:<p className= "option">Rate Pokemon</p>,
        option3: <p className= "option">Delete Pokemon</p>,
        option4: <p className= "option">Catch New Pokemon</p>

    }

    const optionsTrainers = {

        option1: <p className= "option">Find Trainers</p>,
        option2: <p className= "option">Move Trainers</p>,
        option3: <p className= "option">Delete Trainers</p>,
        option4: <p className= "option">Add a Trainer</p>

    }

    const selectOptionsPokemon = {

        option1: <p className= "optionSelected">Find Pokemon</p>,
        option2:<p className= "optionSelected">Rate Pokemon</p>,
        option3: <p className= "optionSelected">Delete Pokemon</p>,
        option4: <p className= "optionSelected">Catch New Pokemon</p>


    }

    const selectOptionsTrainers = {
        option1: <p className= "optionSelected">Find Trainers</p>,
        option2: <p className= "optionSelected">Move Trainers</p>,
        option3: <p className= "optionSelected">Delete Trainers</p>,
        option4: <p className= "optionSelected">Add a Trainer</p>

    }

   

    const screenDestinationsPokemon = {
         option1: goToDisplayPokemonScreen_FromHomeScreen,
         option2: goToRatePokemonScreen_FromHomeScreen,
        //  option3: goToFindTrainersScreen_FromHomeScreen
         
    }

    const screenDestinationsTrainers = {
        option1: goToFindTrainersScreen_FromHomeScreen,
        // option2: goToRatePokemonScreen_FromHomeScreen,
       //  option3: goToFindTrainersScreen_FromHomeScreen
        
   }

    const screenSections = (horizontalScreenOption) => {

        

        if(horizontalScreenOption===1){
            return(<>
            {optionsPokemon["option1"]}
            {optionsPokemon["option2"]}
            {optionsPokemon["option3"]}
            {optionsPokemon["option4"]}
                    </>)
        }else if (horizontalScreenOption===2) {
            return(<>
                    {optionsTrainers["option1"]}
                    {optionsTrainers["option2"]}
                    {optionsTrainers["option3"]}
                    {optionsTrainers["option4"]}
                   </>)
        }
    }

    

    const screenSelect = (horizontalScreenOption) => {

        if(horizontalScreenOption===1){
            return(screenDestinationsPokemon[`option${screenOption}`])
        }else if (horizontalScreenOption===2){
            return(screenDestinationsTrainers[`option${screenOption}`])
        }

        

    }


    return(
        <>
            <section className='ScreenContainer'>
            <h1>Welcome</h1>
            <p>Select an option:</p>
            {selectOptionPokemon(screenOption)}
            {selectOptionTrainers(screenOption)}
            <section className="optionsContainer">
                {screenSections(horizontalScreenOption)}
            </section>
            <img src={Picka} className ="Picka"/>
            
            {/* <p className="leftRight">Hit left or right on DPad</p> */}
            
            {/* {options["option1"]}
            {options["option2"]}
            {options["option3"]}
            {options["option4"]}
            {options["option5"]}
            {options["option6"]}
            {options["option7"]}
            {options["option8"]} */}
            </section>
            


            <ButtonFunctions goTo = {screenSelect(horizontalScreenOption)} screen = {'HomeScreen'}
                             goDown_DPad = {()=>{goDown_DPad()}}
                             goUp_DPad  ={()=>{goUp_DPad()}}
                             goRight_DPad = {()=>{goRight_DPad()}} 
                             goLeft_DPad = {()=>{goLeft_DPad()}} />
        </>
    )
}

export default HomeScreen;