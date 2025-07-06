import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "VR Based Phobia Therapy",
      category: "AI + Healthcare",
      description: "Immersive digital environments using spatial realism and precision to provide therapy for phobias using VR.",
      image: "/lovable-uploads/17a9c90d-ec6a-4218-922f-4dc5451f95b4.png",
      tags: ["VR", "AI", "Healthcare", "Therapy"]
    },
    {
      id: 2,
      title: "Cyber Intrusion Pattern Identifier",
      category: "Cybersecurity",
      description: "Advanced AI system for detecting and analyzing cyber intrusion patterns in real-time network traffic.",
      image: "/lovable-uploads/3f27905a-6e68-43c6-9c2b-d76500036ba4.png",
      tags: ["AI", "Cybersecurity", "Network", "Detection"]
    },
    {
      id: 3,
      title: "Quantum Neural Networks",
      category: "Quantum Computing",
      description: "Hybrid quantum-classical neural networks for solving complex optimization problems.",
      image: "/lovable-uploads/364e2889-b9af-4fcc-8218-05071af34fbe.png",
      tags: ["Quantum", "Neural Networks", "AI", "Computing"]
    },
    {
      id: 4,
      title: "Smart City IoT Framework",
      category: "IoT + Smart Systems",
      description: "Comprehensive IoT framework for smart city infrastructure management and optimization.",
      image: "/lovable-uploads/e3f1469f-69c1-4ccf-8d18-a1a78dfe23d3.png",
      tags: ["IoT", "Smart City", "Infrastructure", "Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="font-tech text-6xl font-bold mb-6 neon-text">
              FEATURED WORKS
            </h1>
            <p className="font-mono-tech text-xl text-muted-foreground max-w-4xl mx-auto">
              Pioneering projects bridging theoretical research and practical innovation. 
              Explore our cutting-edge solutions in AI, IoT, cybersecurity, and emerging technologies.
            </p>
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="neon-border rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-tech text-sm text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-tech text-2xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="font-mono-tech text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono-tech rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Domains Section */}
          <section className="mb-16">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-secondary neon-text">
              OUR DOMAINS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Electronics and IoT",
                  description: "Smart sensors, embedded systems, and connected device ecosystems",
                  skills: ["PCB Design", "Sensor Networks", "Edge Computing", "Wireless Protocols"]
                },
                {
                  title: "Cyber Forensics & Blockchain",
                  description: "Digital forensics, security analysis, and decentralized systems",
                  skills: ["Digital Forensics", "Blockchain Development", "Cryptography", "Security Auditing"]
                },
                {
                  title: "Game Development & Design",
                  description: "Interactive experiences, virtual worlds, and immersive gameplay",
                  skills: ["Unity/Unreal Engine", "3D Modeling", "Game Physics", "VR/AR Development"]
                },
                {
                  title: "Informatics",
                  description: "Data science, machine learning, and computational intelligence",
                  skills: ["Data Analytics", "ML Algorithms", "Cloud Computing", "Big Data Processing"]
                }
              ].map((domain, index) => (
                <div key={index} className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
                  <h3 className="font-tech text-xl font-bold mb-3 text-accent">
                    {domain.title}
                  </h3>
                  <p className="font-mono-tech text-muted-foreground mb-4">
                    {domain.description}
                  </p>
                  <div className="space-y-2">
                    {domain.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="font-mono-tech text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="font-tech text-3xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="font-mono-tech text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in building revolutionary solutions that bridge imagination and reality.
            </p>
            <Link 
              to="/join-us"
              className="inline-block neon-border px-8 py-4 bg-primary/10 text-primary font-tech font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
            >
              Join JARVIS
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Works;