import { Zap, Puzzle, TrendingUp } from 'lucide-react';

export default function WhyDevOps() {
  const reasons = [
    {
      icon: <Zap size={40} />,
      title: 'Automation Passion',
      description: 'I love creating systems that work smarter, not harder, eliminating repetitive tasks and reducing human error.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: <Puzzle size={40} />,
      title: 'Problem Solving',
      description: 'DevOps combines technical challenges with real-world impact, making development teams more productive and efficient.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Continuous Learning',
      description: 'The field constantly evolves with new tools and practices, offering endless opportunities for growth and innovation.',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Why DevOps?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
