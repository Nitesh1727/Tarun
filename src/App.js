import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="p-5 flex justify-between items-center bg-white shadow-md">
        <h1 className="text-xl font-bold">Tarun Tyagi</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Tarun 👋</h2>
        <p className="max-w-xl mx-auto text-lg">
          I'm passionate about blending technology and creativity to build
          impactful solutions. Here's a bit about me and what I do.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-lg mb-4">
            I am a dedicated professional with experience in both the technical
            and creative aspects of software development. I love bringing ideas
            to life through code and design.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold">Project 1</h4>
              <p className="mt-2">
                Description of the project, tech used, and the goal it achieved.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold">Project 2</h4>
              <p className="mt-2">
                Another interesting project with a short description.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-lg mb-6">
          Email me at{" "}
          <a className="text-blue-600" href="mailto:tarun@example.com">
            tarun@example.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-sm">
        © {new Date().getFullYear()} Tarun Tyagi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
