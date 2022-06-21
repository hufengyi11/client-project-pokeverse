import ButtonFunctions from "../ButtonFunctions";


const DeleteTrainersScreen = ({ goToHomeScreen_FromDeleteTrainersScreen }) => {

    return (

        <>
            <form onSubmit={handleFormSubmit}>
                <div>Add New Trainer</div>
                <div>Name:</div>
                <input
                    type="text"
                    className="add-new-trainer-name-input"
                    value={trainerName}
                    onChange={(event) => setTrainerName(event.target.value)}
                />
                <div>Age:</div>
                <input
                    type="text"
                    className="add-new-trainer-age-input"
                    value={trainerAge}
                    onChange={(event) => setTrainerAge(event.target.value)}
                />
                <div>Town:</div>
                <input
                    spellCheck="false"
                    type="text"
                    className="add-new-trainer-town-input"
                    value={trainerTown}
                    onChange={(event) => setTrainerTown(event.target.value)}
                />
                <input type="submit" className='submitButton' value="submit"/>
            </form>

            <ButtonFunctions
                goToHomeScreen_FromDeleteTrainersScreen={goToHomeScreen_FromDeleteTrainersScreen}
                screen={'DeleteTrainersScreen'}
            />
        </>
    )
}

export default DeleteTrainersScreen;