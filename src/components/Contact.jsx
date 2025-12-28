import React from "react";
import ImgHero from "../assets/imghero.png";

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen w-full overflow-x-hidden flex items-center justify-center px-4 py-12 relative"
    >
      <article className="w-full max-w-md sm:max-w-4xl overflow-hidden rounded-2xl shadow-lg flex flex-col md:flex-row relative">
        {/* IMAGE SIDE */}
        <aside className="w-full md:w-1/2 relative flex items-center justify-center p-6 sm:p-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(128,0,128,0.7)]" />
          </div>

          <img
            src={ImgHero}
            alt="Contact illustration"
            className="relative w-full max-w-[280px] sm:max-w-[380px] h-auto object-contain"
          />
        </aside>

        {/* FORM SIDE */}
        <section className="w-full md:w-1/2 p-6 sm:p-8">
          <header className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
