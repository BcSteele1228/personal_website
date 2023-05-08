import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Self from './components/self';
import Projects from './components/projects';
import Terminal from './components/terminal';
import Cube from './components/cube';
import { Canvas } from '@react-three/fiber';
import LoadingPage from './components/loadingPage';
import Transition from './components/transition';
import Space from './components/space';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage onComplete={handleLoadingComplete} />
      ) : (
        <>
          {isTransitioning ? (
            <Transition onComplete={handleTransitionComplete} />
          ) : (
            <>
            <Space />
              {/* <Header />
              <Self />
              <Projects /> */}
              {/* <ThreeScene /> */}
              {/* <Cube /> */}
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
