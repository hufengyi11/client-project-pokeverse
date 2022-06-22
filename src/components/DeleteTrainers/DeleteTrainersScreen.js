import ButtonFunctions from "../ButtonFunctions";
import { useEffect, useState } from "react";
import axios from "axios";
import './DeleteTrainerScreen.css';


const DeleteTrainersScreen = ({ goToHomeScreen_FromDeleteTrainersScreen }) => {

    const [trainers, setTrainers] = useState([]);
    const [searchField, setSearchField] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/trainer')
            .then(res => {
                const trainers = res.data;
                setTrainers(trainers);
            }).catch((err) => console.log(err));
    }, [])
   
    function handleDeleteTrainer(e) {
        e.preventDefault();        
        axios.delete(`http://localhost:8080/trainer/${searchField}`)
        .then(res => {
            // const trainers = res.data;
            // setTrainers(trainers);
        }).catch((err) => console.log(err));
        setSearchField(0);
    }

    return (
        <>
            <p>Delete a trainer</p>
            <form>
                <label className="label">Type in an ID</label>
                <input
                    className="label"
                    type="number"
                    value={searchField}
                    onChange={(event) => { setSearchField(event.target.value) }}
                />
                <button className="yesButton-invisible" onClick={handleDeleteTrainer}></button>
            </form>

            {trainers.filter((val) => {
                if (val.id == searchField) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <>
                        <p>Name:{val.name}</p>
                        <p>Age: {val.age}</p>
                        <p>Location: {val.town}</p>
                    </>
                )
            })
            }

            <label>Press A to delete</label>

            <ButtonFunctions
                goToHomeScreen_FromDeleteTrainersScreen={goToHomeScreen_FromDeleteTrainersScreen}
                screen={'DeleteTrainersScreen'}
            />
        </>
    )
}

export default DeleteTrainersScreen;