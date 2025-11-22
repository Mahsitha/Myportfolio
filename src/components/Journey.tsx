export default function Journey() {
  const steps = [
    {
      number: '1',
      title: 'Foundation Building',
      description: 'Started Computer Science studies, discovered passion for cloud infrastructure and automation technologies.',
    },
    {
      number: '2',
      title: 'Skill Development',
      description: 'Learning essential DevOps tools including Linux, Docker, Jenkins, and AWS cloud services.',
    },
    {
      number: '3',
      title: 'Hands-On Practice',
      description: 'Building real-world projects, contributing to GitHub, and developing portfolio to showcase practical skills.',
    },
    {
      number: '4',
      title: 'Future Goals',
      description: 'Exploring advanced DevOps practices to build scalable, automated, and secure systems for industry challenges.',
    },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          My DevOps Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-12 last:mb-0 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-gray-900 font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-amber-400 to-gray-700 mt-4"></div>
                )}
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
