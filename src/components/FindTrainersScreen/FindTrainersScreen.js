import ButtonFunctions from "../ButtonFunctions"
import { useState, useEffect } from "react";
import axios from "axios";
import "./FindTrainerScreen.css"
import AddNewTrainerScreen from "../AddNewTrainer/AddNewTrainer";
// import SearchList from "./SearchList";


// const [trainer, setTrainer] = useState([]);
const FindTrainersScreen = ({ goToHomeScreen_FromFindTrainersScreen }) => {

    const [trainers, setTrainers] = useState([]);
    const [searchField, setSearchField] = useState([]);

    const filteredTrainer = trainers.filter(
        trainer => {
            return (
                trainer.name
            );
        }
    );

    useEffect(() => {
        axios.get('http://localhost:8080/trainer')
            .then(res => {
                const trainers = res.data;
                setTrainers(trainers);
            }).catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <form className="container">
                <label htmlFor="name">Find trainer by ID</label>
                <input
                    className="textbox"
                    type='Number'
                    onChange={(event) => {
                        setSearchField(event.target.value)
                    }} />
            </form>
            <div className="container">
                <p>Search result</p>
                {trainers.filter((val) => {
                    if (searchField == "")
                       { return null}
                    else if (val.id == searchField) {
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
            </div>

            <ButtonFunctions
                goToHomeScreen_FromFindTrainersScreen={goToHomeScreen_FromFindTrainersScreen}
                screen={'FindTrainersScreen'}
            />
        </div>

    )

}

export default FindTrainersScreen