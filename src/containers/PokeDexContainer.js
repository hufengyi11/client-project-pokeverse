import "./pokedex.css";
import ButtonsContainer from "./ButtonsContainer";
import ScreenContainer from "./ScreenContainer";

const PokeDexContainer = () => {
  return (
    <section>
      <div className="shit-container">
        <div className="mainYellowContainer">
          <div>
            <div className="screen-border-top">
              <div className="screen-border-top-opaque"></div>
            </div>
          </div>
          <div className="screen">
            <ScreenContainer/>
          </div>
          <div className="screenBorderBottomText">POK&Eacute;VERSE&trade;</div>

          <div className="screenBorderTopText">Team Rocket Edition</div>
          <ButtonsContainer/>
        </div>
      </div>
    </section>
  );
};

export default PokeDexContainer;

// .v8_2 {
//     width: 100vw;
//     height: 100vh;
//     /* background: url("../images/v8_2.png"); */
//     background-color: transparent;
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: cover;
//     opacity: 1;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//   }

// .v1_3 {
//     width: 428px;
//     height: 926px;
//     background: rgba(255, 255, 255, 1);
//     opacity: 1;
//     position: relative;
//     top: 0px;
//     left: 0px;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     overflow: hidden;
//   }
