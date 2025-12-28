import React from "react";
import img_about from "../assets/img_about.png";
import img_about1 from "../assets/img_about1.png";
import img_about2 from "../assets/img_about2.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          {/* BACKGROUND SHAPE */}
          <div
            className="h-[200px] sm:h-[300px] w-[90%] max-w-[500px]
                      bg-gradient-to-r from-[#6d2897] via-[#6c95f5] to-[#bb61c5]
                      absolute rotate-12 z-0 right-0 -top-2 md:top-10 rounded-full"
          ></div>

          {/* SMALL TOP LEFT IMAGE */}
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 -translate-y-12 
               z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />

          {/* MAIN ROBOT IMAGE */}
          <img
            src={img_about2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 
               rounded-lg shadow-lg"
          />

          {/* BOTTOM RIGHT IMAGE */}
          <img
            src={img_about}
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 translate-y-12 
               z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Siswi SMK jurusan Rekayasa Perangkat Lunak dengan minat pada pengembangan website dan aplikasi. Menguasai HTML, CSS, JavaScript, PHP, Laravel, React JS, Kotlin, serta berpengalaman mengelola website sekolah berbasis WordPress.
          </p>
          <footer>
            <button className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg">
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
