import ButtonFunctions from "../ButtonFunctions"
import axios from "axios";
import { useEffect, useState } from "react";
import './MoveTrainers.css'
import GetAllTrainers from "../APIfunctions/GetAllTrainers";
import UK from "./uk.jpeg"
import X from "./X.jpeg"




const MoveTrainers = ({goToHomeScreen_FromMoveTrainersScreen,acceptChange}) => {
    
    const [trainerName,setTrainerName] = useState([])
    const [trainerLocation,setTrainerLocation] = useState([])
    const[trainerID,setTrainerID] = useState("");

    

    const onYesClick = async (trainerID) => {

        const result = await GetAllTrainers();
        console.log(result)
        if(trainerID<=3 && trainerID>=0){
            setTrainerName(result[trainerID]["name"])
            setTrainerLocation(result[trainerID]["town"])
        }else{
            setTrainerName("Trainer doesn't exist!")
        }
        
    }

    const locations = {

        London: <img src={X} className="X" style={{top: "229px", left: "124px"}}/>,
        Manchester: <img src={X} className="X" style={{top: "194px", left: "104px"}}/>,
        Liverpool: <img src={X} className="X" style={{top: "198px", left: "94px"}}/>,
        Hertfordshire: <img src={X} className="X" style={{top: "228px", left: "124px"}}/>,




    }



    return(
        <>
        <section className = "screen-container">
        
        {/* <p className="find">Find  by ID:</p> */}
        <input
            type = "number"
            placeholder="Type Trainer ID "
            className = "id-input"
            onChange={(event)=>{setTrainerID(event.target.value)}}

        />
        <section className="trainer-name">Name: {trainerName}</section>
        {/* <p className="town">Town:</p> */}
        <section className="trainer-location">{trainerLocation}</section>
        {locations[trainerLocation]}
        <img src={UK} className="UK"/>
        
        <ButtonFunctions goToHomeScreen_FromMoveTrainersScreen={goToHomeScreen_FromMoveTrainersScreen} screen={"MoveTrainersScreen"}
                         acceptChange = {()=>{onYesClick(trainerID)}} />
        </section>
        </>
    )


}

export default MoveTrainers