import React from "react";
import Navbar from "./Navbar";
import HeroImage from "../assets/imghero.png"; 
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import Naila from "../assets/CV_Kreatif.pdf";

export default function Hero() {
  return (
    <div id="home" className="relative overflow-hidden min-h-[600px] flex flex-col items-center">
      {/* DIAMOND BACKGROUND */}
      <div
        className="absolute right-[-200px] top-20
        w-[700px] h-[700px]
        bg-gradient-to-br from-[#7f00ff] via-[#9e4cf5] to-[#ea52f7]
        opacity-40 blur-3xl rotate-45 rounded-3xl z-0"
      ></div>

      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center 
        w-full px-4 md:px-52 pb-4 md:pb-24 pt-32 z-10"
      >
        {/* TEXT */}
        <section
          className="flex-1 mr-0 md:mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-40 -top-5 -left-12"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_25px_rgba(200,100,255,0.7)]">
            Naila Aribah Zahra
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-[#c744ec] mb-2 drop-shadow-[0_0_25px_rgba(200,100,255,0.7)]">
            Developer
          </h2>

          <p className="text-lg text-gray-200 mb-6">
            Berikut beberapa project yang saya kerjakan, mulai dari desain UI hingga implementasi web yang responsif dan fungsional.
          </p>

          {/* ICONS */}
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://github.com/naila050509"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/naila-zahra-448602369/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              />
            </a>

            <a
              href="https://www.instagram.com/naii_d0.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
              />
            </a>
          </div>

          <a href={Naila} download>
            <button
              className="text-white border-2 py-2 px-6 rounded-full text-lg
              hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)]"
            >
              Download CV
            </button>
          </a>
        </section>

        {/* IMAGE */}
        <figure className="flex-1 flex justify-center md:justify-end mt-0">
          <img
            src={HeroImage}
            alt="Hero"
            data-aos="fade-up"
            data-aos-delay="400"
            className="h-[300px] sm:h-[400px] md:h-[350px] w-[250px] sm:w-[480px] 
            object-contain drop-shadow-[0_0_60px_rgba(200,100,255,0.9)]"
          />
        </figure>
      </main>
    </div>
  );
}
