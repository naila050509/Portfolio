import React from "react";
import imghero from "../assets/imghero.png";
import vue from "../assets/vue.png";
import react from "../assets/icon_react.png";
import tailwind from "../assets/tailwindcss.png";
import laravel from "../assets/laravel.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import figma from "../assets/Figma.png";
import wordpress from "../assets/Wordpres.png";
import Kotlin from "../assets/kotlin.png";

const SkillsData = [
  {
    id: 1,
    src: Kotlin,
    title: "Kotlin",
    Description: "Bahasa modern untuk Android development, aman, ringkas, dan cepat.",
  },
  {
    id: 2,
    src: react,
    title: "React Js",
    Description: "Library JavaScript untuk membangun UI web yang interaktif dan reusable.",
  },
  {
    id: 3,
    src: tailwind,
    title: "Tailwindcss",
    Description: "Framework CSS berbasis utility untuk styling cepat dan konsisten.",
  },
  {
    id: 4,
    src: laravel,
    title: "Laravel",
    Description: "Framework PHP untuk backend web (MVC), routing, auth, dan database.",
  },
  {
    id: 5,
    src: html,
    title: "HTML",
    Description: "Struktur dasar halaman web untuk membangun konten dan layout.",
  },
  {
    id: 6,
    src: css,
    title: "CSS",
    Description: "Mengatur tampilan web: warna, layout, responsif, dan animasi.",
  },
  {
    id: 7,
    src: figma,
    title: "Figma",
    Description: "Tools UI/UX untuk wireframe, desain interface, dan prototyping.",
  },
  {
    id: 8,
    src: wordpress,
    title: "Wordpress",
    Description: "CMS untuk membuat dan mengelola website dengan tema dan plugin.",
  },
];


const SkillsBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-10 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Experise <br /> and{" "}
            <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 font-bold">
            Berikut adalah framework dan bahasa pemrograman yang digunakan dalam proyek-proyek yang saya kerjakan.
          </p>
        </header>

        {/* UBah section ini jadi div */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 mt-4"
        >
          {SkillsData.map((skill) => (
            <SkillsBox
              key={skill.id}
              image={skill.src}
              title={skill.title}
              description={skill.Description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
