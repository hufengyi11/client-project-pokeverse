import React from 'react';
import './AddNewTrainer.css'
import PostTrainer from '../APIfunctions/PostTrainer';
import ButtonFunctions from '../ButtonFunctions';

const AddNewTrainer = () => {

    const [trainerName, setTrainerName] = React.useState("");
    const [trainerAge, setTrainerAge] = React.useState("");
    const [trainerTown, setTrainerTown] = React.useState("");




    return (
        <>
            <div className="add-new-trainer-container">
                <div className="add-new-trainer-title">Add New Trainer</div>
                <div className="add-new-trainer-name">Name:</div>
                <input 
                    spellCheck="false"
                    type="text" 
                    className="add-new-trainer-name-input" 
                    value={trainerName} 
                    onChange={(event) => setTrainerName(event.target.value)}
                />
                <div className="add-new-trainer-age">Age:</div>
                <input 
                    spellCheck="false"
                    type="text" 
                    className="add-new-trainer-age-input" 
                    value={trainerAge} 
                    onChange={(event) => setTrainerAge(event.target.value)}
                />
                <div className="add-new-trainer-town">Town:</div>
                <input 
                    spellCheck="false"
                    type="text" 
                    className="add-new-trainer-town-input" 
                    value={trainerTown} 
                    onChange={(event) => setTrainerTown(event.target.value)}
                />
            </div>
        </>
    )

}


export default AddNewTrainer;