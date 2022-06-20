import "./pokedex.css";
import ButtonsContainer from "./ButtonsContainer";
import ScreenContainer from "./ScreenContainer";
import { useState } from "react";
import BackLightButton from "../components/Buttons/BackLightButton";

const PokeDexContainer = () => {

  const blackBoxShadow = "inset 0px 1px 15px 10px rgba(0, 0, 0, 0.5)";
  const whiteBoxShadow = "0px 1px 15px 4px rgba(255, 255, 255, 0.5)";

  const [screenBack, setScreenBack] = useState({backgroundColor: "black"});
  const [boxShadow,setBoxShadow] = useState({boxShadow: blackBoxShadow})


  const backLightToggle = () => {
    if (screenBack.backgroundColor === "black") {
      setScreenBack({backgroundColor: "white"});
      setBoxShadow({boxShadow: whiteBoxShadow});
    }
    else {
      setScreenBack({backgroundColor: "black"});
      setBoxShadow({boxShadow: blackBoxShadow});
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
          <div style={boxShadow} className="screen">
            <ScreenContainer/>
          </div>
          <div className="screenBorderBottomText">POK&Eacute;VERSE&trade;</div>
          <div className="screenBorderTopText">Team Rocket Edition</div>
          <ButtonsContainer/>
          <BackLightButton backLightToggle={backLightToggle}/>
          <div className="keyhole"></div>
          <div className="keychain"></div>
        </div>
      </div>
    </section>
  );
};

export default PokeDexContainer;

