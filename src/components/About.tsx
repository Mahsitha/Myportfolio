import { MapPin, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a DevOps Enthusiast and Computer Science student at CMR College of Engineering & Technology. I'm passionate about cloud infrastructure, automation, and building efficient CI/CD pipelines that make development faster and more reliable.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy working with tools like Linux, Git, Docker, Jenkins, and cloud platforms. I'm continuously learning and building real-world projects to strengthen my skills and grow as a future DevOps Engineer.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-colors">
              <div className="flex items-center mb-3">
                <MapPin className="text-amber-400 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-300">Hyderabad, Telangana, India</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-colors">
              <div className="flex items-center mb-3">
                <Target className="text-amber-400 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-white">Focus Areas</h3>
              </div>
              <p className="text-gray-300">Cloud Computing, Automation, CI/CD Pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
