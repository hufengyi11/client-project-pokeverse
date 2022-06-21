import ButtonFunctions from "../ButtonFunctions"
import { useState, useEffect } from "react";
import axios from "axios";
import "./FindTrainerScreen.css"


const FindTrainersScreen = ({ goToFindTrainersScreen_FromRatePokemonScreen, goToRatePokemonScreen_FromFindTrainersScreen }) => {


    const [trainers, setTrainers] = useState([]);
    const [searchField, setSearchField] = useState("");

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
                <label htmlFor="name">Find trainer</label>
                <input
                    className="textbox"
                    type='number'
                    placeholder="type a number"
                    onChange={event => { setSearchField(event.target.value)}}
                   />
            </form>

            <div>
                {
                    trainers.filter((val) => {
                        if(searchField == ""){
                            return val
                        }else if (val.id == searchField){
                            return val
                        }
                    }).map((val, id) => {
                        return (
                            <div>
                                <p>{val.name}</p>
                            </div>
                        )
                    })
                }
            </div>

            <ButtonFunctions
                goToFindTrainersScreen_FromRatePokemonScreen={goToFindTrainersScreen_FromRatePokemonScreen}
                goToRatePokemonScreen_FromFindTrainersScreen={goToRatePokemonScreen_FromFindTrainersScreen}
                screen={'FindTrainersScreen'}
            />
        </div>

    )

}

export default FindTrainersScreen