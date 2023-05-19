import React, { useState, useEffect } from 'react';
import './App.css';
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

  // useEffect(() => {
  //   // Simulate loading time
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 6500);
  // }, []);

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
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
