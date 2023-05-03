import React from "react";
import SelfImg from "../assets/self-img.svg";

import { AiOutlineYoutube, AiOutlineGithub } from "react-icons/ai";

const Self = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Brady Steele <br />
            <span className="text-accent">Software Engineer @ IBM</span>
          </h1>

          <p className="py-5 text-xl md:text-2xl">
            I am proficient in JavaScript, React.js, Tailwind CSS, Python, and more.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.youtube.com/@arcade_matt"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://github.com/BradySteele"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className="btn bg-accent border-2 border-white text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="self-img">
          <img
            src={SelfImg}
            alt="coding illustration"
            className="lg:w-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Self;
