import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const JoinUs = () => {
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    domain: '',
    experience: '',
    motivation: '',
    portfolio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const domains = [
    {
      name: "Artificial Intelligence & Machine Learning",
      description: "Work on neural networks, deep learning, computer vision, and NLP projects",
      skills: ["Python", "TensorFlow/PyTorch", "Data Science", "Research"]
    },
    {
      name: "Internet of Things & Electronics",
      description: "Design smart systems, embedded devices, and sensor networks",
      skills: ["Arduino/Raspberry Pi", "PCB Design", "Sensor Integration", "Embedded C"]
    },
    {
      name: "Cybersecurity & Blockchain",
      description: "Develop secure systems, blockchain applications, and digital forensics tools",
      skills: ["Cryptography", "Network Security", "Solidity", "Penetration Testing"]
    },
    {
      name: "Web & Mobile Development",
      description: "Create user-friendly applications and digital experiences",
      skills: ["React/React Native", "Node.js", "Database Design", "UI/UX Design"]
    },
    {
      name: "Research & Publications",
      description: "Conduct cutting-edge research and publish in top-tier conferences",
      skills: ["Technical Writing", "Literature Review", "Experimental Design", "Data Analysis"]
    },
    {
      name: "Game Development & VR/AR",
      description: "Build immersive experiences and interactive applications",
      skills: ["Unity/Unreal", "3D Modeling", "Game Physics", "VR/AR SDKs"]
    }
  ];

  const benefits = [
    "Work on cutting-edge research projects",
    "Collaborate with industry partners",
    "Publish papers in international conferences",
    "Access to state-of-the-art equipment and software",
    "Mentorship from faculty and senior students",
    "Networking opportunities with tech leaders",
    "Internship and job placement assistance",
    "Travel funding for conferences and competitions"
  ];

  const process = [
    {
      step: "1",
      title: "Application",
      description: "Submit your application with portfolio and motivation"
    },
    {
      step: "2", 
      title: "Technical Assessment",
      description: "Demonstrate your skills through project-based evaluation"
    },
    {
      step: "3",
      title: "Interview",
      description: "Discussion with domain experts and current members"
    },
    {
      step: "4",
      title: "Onboarding",
      description: "Welcome to JARVIS! Begin your journey with orientation"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="font-tech text-6xl font-bold mb-6 neon-text">
              TURNING IMAGINATION
            </h1>
            <h2 className="font-tech text-4xl font-bold mb-8 text-secondary">
              INTO REALITY
            </h2>
            <p className="font-mono-tech text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Join a community of innovators, researchers, and builders who are shaping the future 
              of technology. Be part of something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="neon-border px-8 py-4 bg-primary/10 text-primary font-tech font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
              <Link 
                to="/contact"
                className="neon-border px-8 py-4 bg-secondary/10 text-secondary font-tech font-bold uppercase tracking-wider hover:bg-secondary hover:text-background transition-all duration-300 hover:scale-105"
              >
                Ask Questions
              </Link>
            </div>
          </section>

          {/* Why Join JARVIS */}
          <section className="mb-20">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-accent neon-text">
              Why Join JARVIS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="font-mono-tech text-sm">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Domains */}
          <section className="mb-20">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-primary neon-text">
              Choose Your Domain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domains.map((domain, index) => (
                <div key={index} className="neon-border p-6 rounded-lg bg-card/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <h3 className="font-tech text-lg font-bold mb-3 text-secondary">
                    {domain.name}
                  </h3>
                  <p className="font-mono-tech text-muted-foreground mb-4 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-mono-tech text-xs text-accent font-bold uppercase tracking-wider">
                      Key Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono-tech rounded border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Process */}
          <section className="mb-20">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-secondary neon-text">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 font-tech font-bold text-background">
                      {item.step}
                    </div>
                    <h3 className="font-tech text-lg font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-mono-tech text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-0.5 bg-primary"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section id="application" className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-tech text-4xl font-bold text-center mb-12 text-accent neon-text">
                Apply to JARVIS
              </h2>
              <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono-tech text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={applicationData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono-tech text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={applicationData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                        placeholder="your.email@smail.iitm.ac.in"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-mono-tech text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono-tech text-sm font-medium mb-2">
                        Year of Study *
                      </label>
                      <select
                        name="year"
                        value={applicationData.year}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                      >
                        <option value="">Select Year</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                        <option value="mtech">M.Tech</option>
                        <option value="phd">Ph.D</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block font-mono-tech text-sm font-medium mb-2">
                        Branch *
                      </label>
                      <input
                        type="text"
                        name="branch"
                        value={applicationData.branch}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                        placeholder="e.g., CSE, EE, ME"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-sm font-medium mb-2">
                      Preferred Domain *
                    </label>
                    <select
                      name="domain"
                      value={applicationData.domain}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                    >
                      <option value="">Select Domain</option>
                      {domains.map((domain) => (
                        <option key={domain.name} value={domain.name}>
                          {domain.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-sm font-medium mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech resize-none"
                      placeholder="Describe your relevant projects, internships, or technical experience..."
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-sm font-medium mb-2">
                      Why do you want to join JARVIS? *
                    </label>
                    <textarea
                      name="motivation"
                      value={applicationData.motivation}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech resize-none"
                      placeholder="Tell us about your motivation, goals, and what you hope to contribute..."
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-sm font-medium mb-2">
                      Portfolio/GitHub Link
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={applicationData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                      placeholder="https://github.com/yourprofile or portfolio website"
                    />
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="neon-border px-12 py-4 bg-primary/10 text-primary font-tech font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-16">
            <h2 className="font-tech text-3xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="font-mono-tech text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help! Reach out if you need clarification about the application process or have any questions about JARVIS.
            </p>
            <Link 
              to="/contact"
              className="inline-block neon-border px-8 py-4 bg-secondary/10 text-secondary font-tech font-bold uppercase tracking-wider hover:bg-secondary hover:text-background transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default JoinUs;