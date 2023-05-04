import React from "react";
import SelfImg from "../assets/self-img.svg";
import { useSpring, animated } from "react-spring";
import { AiOutlineYoutube, AiOutlineGithub } from "react-icons/ai";

const Self = () => {
  const infoAnimation = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 500,
  });

  const imgAnimation = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 1000,
  });

  return (
    <section className="px-5 py-32 lg:py-48 bg-blue-50 text-blue-900">
      <div className="container mx-auto lg:flex lg:flex-row-reverse items-center justify-between">
        <animated.div style={imgAnimation} className="self-img w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={SelfImg} alt="coding illustration" className="w-full h-auto" />
        </animated.div>

        <animated.div style={infoAnimation} className="lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold leading-tight mb-6">
            Brady Steele
          </h1>

          <p className="text-lg md:text-xl mb-8">
            I am proficient in JavaScript, React.js, Tailwind CSS, Python, and more.
          </p>

          <div className="flex mb-8">
            <a
              href="https://www.youtube.com/@arcade_matt"
              className="pr-4 inline-block text-blue-700 hover:text-blue-800"
            >
              <AiOutlineYoutube size={24} />
            </a>
            <a
              href="https://github.com/BradySteele"
              className="pr-4 inline-block text-blue-700 hover:text-blue-800"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>

          <a
            href="/#projects"
            className="btn bg-blue-700 text-white px-6 py-3 hover:bg-white hover:text-blue-700 border-2 border-blue-700"
          >
            See Projects
          </a>
        </animated.div>
      </div>
    </section>
  );
};

export default Self;
