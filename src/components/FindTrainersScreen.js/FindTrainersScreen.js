import ButtonFunctions from "../ButtonFunctions"
import { useState } from "react";
import "./FindTrainerScreen.css"
import GetAllTrainers from "../APIfunctions/GetAllTrainers";


// const [trainer, setTrainer] = useState([]);
const FindTrainersScreen = ({ goToFindTrainersScreen_FromRatePokemonScreen, goToRatePokemonScreen_FromFindTrainersScreen }) => {


    const [trainers, setTrainres] = useState([]);
    const handleChange = e => {

    }
    
    return (
        <>


            <form>
                <label htmlFor="name">Find trainer by ID</label>
                <input type='text' />
                <input 
                className="submit_button" 
                type="submit"
                value="FindTrainerById"
                onChange = {handleChange}/>
            </form>


            <ButtonFunctions
                goToFindTrainersScreen_FromRatePokemonScreen={goToFindTrainersScreen_FromRatePokemonScreen}
                goToRatePokemonScreen_FromFindTrainersScreen={goToRatePokemonScreen_FromFindTrainersScreen}
                screen={'FindTrainersScreen'}
            />
        </>

    )

}

export default FindTrainersScreen