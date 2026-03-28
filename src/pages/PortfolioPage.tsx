import React, { useRef } from "react";

const PortfolioPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const container = mainRef.current;

    if (el && container) {
      container.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-[280px] bg-[#1a1a1a] p-6 flex md:flex-col flex-row items-center justify-between md:justify-start">
        <div className="flex items-center md:flex-col gap-4">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gray-700 flex items-center justify-center">
            👨‍💻
          </div>
          <div className="text-left md:text-center">
            <h2 className="text-lg font-semibold">Aaditya Gautam</h2>
            <p className="text-sm text-gray-400">Full Stack Developer | AI Enthusiast</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={mainRef}
        className="flex-1 h-full overflow-y-auto px-6 md:p-10 scroll-smooth"
      >
        {/* Navbar */}
        <div className="flex justify-end gap-6 mb-10 text-gray-400 sticky top-0 bg-[#0f0f0f] py-4 z-10">
          {[
            ["About", "about"],
            ["Resume", "resume"],
            ["Portfolio", "portfolio"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-yellow-400"
            >
              {label}
            </button>
          ))}
        </div>

        {/* About */}
        <section id="about" className="mb-20">
          <h1 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">
            About Me
          </h1>

          <div className="space-y-6 text-gray-400 leading-7">
            <p>
              Hey there! I am a passionate Computer Science undergraduate specializing in Web Development and AI integration, with hands-on experience in building secure, scalable web applications.
            </p>
            <p>
              I'm currently pursuing my B.Tech in Computer Science Engineering (Core) at SRM University, Sonipat (2nd Year Ongoing).
            </p>
            <p>
              I have strong skills in Python, full-stack development, and foundational machine learning concepts. I enjoy solving real-world problems and building meaningful digital products.
            </p>
            <p>
              My interests include AI-powered web apps, backend system design, privacy-focused software, and scalable architectures. I have also worked with HLS streaming and AI integrations.
            </p>
          </div>
        </section>

        {/* Resume / Skills */}
        <section id="resume" className="mb-20">
          <h1 className="text-2xl font-semibold mb-6">Technical Skills</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Programming",
                items: ["Python (Advanced)", "JavaScript"],
              },
              {
                title: "Web Development",
                items: ["React.js", "Node.js", "Express.js", "REST APIs", "Full Stack"],
              },
              {
                title: "Databases",
                items: ["PostgreSQL"],
              },
              {
                title: "Security",
                items: ["Passport.js", "Sessions", "Hashing", "Secure Auth"],
              },
              {
                title: "AI / ML",
                items: ["Classification", "Regression", "GenAI Basics"],
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "API Integration"],
              },
            ].map((skill, i) => (
              <div key={i} className="bg-[#1a1a1a] p-5 rounded-xl">
                <h2 className="text-yellow-400 mb-2">{skill.title}</h2>
                <ul className="text-sm text-gray-400 space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mb-20">
          <h1 className="text-2xl font-semibold mb-6">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "E-Commerce Website",
                desc: "Full-stack app with PostgreSQL, Express, React, Node. Secure auth and scalable design.",
              },
              {
                title: "Privacy Chat App",
                desc: "Messages hashed before DB storage. Focused on security and privacy.",
              },
              {
                title: "HLS Streaming App",
                desc: "Adaptive video streaming with performance optimization.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-[#1a1a1a] p-5 rounded-xl">
                <h3 className="text-yellow-400 mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-50">
          <h1 className="text-2xl font-semibold mb-4">Contact</h1>
          <div className="text-gray-400 space-y-2 " >
            <p>Email: codeuntillive@gmail.com</p>
            <p>GitHub: github.com/codeuntillive</p>
            <p>Location: Sonipat, India</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;