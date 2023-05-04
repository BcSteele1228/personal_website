import React from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { AiOutlineYoutube, AiOutlineGithub } from "react-icons/ai";
import "./self.css";
import MyLogo from "../assets/BS.svg";

const Self = () => {
  const infoAnimation = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 500,
    config: { duration: 2000 }
  });

  const about = "About Me";
  const aboutTrail = useTrail(about.length, {
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 1000,
    config: { duration: 2000 }
  });

  const intro =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const introTrail = useTrail(intro.length, {
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(0)" },
    delay: 0,
    config: { duration: 65, }
  });

  return (
    <section className="px-5 py-20 lg:py-32 bg-gray-200 text-gray-900">
      <div className="container mx-auto lg:flex items-center justify-between">
        <animated.div style={infoAnimation} className="lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold leading-tight mb-6">
            <img src={MyLogo} alt="Brady Steele" />
          </h1>

          <div className="flex mb-8">
            <a
              href="https://www.youtube.com/@arcade_matt"
              className="pr-4 inline-block text-gray-700 hover:text-gray-800"
            >
              <AiOutlineYoutube size={24} />
            </a>
            <a
              href="https://github.com/BradySteele"
              className="pr-4 inline-block text-gray-700 hover:text-gray-800"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>

          <a
            href="/#projects"
            className="btn bg-gray-700 text-white px-6 py-3 hover:bg-white hover:text-gray-700 border-2 border-gray-700"
          >
            See Projects
          </a>
        </animated.div>

        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight mb-6">
            {aboutTrail.map((props, index) => (
              <animated.span key={index} style={props}>
                {about[index]}
              </animated.span>
            ))}
          </h2>

          <p className="text-lg md:text-xl mb-8">
            {introTrail.map((props, index) => (
              <animated.span key={index} style={props}>
                {intro[index]}
              </animated.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Self;
