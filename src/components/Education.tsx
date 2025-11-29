import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'CMR College of Engineering & Technology',
      degree: 'Bachelor of Technology - BTech',
      field: 'Computer Science Engineering',
      period: 'September 2023 - April 2026',
      color: 'border-amber-500',
    },
    {
      institution: 'KGP SRINAGAR',
      degree: 'Diploma',
      field: 'Computer Science Engineering',
      period: '',
      color: 'border-blue-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Education Background
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-2xl border-2 ${edu.color} hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <GraduationCap className="text-amber-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">{edu.institution}</h3>
              <p className="text-amber-400 font-semibold mb-2">{edu.degree}</p>
              <p className="text-gray-300 mb-2">{edu.field}</p>
              {edu.period && <p className="text-gray-400 text-sm">{edu.period}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
