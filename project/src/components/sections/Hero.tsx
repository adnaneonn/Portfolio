import React, { useContext, useEffect, useRef } from 'react';
import { Shield, FileDown, Github } from 'lucide-react';
import ThemeContext from '../../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!terminalRef.current) return;
    
    const terminalLines = [
      { text: '> Initializing security scan...', delay: 500 },
      { text: '> Checking network vulnerabilities...', delay: 1500 },
      { text: '> Running threat assessment...', delay: 2500 },
      { text: '> No critical vulnerabilities detected', delay: 3500 },
      { text: '> System secure. Welcome.', delay: 4500 },
    ];
    
    let timeout: number;
    
    terminalLines.forEach((line, index) => {
      timeout = window.setTimeout(() => {
        if (terminalRef.current) {
          const element = document.createElement('div');
          element.className = 'text-sm md:text-base font-mono mb-1';
          element.innerHTML = line.text;
          terminalRef.current.appendChild(element);
        }
      }, line.delay);
    });
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      id="hero" 
      className={`min-h-screen pt-24 pb-12 flex items-center ${
        darkMode ? 'text-gray' : 'text-navy'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-mono mb-4 bg-opacity-20 border border-cyan text-cyan">
                CYBERSECURITY SPECIALIST
              </span>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-navy'
              } leading-tight`}>
                Cybersecurity is <br />
                <span className="text-cyan">Not Just a Skill.</span> <br />
                It's a Mindset.
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-xl">
                Specialized in SOC operations, network security, and threat intelligence. Defending digital frontiers with expertise and precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="group relative overflow-hidden rounded-md py-3 px-6 bg-cyan text-navy font-mono flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <FileDown className="w-5 h-5 mr-2" />
                  <span>Download CV</span>
                </span>
                <span className="absolute inset-0 w-0 bg-yellow group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
              <a 
                href="#contact" 
                className={`group relative overflow-hidden rounded-md py-3 px-6 ${
                  darkMode ? 'bg-navy-light text-gray' : 'bg-gray-200 text-navy'
                } font-mono flex items-center justify-center border border-cyan transition-all duration-300 transform hover:scale-105`}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 w-0 bg-cyan opacity-20 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
              <a 
                href="#" 
                className={`group relative overflow-hidden rounded-md py-3 px-6 ${
                  darkMode ? 'bg-transparent text-gray' : 'bg-transparent text-navy'
                } border border-gray font-mono flex items-center justify-center transition-all duration-300 transform hover:scale-105`}
              >
                <span className="relative z-10 flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  <span>GitHub</span>
                </span>
                <span className="absolute inset-0 w-0 bg-gray opacity-20 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className={`relative max-w-md w-full rounded-lg overflow-hidden ${
              darkMode ? 'bg-navy-light' : 'bg-gray-100'
            } shadow-xl border border-cyan`}>
              <div className={`px-4 py-2 flex items-center ${
                darkMode ? 'bg-navy-dark' : 'bg-gray-200'
              } border-b border-gray-700`}>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs font-mono">terminal@secure-dev ~ </div>
              </div>
              <div className="p-4 font-mono" ref={terminalRef}>
                {/* Terminal output will be injected here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;