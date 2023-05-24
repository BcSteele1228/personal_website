import React, { useState, useEffect, useRef } from 'react';
import asteroidsVideo from '../assets/asteroids.mp4';
import transitionVideo from '../assets/transition.mp4';
import Space from './space';

function LoadingPage({ onComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [transitionStarted, setTransitionStarted] = useState(false);
  const [transitionEnded, setTransitionEnded] = useState(false);
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(true);
  const transitionVideoRef = useRef(null);
  const asteroidsVideoRef = useRef(null);
  const [showAsteroidsVideo, setShowAsteroidsVideo] = useState(true);
  const [showSpace, setShowSpace] = useState(false);

  useEffect(() => {
    let interval;
    let progress = 0;

    const updateProgress = () => {
      progress += 0.006;
      setProgress(progress);

      if (progress >= 1) {
        clearInterval(interval);
        setLoading(false);
      }

      // Update loading message based on progress
      if (progress < 0.25) {
        setMessage('Preparing visuals...');
      } else if (progress >= 0.25 && progress < 0.50) {
        setMessage('Setting up environment...');
      } else if (progress > 0.50 && progress < 1) {
        setMessage("Loading Brady's Portfolio...");
      } else {
        setMessage('');
      }
    };

    interval = setInterval(updateProgress, 39);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTransitionStart = () => {
    setTransitionStarted(true);
    setShowButton(false);
    setShowAsteroidsVideo(false);
  };

  const handleTransitionEnd = () => {
    setTransitionStarted(false);
    setTransitionEnded(true);
    onComplete();
  };

  useEffect(() => {
    if (transitionStarted && asteroidsVideoRef.current) {
      asteroidsVideoRef.current.pause();
      transitionVideoRef.current.play();
    }
  }, [transitionStarted]);

  useEffect(() => {
    if (transitionEnded) {
      setShowSpace(true);
    }
  }, [transitionEnded]);

  return (
    <>
      {!transitionStarted && (
        <>
          <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
              <p className="text-lg mt-4 text-white">{message}</p>
              {loading && (
                <>
                  <div className="w-1/4 h-2 bg-gray-200 mt-4 rounded-full">
                    <div
                      className="h-2 bg-pink-400 rounded-full"
                      style={{ width: `${progress * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-white mt-2">
                    {Math.round(progress * 100)}%
                  </div>
                </>
              )}
              {!loading && progress >= 1 && showButton && (
                <button
                  onClick={handleTransitionStart}
                  className="transition-button bg-pink-400 rounded-lg px-4 py-2 mt-2 text-white shadow-lg hover:bg-pink-500"
                >
                  Start Transition
                </button>
              )}
            </div>
          </div>
          {!transitionStarted && showAsteroidsVideo && (
            <video
              ref={asteroidsVideoRef}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
              src={asteroidsVideo}
              autoPlay
              loop
              muted
            ></video>
          )}
        </>
      )}
      {transitionStarted && (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <video
            ref={transitionVideoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={transitionVideo}
            autoPlay
            muted
            onEnded={handleTransitionEnd}
          ></video>
        </div>
      )}
      {showSpace && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Space />
        </div>
      )}
    </>
  );   
}

export default LoadingPage;
