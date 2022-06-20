import {useState} from 'react';
import ButtonFunctions from '../ButtonFunctions';


const HomeScreen = ({goToDisplayPokemonScreen_FromHomeScreen}) => {

    const [screenOption,setScreenOption] = useState(1);

    const options ={
        option1:"",
        option2: ""
    }

    // const currentlySelected = 1;

    return(
        <>
            <p>Home</p>
            <ButtonFunctions goToDisplayPokemonScreen_FromHomeScreen = {goToDisplayPokemonScreen_FromHomeScreen}/>
        </>
    )
}

export default HomeScreen;