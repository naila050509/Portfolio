import React from "react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Website from "../assets/web.png";
import Wordpress1 from "../assets/SMP_BL.png";
import Wordpress2 from "../assets/SD_TIMOHO.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Priview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: Project1,
      title: "Website E-Commerce Nihon Nourish",
      description:
        "Website e-commerce untuk menampilkan produk, detail produk, dan alur pembelian dengan tampilan responsif.",
      link: "https://budiluhurdigital.com/project/10RPL/NihonNourish/index.php",
    },
    {
      image: Project2,
      title: "Website Direktori UMKM",
      description:
        "Platform direktori UMKM untuk menampilkan daftar usaha, informasi detail, dan navigasi kategori yang mudah digunakan.",
      link: "https://lomba-wia-britech-6m7f.vercel.app/",
    },
    {
      image: Project3,
      title: "Website Sejarah",
      description:
        "Website edukasi yang menyajikan informasi sejarah secara terstruktur, ringan, dan nyaman dibaca di berbagai perangkat.",
      link: "https://budiluhurdigital.com/project/10RPL/Web-Sejarah/Sejarah-K3",
    },
    {
      image: Wordpress1,
      title: "Website SMP Budi Luhur",
      description:
        "Website sekolah berbasis WordPress untuk publikasi informasi, berita, dan konten akademik dengan pengelolaan mudah.",
      link: "https://smp.sekolahbudiluhur.sch.id/",
    },
    {
      image: Wordpress2,
      title: "Website SD Timoho",
      description:
        "Website profil sekolah untuk menyampaikan informasi, pengumuman, dan dokumentasi kegiatan dengan desain rapi.",
      link: "https://sd.ceria.sch.id/",
    },
    {
      image: Website,
      title: "Website Kegiatan Guru",
      description:
        "Website untuk mendokumentasikan dan mengelola kegiatan guru, memudahkan pencatatan dan penyajian laporan aktivitas.",
      link: "#",
    },
];

  return (
    <main id="projects" className="p-4">
      <section data-aos='fade-up' data-aos-delay='300'>
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Berikut adalah framework dan bahasa pemrograman yang digunakan dalam proyek-proyek yang saya kerjakan.
          </p>
        </header>
      </section>
      <section
        data-aos='fade-up'
        data-aos-delay='500'
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((Projects, index) => (
          <ProjectCard
            key={index}
            image={Projects.image}
            title={Projects.title}
            description={Projects.description}
            link={Projects.link}
          />
        ))}
      </section>
    </main>
  );
}
