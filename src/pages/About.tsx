import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const About = () => {
  const stats = [
    { number: "150+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Research Papers" },
    { number: "10+", label: "Industry Partners" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Faculty Advisor",
      specialization: "AI & Machine Learning",
      description: "Leading researcher in neural networks and deep learning applications."
    },
    {
      name: "Arjun Krishnan",
      role: "President",
      specialization: "Robotics & IoT",
      description: "Fourth-year student specializing in autonomous systems and IoT frameworks."
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      specialization: "Cybersecurity",
      description: "Expert in blockchain technology and digital forensics."
    },
    {
      name: "Rahul Patel",
      role: "Technical Lead",
      specialization: "Full-Stack Development",
      description: "Passionate about creating scalable web applications and APIs."
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and explore uncharted territories in technology.",
      icon: "🚀"
    },
    {
      title: "Collaborative Spirit",
      description: "We believe in the power of diverse minds working together.",
      icon: "🤝"
    },
    {
      title: "Real Impact",
      description: "Our projects aim to solve real-world problems and create meaningful change.",
      icon: "⚡"
    },
    {
      title: "Continuous Learning",
      description: "We foster an environment of constant growth and knowledge sharing.",
      icon: "📚"
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
              WHO WE ARE
            </h1>
            <p className="font-mono-tech text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              JARVIS is the premier technology society at IIT Madras, uniting brilliant minds 
              passionate about Artificial Intelligence, Research, Virtual Networks, IoT, and Electronics. 
              We are the architects of tomorrow, building the future one innovation at a time.
            </p>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="font-tech text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-mono-tech text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
              <h2 className="font-tech text-3xl font-bold mb-6 text-primary">
                OUR MISSION
              </h2>
              <p className="font-mono-tech text-muted-foreground leading-relaxed">
                To foster innovation, research, and technological advancement in the realms of 
                Artificial Intelligence, IoT, Electronics, and Virtual Networks. We bridge the gap 
                between theoretical knowledge and practical implementation, creating solutions 
                that shape the future of technology.
              </p>
            </div>
            <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
              <h2 className="font-tech text-3xl font-bold mb-6 text-secondary">
                OUR VISION
              </h2>
              <p className="font-mono-tech text-muted-foreground leading-relaxed">
                To be the leading student organization that transforms imagination into reality 
                through cutting-edge research and development. We envision a future where our 
                innovations contribute to solving global challenges and advancing human potential 
                through technology.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-accent neon-text">
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="font-tech text-xl font-bold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="font-mono-tech text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-primary neon-text">
              LEADERSHIP TEAM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="neon-border p-6 rounded-lg bg-card/30 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full"></div>
                  </div>
                  <h3 className="font-tech text-lg font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="font-mono-tech text-primary text-center text-sm mb-2 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="font-mono-tech text-accent text-center text-sm mb-3">
                    {member.specialization}
                  </p>
                  <p className="font-mono-tech text-muted-foreground text-xs text-center">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="font-tech text-3xl font-bold mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="font-mono-tech text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future of technology. Your ideas could be the next breakthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/join-us"
                className="inline-block neon-border px-8 py-4 bg-primary/10 text-primary font-tech font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
              >
                Join JARVIS
              </Link>
              <Link 
                to="/contact"
                className="inline-block neon-border px-8 py-4 bg-secondary/10 text-secondary font-tech font-bold uppercase tracking-wider hover:bg-secondary hover:text-background transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;