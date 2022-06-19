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
import PokeDex from './containers/PokeDex';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 480px)").addEventListener('change', handler);
  }

  render() {
    return (
      <div >
        {this.state.matches && (<h1>Big Screen</h1>)}
        {!this.state.matches && (<PokeDex/>)}
      </div>
    );
  }
}

export default App;