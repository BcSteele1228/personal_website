import React, { useRef, useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import "./projects.css";
import "intersection-observer";

const Projects = () => {
  const projects = [
    {
      title: "Audio Chatbot",
      desc:
        "A text generation chatbot designed to accept user voice input, and provide a generated audio response.",
      code: "https://github.com/BradySteele/audio_chatbot",
    },
    {
      title: "Personal Website",
      desc:
        "A personal website designed as another mechanism to showcase my projects and experience.",
      code: "https://github.com/BradySteele/personal_website",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.75 }
    );
    const elements = document.querySelectorAll(".project-card");
    elements.forEach((element) => {
      observer.current.observe(element);
    });
    return () => observer.current.disconnect();
  }, []);

  const fadeInUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: {
      duration: 2500,
    },
  });

  return (
    <section className="px-5 py-32 lg:py-48 bg-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight border-b-4 border-gray-900 pb-2">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <animated.div
              className={`project-card rounded-md shadow-xl overflow-hidden bg-gray-900 hover:shadow-2xl transform hover:-translate-y-1 transition-all ease-out`}
              style={fadeInUp}
              key={i}
            >
              <div className="px-6 py-8">
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight text-gray-100">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-100">{project.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-8 flex justify-center">
                <a
                  href={project.code}
                  className="text-gray-100 hover:text-gray-200"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
