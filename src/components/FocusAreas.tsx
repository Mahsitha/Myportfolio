import { Briefcase, Github, BookOpen } from 'lucide-react';

export default function FocusAreas() {
  const areas = [
    {
      icon: <Briefcase size={40} />,
      title: 'Portfolio Development',
      description: 'Creating comprehensive showcase of projects and technical capabilities.',
    },
    {
      icon: <Github size={40} />,
      title: 'GitHub Contributions',
      description: 'Building open-source projects and maintaining active development presence.',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Advanced Practices',
      description: 'Exploring cutting-edge DevOps methodologies and cloud technologies.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Current Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-8 rounded-xl border-t-4 border-amber-500 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="text-amber-400 mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
              <p className="text-gray-300 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
