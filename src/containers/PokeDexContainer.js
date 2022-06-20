import "./pokedex.css";
import ButtonsContainer from "./ButtonsContainer";
import ScreenContainer from "./ScreenContainer";
import { useState } from "react";
import BackLightButton from "../components/Buttons/BackLightButton";

const PokeDexContainer = () => {

  const [screenBack, setScreenBack] = useState({backgroundColor: "black"});


  const backLightToggle = () => {
    if (screenBack.backgroundColor === "black") {
      setScreenBack({backgroundColor: "white"});
    }
    else {
      setScreenBack({backgroundColor: "black"});
    }
  }


  return (
    <section>
      <div className="shit-container">
        <div className="mainYellowContainer">
          <div>
            <div className="screen-border-top">
              <div style={screenBack} className="screen-border-top-opaque">
              </div>
            </div>
          </div>
          <div className="screen">
            <ScreenContainer/>
          </div>
          <div className="screenBorderBottomText">POK&Eacute;VERSE&trade;</div>

          <div className="screenBorderTopText">Team Rocket Edition</div>
          <ButtonsContainer/>
          <BackLightButton backLightToggle={backLightToggle}/>
        </div>
      </div>
    </section>
  );
};

export default PokeDexContainer;

