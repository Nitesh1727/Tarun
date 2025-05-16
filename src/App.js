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
        <div className="mb-8">
          <img
            src={process.env.PUBLIC_URL + "/tarun-profile.jpg"}
            alt="Tarun Tyagi"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = process.env.PUBLIC_URL + "/default-avatar.png";
            }}
          />
        </div>
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Tarun 👋</h2>
        <p className="max-w-xl mx-auto text-lg">
          Professional Pharmacist at Max Hospital, dedicated to healthcare
          excellence and patient care through pharmaceutical expertise.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-lg mb-4">
            I am a qualified pharmacist with a B.Pharma degree from KR Mangalam
            University. Currently serving at Max Hospital, I bring my expertise
            in pharmaceutical care and medication management to ensure optimal
            patient outcomes.
          </p>
          <p className="text-lg mb-4">
            My role involves medication dispensing, patient counseling, and
            collaborating with healthcare professionals to provide comprehensive
            pharmaceutical care.
          </p>
        </div>
      </section>

      {/* Projects/Experience Section */}
      <section id="projects" className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Professional Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold">Max Hospital</h4>
              <p className="mt-2">
                Working as a dedicated pharmacist, managing medication
                dispensing, inventory control, and patient counseling.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold">Healthcare Expertise</h4>
              <p className="mt-2">
                Specialized in pharmaceutical care, medication therapy
                management, and healthcare consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Phone: </span>
            <a href="tel:+919560459050" className="text-blue-600">
              +91 95604 59050
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email: </span>
            <a className="text-blue-600" href="mailto:tarun@example.com">
              tarun@example.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-sm">
        © {new Date().getFullYear()} Tarun Tyagi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
