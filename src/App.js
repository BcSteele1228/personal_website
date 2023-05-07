import './App.css';

import Header from './components/header';
import Self from './components/self';
import Projects from './components/projects';
import Terminal from './components/terminal';
import Cube from './components/cube';
import ThreeScene from './components/threeScene';
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <>
        {/* <Header /> */}
        {/* <Self /> */}
        {/* <Projects /> */}
        {/* <ThreeScene /> */}
        <Cube />
    </>
  );
}

export default App;
