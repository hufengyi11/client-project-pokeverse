import ButtonFunctions from "../ButtonFunctions"
import { useState, useEffect } from "react";
import axios from "axios";
import "./FindTrainerScreen.css"
import GetAllTrainers from "../APIfunctions/GetAllTrainers";
// import SearchList from "./SearchList";


// const [trainer, setTrainer] = useState([]);
const FindTrainersScreen = ({goToHomeScreen_FromFindTrainersScreen}) => {

    const [trainers, setTrainers] = useState([]);
    const [searchField, setSearchField] = useState([]);

    const filteredTrainer = trainers.filter(
        trainer => {
            return (
                trainer.name
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    }

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
                    type='number' />
                <input
                    className="submit_button"
                    type="submit"
                    value="FindTrainerById"
                />
            </form>
            <div className="container">
                <p>All trainers</p>
                <ul className="a">
                    {trainers.map(trainer =>
                        <li key={trainer.id}>{
                        `${trainer.name}\n${trainer.age}\n${trainer.town}`}</li>)}
                </ul>
            </div>

            <ButtonFunctions
                goToHomeScreen_FromFindTrainersScreen={goToHomeScreen_FromFindTrainersScreen}
                screen={'FindTrainersScreen'}
            />
        </div>

    )

}

export default FindTrainersScreen