import { Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Lone Ahtisham
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-delay leading-relaxed">
              B.Tech CSE Student | Aspiring DevOps Engineer | Learning Cloud, Linux, Docker & Automation Tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-2">
              <a
                href="mailto:ahti459@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/lone-ahtisham"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="mr-2" size={20} />
                View LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in-slide-up">
            <div className="relative group">
              <img
                src="/WhatsApp Image 2025-11-10 at 01.32.40_c83cea47.jpg"
                alt="Lone Ahtisham"
                className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
