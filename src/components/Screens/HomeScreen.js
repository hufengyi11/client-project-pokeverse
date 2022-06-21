import {useState} from 'react';
import ButtonFunctions from '../ButtonFunctions';


const HomeScreen = ({goToDisplayPokemonScreen_FromHomeScreen}) => {

    const [screenOption,setScreenOption] = useState(1);

    

    const options ={
        option1:<p style = {{fontSize:10}}>Display All Pokemon</p>,
        option2: <p style = {{fontSize:10}}>Display All Pokemon</p>
    }

    // const currentlySelected = 1;

    return(
        <>
            <h1>Welcome</h1>
            <p>Select an option:</p>
            {options["option1"]}










            <ButtonFunctions goToDisplayPokemonScreen_FromHomeScreen = {goToDisplayPokemonScreen_FromHomeScreen} screen = {'HomeScreen'}/>
        </>
    )
}

export default HomeScreen;