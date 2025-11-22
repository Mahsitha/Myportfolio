import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          I'm always excited to connect with fellow tech enthusiasts, potential collaborators, and industry professionals. Whether you want to discuss DevOps practices, cloud technologies, or potential opportunities, I'd love to hear from you.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900 p-8 rounded-2xl border-2 border-amber-500 hover:scale-105 transition-all duration-300">
            <Mail className="text-amber-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
            <a
              href="mailto:ahti459@gmail.com"
              className="text-amber-400 hover:text-amber-300 text-lg transition-colors"
            >
              ahti459@gmail.com
            </a>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border-2 border-red-500 hover:scale-105 transition-all duration-300">
            <Linkedin className="text-red-400 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-white mb-3">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/lone-ahtisham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 text-lg transition-colors break-all"
            >
              linkedin.com/in/lone-ahtisham
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ahti459@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail className="mr-2" size={20} />
            Send Message
          </a>
          <a
            href="https://linkedin.com/in/lone-ahtisham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="mr-2" size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
