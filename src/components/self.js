import React from "react";
import SelfImg from "../assets/self-img.svg";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

const Self = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            <br />Brady Steele <br />
            Software Engineer @ IBM
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, Tailwind CSS, Python etc
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/SteeleBrady"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@arcade_matt"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://github.com/BcSteele1228"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="self-img">
          <img
            src={SelfImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Self;