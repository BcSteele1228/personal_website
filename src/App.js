import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Self from './components/self';
import Projects from './components/projects';
import Terminal from './components/terminal';
import Cube from './components/cube';
import ThreeScene from './components/threeScene';
import { Canvas } from '@react-three/fiber';
import LoadingPage from './components/loadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <Self />
          <Projects />
          {/* <ThreeScene /> */}
          {/* <Cube /> */}
        </>
      )}
    </>
  );
}

export default App;
