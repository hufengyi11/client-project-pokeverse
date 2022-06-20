import { Component } from 'react';
import './App.css';
import PokeDex from './containers/PokeDex';
import PokeDexDesktop from './containers/PokeDex-Desktop';

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
      <div >
        {this.state.matches && (<PokeDexDesktop />)}
        {!this.state.matches && (<PokeDex/>)}
      </div>
    );
  }
}

export default App;