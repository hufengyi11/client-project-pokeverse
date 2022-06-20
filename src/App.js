<<<<<<< HEAD
// import ScreenContainer from "./containers/ScreenContainer";
// import PokeDex from "./containers/PokeDex";

// function App() {

//   return (
//     <>
//     {/* <ScreenContainer/> */}
//     <PokeDex />
    
//     </>
//   );
// }

// export default App;


import { Component } from 'react';
import './App.css';
import PokeDexContainer from './containers/PokeDexContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
=======
import { Component } from 'react';
import './App.css';
import PokeDex from './containers/PokeDex';
import PokeDexDesktop from './containers/PokeDex-Desktop';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 480px)").matches };
>>>>>>> big-screen-css
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 480px)").addEventListener('change', handler);
  }

  render() {
    return (
      <div >
<<<<<<< HEAD
        {this.state.matches && (<h1>Big Screen</h1>)}
        {!this.state.matches && (<PokeDexContainer/>)}
=======
        {this.state.matches && (<PokeDexDesktop />)}
        {!this.state.matches && (<PokeDex/>)}
>>>>>>> big-screen-css
      </div>
    );
  }
}

export default App;