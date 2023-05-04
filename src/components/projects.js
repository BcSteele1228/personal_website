import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { useSpring, animated } from "react-spring";

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

  const cardAnimation = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 500,
  });

  return (
    <section className="px-5 py-32 lg:py-48 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight border-b-4 border-blue-400 pb-2">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <animated.div
              className="rounded-md shadow-xl overflow-hidden bg-blue-900 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out"
              style={cardAnimation}
              key={i}
            >
              <div className="px-6 py-8">
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight text-blue-100">
                    {project.title}
                  </h3>
                </div>
                <p className="text-blue-100">{project.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-8 flex justify-center">
                <a
                  href={project.code}
                  className="text-blue-100 hover:text-blue-200"
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
