import { Cloud, Server, Infinity } from 'lucide-react';

export default function Competencies() {
  const competencies = [
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Computing',
      description: 'Building scalable infrastructure on cloud platforms with focus on automation and efficiency.',
      color: 'from-amber-500 to-amber-600',
      borderColor: 'border-amber-500',
    },
    {
      icon: <Server size={40} />,
      title: 'Amazon Web Services',
      description: 'Leveraging AWS services to deploy and manage cloud-based applications and infrastructure.',
      color: 'from-red-500 to-red-600',
      borderColor: 'border-red-500',
    },
    {
      icon: <Infinity size={40} />,
      title: 'DevOps Practices',
      description: 'Implementing continuous integration and deployment pipelines for faster, reliable software delivery.',
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-500',
    },
  ];

  return (
    <section id="competencies" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Core Competencies
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {competencies.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-2xl border-2 ${item.borderColor} hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
