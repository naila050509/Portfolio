import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSmartphone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      data-aos="fade-down"
      data-aos-delay="200"
      className="bg-[#12151C] text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <span className="bg-[#cd3cf5] p-3 rounded-xl">N</span>
            Portfolio
          </h1>
          <p className="text-gray-400 mt-3">
            Kumpulan project website dan aplikasi yang saya kerjakan selama belajar
            Rekayasa Perangkat Lunak.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        {/* Link Cepat */}
        <div>
          <h2 className="text-xl font-bold mb-4">Link Cepat</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-orange-400 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-orange-400 cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-400 cursor-pointer"
              >
                My Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-400 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <FiMail /> zahranaila338@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FiSmartphone /> 0882-8973-4711
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin /> Tangerang, Indonesia
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300 mb-4">
              Tertarik bekerja sama atau ingin mengetahui lebih lanjut tentang saya?
              Silakan hubungi melalui email.
            </p>

          <input
            type="email"
            placeholder="Email Anda"
            className="w-full bg-[#1c222b] border border-gray-600 p-3 rounded-xl focus:outline-none"
          />

          <button className="w-full bg-[#cd3cf5] hover:bg-purple-600 mt-4 p-3 rounded-xl font-bold">
            Kirim Pesan
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© 2025 Naila Aribah Zahra · Portfolio Rekayasa Perangkat Lunak</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="hover:text-[#cd3cf5] cursor-pointer">
            Kebijakan Privasi
          </p>
          <p className="hover:text-[#cd3cf5] cursor-pointer">
            Syarat & Ketentuan
          </p>
          <p className="hover:text-[#cd3cf5] cursor-pointer">Bantuan</p>
        </div>
      </div>
    </footer>
  );
}
