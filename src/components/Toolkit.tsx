import { Terminal, GitBranch, Container, Workflow } from 'lucide-react';

export default function Toolkit() {
  const tools = [
    {
      icon: <Terminal size={48} />,
      title: 'Linux',
      description: 'Strong foundation in Linux systems administration, shell scripting, and command-line operations for server management.',
      color: 'text-amber-400',
    },
    {
      icon: <GitBranch size={48} />,
      title: 'Git',
      description: 'Version control expertise for collaborative development, code management, and maintaining project history.',
      color: 'text-amber-400',
    },
    {
      icon: <Container size={48} />,
      title: 'Docker',
      description: 'Containerization skills for creating portable, consistent development and production environments.',
      color: 'text-amber-400',
    },
    {
      icon: <Workflow size={48} />,
      title: 'Jenkins',
      description: 'Building automated CI/CD pipelines to streamline testing, integration, and deployment processes.',
      color: 'text-amber-400',
    },
  ];

  return (
    <section id="toolkit" className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Technical Toolkit
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`${tool.color} mb-4`}>{tool.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
