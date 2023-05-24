import React, { useState } from 'react';
import './App.css';
import LoadingPage from './components/loadingPage';
import Space from './components/space';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage onComplete={handleLoadingComplete} />
      ) : (
        <>
          {isLoadingComplete ? (
            <Space />
          ) : (
            <LoadingPage onComplete={handleLoadingComplete} />
          )}
        </>
      )}
    </>
  );
}

export default App;
