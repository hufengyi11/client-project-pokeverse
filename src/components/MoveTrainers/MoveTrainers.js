import ButtonFunctions from "../ButtonFunctions"
import axios from "axios";
import { useEffect, useState } from "react";
import './MoveTrainers.css'
import GetAllTrainers from "../APIfunctions/GetAllTrainers";
import UK from "./uk.jpeg"
import X from "./X.jpeg"
import PutTrainer from "../APIfunctions/PutTrainer"





const MoveTrainers = ({goToHomeScreen_FromMoveTrainersScreen,acceptChange}) => {
    
    const [trainerName,setTrainerName] = useState([])
    const [trainerLocation,setTrainerLocation] = useState([])
    const[trainerID,setTrainerID] = useState("");
    const[horizontalScreenOption,setHorizontalScreenOption] = useState(1)
    let [screenOption,setScreenOption] = useState(1)

    

    const onYesClick = async (trainerID,screenOption) => {

        if(horizontalScreenOption===1){
            const result = await GetAllTrainers();
        console.log(result)
        
            setTrainerName(result[trainerID]["name"])
            setTrainerLocation(result[trainerID]["town"])
        

        }
        
        else if(horizontalScreenOption===2){
            console.log(trainerID)
            setTrainerLocation(locationOptionsRaw[`option${screenOption}`])
            PutTrainer(++trainerID,locationOptionsRaw[`option${screenOption}`])

        }

        
        
    }

    const goLeft = () => {
        if(horizontalScreenOption===1){
            setHorizontalScreenOption(2)
        }else if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
    }

    const goRight = () => {
        if(horizontalScreenOption===1){
            setHorizontalScreenOption(2)
        }else if(horizontalScreenOption===2){
            setHorizontalScreenOption(1)
        }
    }

    const goUp = () => {
        setScreenOption(--screenOption)
        if(screenOption<1){

            setScreenOption(6)
        }

    }

    const goDown = () => {
        setScreenOption(++screenOption)
        if(screenOption>6){
            setScreenOption(1)
        }
    }

    const locationOptionsRaw = {

        option1: 'London',
        option2: 'Hertfordshire',
        option3: 'Liverpool',
        option4: 'Manchester',
        option5: 'Glasgow',
        option6: 'Cardiff'


    }

    const locationOptions = {
        option1: <p className="optionMove">London</p>,
        option2: <p className="optionMove">Hertfordshire</p>,
        option3: <p className="optionMove">Liverpool</p>,
        option4: <p className="optionMove">Manchester</p>,
        option5: <p className="optionMove">Glasgow</p>,
        option6: <p className="optionMove">Cardiff</p>

    }

    const selectedLocationOptions = {
        option1: <p className="optionSelectedMove">London</p>,
        option2: <p className="optionSelectedMove">Hertfordshire</p>,
        option3: <p className="optionSelectedMove">Liverpool</p>,
        option4: <p className="optionSelectedMove">Manchester</p>,
        option5: <p className="optionSelectedMove">Glasgow</p>,
        option6: <p className="optionSelectedMove">Cardiff</p>

    }
    const selectOption = (screenOption) => {
        locationOptions[`option${screenOption}`] = selectedLocationOptions[`option${screenOption}`]
    }

    const ScreenSections = (horizontalScreenOption) => {

        if(horizontalScreenOption===1){
            return(
                <>
                    <input
                    type = "number"
                    placeholder="Type Trainer ID "
                    className = "id-input"
                    onChange={(event)=>{setTrainerID((event.target.value)-1)}}

                    />
                    <section className="trainer-name">Name: {trainerName}</section>
                    {/* <p className="town">Town:</p> */}
                    <section className="trainer-location">{trainerLocation}</section>
                    {locations[trainerLocation]}
                    <img src={UK} className="UK"/>
                    
                
                </>

            )
        }else if(horizontalScreenOption===2){
            return(
            <>
                <p>Move </p>
                {trainerName}
                <p> to:</p>
                {selectOption(screenOption)}
                {locationOptions["option1"]}
                {locationOptions["option2"]}
                {locationOptions["option3"]}
                {locationOptions["option4"]}
                {locationOptions["option5"]}
                {locationOptions["option6"]}



            
            </>
            )
        }

    }

    const locations = {

        London: <img src={X} className="X" style={{top: "217px", left: "124px"}}/>,
        Manchester: <img src={X} className="X" style={{top: "182px", left: "104px"}}/>,
        Liverpool: <img src={X} className="X" style={{top: "187px", left: "94px"}}/>,
        Hertfordshire: <img src={X} className="X" style={{top: "216px", left: "124px"}}/>,
        Glasgow: <img src={X} className="X" style={{top: "146px", left: "81px"}}/>,
        Cardiff: <img src={X} className="X" style={{top: "218px", left: "88px"}}/>




    }



    return(
        <>
        <section className = "screen-container">
        
        {/* <p className="find">Find  by ID:</p> */}
        {ScreenSections(horizontalScreenOption)}
        {/* <input
            type = "number"
            placeholder="Type Trainer ID "
            className = "id-input"
            onChange={(event)=>{setTrainerID(event.target.value)}}

        />
        <section className="trainer-name">Name: {trainerName}</section> */}
        {/* <p className="town">Town:</p> */}
        {/* <section className="trainer-location">{trainerLocation}</section>
        {locations[trainerLocation]}
        <img src={UK} className="UK"/> */}
        
        
        </section>
        <ButtonFunctions goToHomeScreen_FromMoveTrainersScreen={goToHomeScreen_FromMoveTrainersScreen} screen={"MoveTrainersScreen"}
                         acceptChange = {()=>{onYesClick(trainerID,screenOption)}} goLeft_DPad_moveTrainer = {()=>{goLeft()}}
                         goRight_DPad_moveTrainer = {()=>{goRight()}} 
                         goDown_DPad__moveTrainer = {()=>{goDown()}}
                         goUp_DPad_moveTrainer = {()=>{goUp()}}/>
        </>
    )


}

export default MoveTrainers