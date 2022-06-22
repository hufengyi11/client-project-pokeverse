import ButtonFunctions from "../ButtonFunctions";
import { useEffect, useState } from "react";
import axios from "axios";


const DeleteTrainersScreen = ({ goToHomeScreen_FromDeleteTrainersScreen }) => {

    const [trainers, setTrainers] = useState([]);
    const [searchField, setSearchField] = useState([]);

    useEffect(() => {
        axios.delete('http://localhost:8080/trainer')
            .then(res => {
                const trainers = res.data;
                setTrainers(trainers);
            }).catch((err) => console.log(err));
    }, [])

    function handleDeleteTrainer() {
        console.log("begin")
        // const newTrainers = trainers.filter(trainer => trainer.id !== searchField)
        // setTrainers(newTrainers)
    }

    return (
        <>
            <p>Delete a trainer</p>
            <form>
                <label>Type in an ID</label>
                <input
                    className="label"
                    type="number"
                    onChange={(event) => { setSearchField(event.target.value) }}
                />
                <button className="yesButton-invisible" onClick={handleDeleteTrainer}></button>
            </form>

            <ButtonFunctions
                goToHomeScreen_FromDeleteTrainersScreen={goToHomeScreen_FromDeleteTrainersScreen}
                screen={'DeleteTrainersScreen'}
            />
        </>
    )
}

export default DeleteTrainersScreen;