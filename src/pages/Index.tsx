import React, { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Slideshow from '@/components/Slideshow';
import WhoWeAre from '@/components/WhoWeAre';
import slideshow1 from '@/assets/slideshow-1.jpg';
import slideshow2 from '@/assets/slideshow-2.jpg';
import slideshow3 from '@/assets/slideshow-3.jpg';
import slideshow4 from '@/assets/slideshow-4.jpg';

const Index = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [cursorMode, setCursorMode] = useState<'hello' | 'dot'>('hello');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (!hasScrolled && scrollY > 50) {
        setHasScrolled(true);
        setIsRevealed(true);
        
        // Change cursor mode after hero section (around 100vh scroll)
        setTimeout(() => {
          if (scrollY > window.innerHeight * 0.8) {
            setCursorMode('dot');
          }
        }, 1000);
      }
      
      // Change cursor mode after hero section
      if (scrollY > window.innerHeight * 0.8) {
        setCursorMode('dot');
      } else if (hasScrolled) {
        setCursorMode('hello');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <div className="cursor-hello">
      <CustomCursor mode={cursorMode} />
      <Navbar />
      
      {/* Fullscreen Dual Slideshow */}
      <Slideshow side="left" isRevealed={isRevealed} />
      <Slideshow side="right" isRevealed={isRevealed} />
      
      {/* Main Content - Hidden initially, revealed after scroll */}
      <div className={`relative z-20 transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 bg-gradient-to-b from-background via-background to-background/95">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Title */}
            <h1 className="hero-title font-tech neon-text mb-8 glitch-text">
              JARVIS
            </h1>
            
            {/* Subtitles */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 mb-16">
              <div className="hero-subtitle font-mono-tech text-left">
                TECH SOCIETY<br />
                <span className="text-primary">IIT'M</span>
              </div>
              
              <div className="hero-subtitle font-mono-tech text-right">
                JOINT AI, RESEARCH,<br />
                VIRTUAL NETWORKS,<br />
                <span className="text-secondary">IOT & ELECTRONICS</span>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section with Scroll-Triggered Background */}
        <WhoWeAre backgrounds={[slideshow1, slideshow2, slideshow3, slideshow4]} />
        
        {/* Additional Sections */}
        <section className="min-h-screen bg-background flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-tech text-5xl font-bold mb-8 neon-text">
              OUR MISSION
            </h2>
            <p className="font-mono-tech text-xl leading-relaxed text-muted-foreground">
              To foster innovation, research, and technological advancement in the realms of 
              Artificial Intelligence, IoT, Electronics, and Virtual Networks. We bridge the gap 
              between theoretical knowledge and practical implementation, creating solutions 
              that shape the future.
            </p>
          </div>
        </section>
        
        <section className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-tech text-5xl font-bold mb-12 text-accent neon-text">
              JOIN THE REVOLUTION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="neon-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
                <h3 className="font-tech text-2xl font-bold mb-4 text-primary">RESEARCH</h3>
                <p className="font-mono-tech text-muted-foreground">
                  Cutting-edge research in AI, ML, and emerging technologies
                </p>
              </div>
              <div className="neon-border p-8 rounded-lg bg-card/50 backdrop-blur-sm">
                <h3 className="font-tech text-2xl font-bold mb-4 text-secondary">INNOVATION</h3>
                <p className="font-mono-tech text-muted-foreground">
                  Build revolutionary solutions that impact millions
                </p>
              </div>
            </div>
            
            <button className="neon-border px-12 py-4 bg-primary/10 text-primary font-tech font-bold text-xl uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105">
              Join JARVIS
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
