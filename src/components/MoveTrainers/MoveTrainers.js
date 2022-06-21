import ButtonFunctions from "../ButtonFunctions"
import axios from "axios";
import { useEffect, useState } from "react";
import './MoveTrainers.css'
import GetAllTrainers from "../APIfunctions/GetAllTrainers";




const MoveTrainers = ({goToHomeScreen_FromMoveTrainersScreen,acceptChange}) => {
    
    const [trainers,setTrainers] = useState([])
    const[trainerID,setTrainerID] = useState("");

    

    const onYesClick = async (trainerID) => {

        const result = await GetAllTrainers();
        console.log(result[0])
    }



    return(
        <>
        <section className = "screen-container">
        <h1>Move Trainers</h1>
        <p className="find">Find a Trainer by ID:</p>
        <input
            type = "number"
            placeholder="Type ID "
            className = "id-input"
            onChange={(event)=>{setTrainerID(event.target.value)}}

        />
        <ButtonFunctions goToHomeScreen_FromMoveTrainersScreen={goToHomeScreen_FromMoveTrainersScreen} screen={"MoveTrainersScreen"}
                         acceptChange = {()=>{onYesClick(trainerID)}} />
        </section>
        </>
    )


}

export default MoveTrainers