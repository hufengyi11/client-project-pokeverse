import React from 'react';
import './AddNewTrainer.css'
import PostTrainer from '../APIfunctions/PostTrainer';
import ButtonFunctions from '../ButtonFunctions';
import axios from "axios";

const AddNewTrainerScreen = ({ goToHomeScreen_FromAddNewTrainerScreen, handleButtonClick }) => {

    const [trainerName, setTrainerName] = React.useState("");
    const [trainerAge, setTrainerAge] = React.useState(0);
    const [trainerTown, setTrainerTown] = React.useState("");

    const handleNameChange = event => setTrainerName(event.target.value);
    const handleAgeChange = event => setTrainerAge(event.target.value);
    const handleTownChange = event => setTrainerTown(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const trainer = {
            name: trainerName,
            age: trainerAge,
            town: trainerTown,
            pokemons: [],
            pokemonCount:0
        }
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/trainer',
        //     data: {
        //         "trainerName": trainerName,
        //         "trainerAge": trainerAge,
        //         "trainerTown": trainerTown
        //     }
        //   });
        axios.post('http://localhost:8080/trainer', { trainer })
            .then(res => {
                console.log(res);
            }).catch((err) => console.log(err));

        console.log("added");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>Add New Trainer</div>
                <div>Name:</div>
                <input
                    type="text"
                    className="add-new-trainer-name-input"
                    value={trainerName}
                    onChange={handleNameChange}
                />
                <div>Age:</div>
                <input
                    type="text"
                    className="add-new-trainer-age-input"
                    value={trainerAge}
                    onChange={handleAgeChange}
                />
                <div>Town:</div>
                <input
                    spellCheck="false"
                    type="text"
                    className="add-new-trainer-town-input"
                    value={trainerTown}
                    onChange={handleTownChange}
                />
                <input type="submit" className='submitButton' value="submit" />
            </form>
            <ButtonFunctions
                goToHomeScreen_FromAddNewTrainerScreen={goToHomeScreen_FromAddNewTrainerScreen}
                screen={'AddNewTrainerScreen'} />
        </>
    )

}


export default AddNewTrainerScreen;