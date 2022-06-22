import ButtonFunctions from "../ButtonFunctions";
import './StartUpScreen.css';

const StartUpScreen = ({goToHomeScreen}) => {
    
    

    return(
        <>  
            <div className="start-up-container">
                <div className="test-logo">R</div>
                <div className="test-slogan">BLASTING OFF...</div>
                <div className="pokeverse-version">Pok&eacute;verse v1.0.3</div>
                
            </div>
        </>
    )

}


export default StartUpScreen;