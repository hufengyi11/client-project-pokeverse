import React from 'react';
import './AddNewTrainer.css'
import PostTrainer from '../APIfunctions/PostTrainer';
import ButtonFunctions from '../ButtonFunctions';
import axios from "axios";
import { useState} from 'react';

const AddNewTrainerScreen = ({ goToHomeScreen_FromAddNewTrainerScreen, handleButtonClick }) => {

    const [trainerName, setTrainerName] = useState("");
    const [trainerAge, setTrainerAge] = useState(0);
    const [trainerTown, setTrainerTown] = useState("");

    const handleNameChange = event => setTrainerName(event.target.value);
    const handleAgeChange = event => setTrainerAge(event.target.value);
    const handleTownChange = event => setTrainerTown(event.target.value);

    const toPostTrainer = async (trainer) => {
        const result = await PostTrainer(JSON.stringify(trainer))
        console.log(result)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const trainer = {
            name: trainerName,
            age: trainerAge,
            town: trainerTown,
            pokemons: [],
            pokemonCount:0
        }

        toPostTrainer(trainer);

        setTrainerAge(0);
        setTrainerName('');
        setTrainerTown('')

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/trainer',
        //     data: {
        //         "trainerName": trainerName,
        //         "trainerAge": trainerAge,
        //         "trainerTown": trainerTown
        //     }
        //   });
        // axios.post('http://localhost:8080/trainer', { trainer })
        //     .then(res => {
        //         console.log(res);
        //     }).catch((err) => console.log(err));
    }

    


    return (
        <>
            <div>Add New Trainer</div>
            <form>
                <label className="label">
                    Name:
                    <input
                        type="text"
                        onChange={handleNameChange}
                        className="label"
                        value={trainerName}
                    />
                </label>
                <label className="label">
                    Age:
                    <input
                        type="number"
                        onChange={handleAgeChange}
                        className="label"
                        value={trainerAge}
                    />
                </label>
                <label className="label">
                    Town:
                    <input
                        spellCheck="true"
                        type="text"
                        onChange={handleTownChange}
                        className="label"
                        value={trainerTown}
                    />
                    <label className="label">Press A to submit</label>
                    <button className="yesButton-invisible" onClick={(event) => handleFormSubmit(event)}>Sum</button>
                </label>
            </form>
            <ButtonFunctions
                goToHomeScreen_FromAddNewTrainerScreen={goToHomeScreen_FromAddNewTrainerScreen}
                screen={'AddNewTrainerScreen'} />
        </>
    )

}


export default AddNewTrainerScreen;