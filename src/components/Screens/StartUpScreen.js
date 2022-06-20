import ButtonFunctions from "../ButtonFunctions";
const StartUpScreen = ({goToHomeScreen}) => {





    return(
        <>  
            <div className="test-logo">R</div>
            <div className="test-slogan">BLASTING OFF...</div>
            <div className="pokeverse-version">Pok&eacute;verse v1.0.3</div>
            <ButtonFunctions goToHomeScreen = {goToHomeScreen}/>

        </>

    )


}


export default StartUpScreen;