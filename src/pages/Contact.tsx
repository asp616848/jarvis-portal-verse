import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "General Inquiries",
      email: "contact@jarvis-iitm.org",
      description: "For general questions and information"
    },
    {
      title: "Projects & Collaboration",
      email: "projects@jarvis-iitm.org", 
      description: "Partnership opportunities and project discussions"
    },
    {
      title: "Recruitment",
      email: "recruitment@jarvis-iitm.org",
      description: "Join our team and career opportunities"
    },
    {
      title: "Research Inquiries",
      email: "research@jarvis-iitm.org",
      description: "Academic collaboration and research partnerships"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", handle: "@jarvis-iitm", url: "#" },
    { name: "GitHub", handle: "@jarvis-iitm", url: "#" },
    { name: "Twitter", handle: "@jarvis_iitm", url: "#" },
    { name: "Instagram", handle: "@jarvis.iitm", url: "#" },
    { name: "Discord", handle: "JARVIS Community", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="font-tech text-6xl font-bold mb-6 neon-text">
              CONTACT US
            </h1>
            <p className="font-mono-tech text-xl text-muted-foreground max-w-4xl mx-auto">
              Ready to collaborate, innovate, or join our mission? 
              Reach out to us and let's build the future together.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
              <h2 className="font-tech text-2xl font-bold mb-6 text-primary">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono-tech text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block font-mono-tech text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="recruitment">Join JARVIS</option>
                    <option value="research">Research Partnership</option>
                    <option value="sponsorship">Sponsorship</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-mono-tech text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg focus:border-primary focus:outline-none font-mono-tech resize-none"
                    placeholder="Tell us about your inquiry, project idea, or how you'd like to get involved..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full neon-border px-8 py-4 bg-primary/10 text-primary font-tech font-bold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
                <h2 className="font-tech text-2xl font-bold mb-6 text-secondary">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      <h3 className="font-tech text-lg font-bold text-accent mb-2">
                        {info.title}
                      </h3>
                      <p className="font-mono-tech text-primary mb-1">
                        {info.email}
                      </p>
                      <p className="font-mono-tech text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm">
                <h2 className="font-tech text-2xl font-bold mb-6 text-accent">
                  Follow Us
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <span className="font-tech text-lg font-bold">
                          {social.name}
                        </span>
                        <p className="font-mono-tech text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                      <a 
                        href={social.url}
                        className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary hover:text-background transition-colors font-mono-tech text-sm"
                      >
                        Follow
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location & Office Hours */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm text-center">
              <h3 className="font-tech text-2xl font-bold mb-4 text-primary">
                Visit Us
              </h3>
              <div className="font-mono-tech text-muted-foreground space-y-2">
                <p>JARVIS Lab</p>
                <p>Department of Computer Science</p>
                <p>Indian Institute of Technology Madras</p>
                <p>Chennai, Tamil Nadu 600036</p>
                <p>India</p>
              </div>
            </div>
            
            <div className="neon-border p-8 rounded-lg bg-card/20 backdrop-blur-sm text-center">
              <h3 className="font-tech text-2xl font-bold mb-4 text-secondary">
                Office Hours
              </h3>
              <div className="font-mono-tech text-muted-foreground space-y-2">
                <p><span className="text-foreground">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="text-foreground">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="text-foreground">Sunday:</span> Closed</p>
                <p className="pt-4 text-sm">
                  * Emergency contacts available 24/7
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="font-tech text-4xl font-bold text-center mb-12 text-primary neon-text">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How can I join JARVIS?",
                  answer: "We hold recruitment drives twice a year. Visit our Join Us page for current opportunities and application procedures."
                },
                {
                  question: "Can I collaborate on projects as an external partner?",
                  answer: "Yes! We welcome collaborations with industry partners, other academic institutions, and research organizations."
                },
                {
                  question: "What kind of projects does JARVIS work on?",
                  answer: "We work on cutting-edge projects in AI, IoT, cybersecurity, blockchain, robotics, and emerging technologies."
                },
                {
                  question: "Do you offer internship opportunities?",
                  answer: "We provide research internships and project opportunities for students. Contact our recruitment team for current openings."
                }
              ].map((faq, index) => (
                <div key={index} className="neon-border p-6 rounded-lg bg-card/20 backdrop-blur-sm">
                  <h3 className="font-tech text-lg font-bold mb-3 text-accent">
                    {faq.question}
                  </h3>
                  <p className="font-mono-tech text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;