import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import './projects.css';

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

  return (
    <section className="bg-gray-100" id="projects">
      <div className="container mx-auto px-5 py-12">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-4xl font-bold border-b-4 border-blue-600 pb-2">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              className="relative rounded-md shadow-xl overflow-hidden bg-white hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out"
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <div className="px-6 py-8">
                <div className="mb-4">
                  <div className="text-xl font-bold">{project.title}</div>
                </div>
                <p className="text-gray-700">{project.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-8 flex justify-center">
                <a
                  href={project.code}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <AiOutlineGithub size={40} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
