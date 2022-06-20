import { Component } from 'react';
import './App.css';
// import PokeDex from './containers/PokeDex';
import PokeDexDesktop from './containers/PokeDex-Desktop';
import PokeDexContainer from './containers/PokeDexContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 480px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 480px)").addEventListener('change', handler);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className='PageHeader'>PokeVerse</h1>
        </div>
        <div >
          {this.state.matches && (<PokeDexDesktop/>)}
          {!this.state.matches && (<PokeDexContainer/>)}
        </div>
        <div className='footer'>
          <p>CopyRight</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    );
  }
}

export default App;