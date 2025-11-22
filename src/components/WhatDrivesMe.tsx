import { Rocket } from 'lucide-react';

export default function WhatDrivesMe() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What Drives Me
            </h2>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">Building the Future</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My goal is to build scalable, automated, and secure systems that solve real industry problems. I'm driven by the challenge of making development faster, more reliable, and more efficient through smart automation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every project is an opportunity to learn, grow, and contribute to the evolving world of cloud infrastructure and DevOps practices.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full animate-pulse opacity-20 absolute"></div>
              <Rocket className="text-amber-400 relative z-10" size={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
