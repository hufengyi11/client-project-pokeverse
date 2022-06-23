import { useState, useEffect } from 'react';
import './App.css';
import PokeDexDesktop from './containers/PokeDex-Desktop';
import PokeDexContainer from './containers/PokeDexContainer';
const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, []);
  return (
    <>
      <h1 className='PageHeader'>PokeVerse</h1>
      {width >= 480 ? <PokeDexDesktop /> : <PokeDexContainer />}
      <div className='footer'>
        <p>CopyRight</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </>
  );
};
export default App;