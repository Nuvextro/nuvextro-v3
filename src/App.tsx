import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, ArrowRight, 
  Cloud, Shield, Cpu, BarChart3, 
  Globe, Zap, CheckCircle2, Mail, 
  Phone, MapPin, Linkedin, Twitter, 
  Github, ExternalLink, Play
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg shadow-brand-blue/20">
            <span className="text-white font-display font-bold text-2xl">N</span>
          </div>
          <span className={`font-display font-bold text-2xl tracking-tight text-white`}>
            Nuvextro
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${activePage === link.id ? 'text-brand-blue' : 'text-gray-300'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-blue/20"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${activePage === link.id ? 'text-brand-blue' : 'text-gray-300'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActivePage('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-brand-blue text-white px-6 py-3 rounded-xl text-center font-semibold mt-4"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: (p: string) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} />
            Engineering Technology for Tomorrow
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Architecting the <span className="gradient-text">Future</span> of Enterprise.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Nuvextro delivers high-end IT consulting and engineering solutions that transform complex challenges into competitive advantages for global enterprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onCtaClick('contact')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-blue/20 flex items-center gap-2 group"
            >
              Book Consultation
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onCtaClick('services')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-white text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</div>
            <div className="flex gap-6">
              <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
              <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
              <div className="w-8 h-8 bg-white/20 rounded-sm"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 animate-float">
            <div className="dark-glass-card rounded-3xl p-8 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-gray-500">SYSTEM_STATUS: OPTIMAL</div>
              </div>
              
              <div className="space-y-6">
                <div className="h-4 w-2/3 bg-white/5 rounded-full"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-brand-blue/10 rounded-xl border border-brand-blue/20 flex flex-col items-center justify-center gap-2">
                    <Cloud className="text-brand-blue" size={20} />
                    <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="h-20 bg-purple-500/10 rounded-xl border border-purple-500/20 flex flex-col items-center justify-center gap-2">
                    <Shield className="text-purple-500" size={20} />
                    <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="h-20 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex flex-col items-center justify-center gap-2">
                    <Cpu className="text-cyan-500" size={20} />
                    <div className="h-1.5 w-8 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="h-32 bg-white/5 rounded-2xl border border-white/5 p-4">
                  <div className="flex items-end gap-1 h-full">
                    {[40, 70, 45, 90, 65, 80, 55, 75, 95, 60].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-brand-blue/40 to-brand-blue rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-blue/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue/20 rounded-full blur-xl animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Cloud Architecture',
      desc: 'Scalable, resilient cloud infrastructure designed for high-performance enterprise workloads.',
      icon: <Cloud className="text-brand-blue" />,
      tags: ['AWS', 'Azure', 'GCP']
    },
    {
      title: 'Cybersecurity',
      desc: 'Advanced threat protection and compliance frameworks to secure your digital assets.',
      icon: <Shield className="text-brand-blue" />,
      tags: ['Zero Trust', 'IAM', 'SOC']
    },
    {
      title: 'AI & Data Engineering',
      desc: 'Transforming raw data into actionable intelligence with custom machine learning models.',
      icon: <BarChart3 className="text-brand-blue" />,
      tags: ['MLOps', 'Big Data', 'Analytics']
    },
    {
      title: 'Digital Transformation',
      desc: 'Modernizing legacy systems with cutting-edge tech stacks and agile methodologies.',
      icon: <Zap className="text-brand-blue" />,
      tags: ['Modernization', 'Agile', 'DevOps']
    },
    {
      title: 'Enterprise Software',
      desc: 'Custom-built applications tailored to your unique business processes and goals.',
      icon: <Cpu className="text-brand-blue" />,
      tags: ['SaaS', 'ERP', 'CRM']
    },
    {
      title: 'Global IT Strategy',
      desc: 'Long-term technology roadmaps aligned with your business vision and market demands.',
      icon: <Globe className="text-brand-blue" />,
      tags: ['Consulting', 'Roadmap', 'Governance']
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">Comprehensive Technology Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide end-to-end consulting and engineering services to help you navigate the complexities of the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Engineering Transformation at Scale</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our approach combines deep technical expertise with strategic business insight to deliver solutions that don't just work—they excel.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Discovery & Analysis', desc: 'Deep dive into your current state and future goals.' },
                { title: 'Architecture Design', desc: 'Crafting the blueprint for a scalable, secure future.' },
                { title: 'Agile Implementation', desc: 'Rapid, iterative development with continuous feedback.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-blue/20 to-purple-600/20 rounded-full absolute inset-0 blur-3xl animate-pulse"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="dark-glass-card p-6 rounded-2xl border-brand-blue/20">
                  <div className="text-brand-blue font-bold text-3xl mb-1">99.9%</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Uptime Guaranteed</div>
                </div>
                <div className="dark-glass-card p-6 rounded-2xl border-purple-500/20">
                  <div className="text-purple-500 font-bold text-3xl mb-1">40%</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Cost Reduction</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="dark-glass-card p-6 rounded-2xl border-cyan-500/20">
                  <div className="text-cyan-500 font-bold text-3xl mb-1">2.5x</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Faster Deployment</div>
                </div>
                <div className="dark-glass-card p-6 rounded-2xl border-brand-blue/20">
                  <div className="text-brand-blue font-bold text-3xl mb-1">500+</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Systems Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: 'Cloud Migration for Global FinTech',
      category: 'Cloud Infrastructure',
      image: 'https://picsum.photos/seed/tech1/800/600'
    },
    {
      title: 'AI-Driven Supply Chain Optimization',
      category: 'Data Science',
      image: 'https://picsum.photos/seed/tech2/800/600'
    },
    {
      title: 'Zero-Trust Security Implementation',
      category: 'Cybersecurity',
      image: 'https://picsum.photos/seed/tech3/800/600'
    }
  ];

  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">Proven Results</h3>
          </div>
          <button className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all group">
            View All Case Studies <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="bg-white text-brand-navy p-4 rounded-full">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">{c.category}</div>
              <h4 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{c.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onCtaClick }: { onCtaClick: (p: string) => void }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Ready to Engineer Your <span className="text-brand-blue">Tomorrow</span>?
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Join the ranks of forward-thinking enterprises that have transformed their technology landscape with Nuvextro.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => onCtaClick('contact')}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl shadow-brand-blue/20"
            >
              Start Your Consultation
            </button>
            <button 
              onClick={() => onCtaClick('about')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-display font-bold text-brand-navy mb-8">Let's Build Something <span className="text-brand-blue">Exceptional</span>.</h1>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how technology can drive your business forward, we're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-bold text-brand-navy">consult@nuvextro.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue">
                  <Phone />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</div>
                  <div className="text-lg font-bold text-brand-navy">+1 (800) NUVEXTRO</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue">
                  <MapPin />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Headquarters</div>
                  <div className="text-lg font-bold text-brand-navy">Silicon Valley, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Company</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Enterprise Inc." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Service of Interest</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none">
                  <option>Cloud Architecture</option>
                  <option>Cybersecurity</option>
                  <option>AI & Data Science</option>
                  <option>Digital Transformation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 h-32 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Nuvextro</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Engineering technology for tomorrow. Global enterprise IT consulting and high-end engineering services.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Linkedin size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Twitter size={18} /></button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors"><Github size={18} /></button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => setActivePage('services')} className="hover:text-brand-blue transition-colors">Cloud Architecture</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-brand-blue transition-colors">Cybersecurity</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-brand-blue transition-colors">AI & Data Engineering</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-brand-blue transition-colors">Digital Transformation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => setActivePage('about')} className="hover:text-brand-blue transition-colors">About Us</button></li>
              <li><button onClick={() => setActivePage('case-studies')} className="hover:text-brand-blue transition-colors">Case Studies</button></li>
              <li><button onClick={() => setActivePage('solutions')} className="hover:text-brand-blue transition-colors">Solutions</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-brand-blue transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Stay updated with the latest in enterprise technology.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-brand-blue transition-all" />
              <button className="bg-brand-blue p-2 rounded-lg"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm">
          <div>© 2026 Nuvextro Consulting. All rights reserved.</div>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {activePage === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onCtaClick={setActivePage} />
            <Services />
            <Solutions />
            <CaseStudies />
            <CTASection onCtaClick={setActivePage} />
          </motion.div>
        )}

        {activePage === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-32 pb-12 bg-brand-dark text-center">
              <h1 className="text-5xl font-display font-bold text-white mb-4">Our Services</h1>
              <p className="text-gray-400 max-w-2xl mx-auto px-6">Specialized technology solutions for the modern enterprise.</p>
            </div>
            <Services />
            <CTASection onCtaClick={setActivePage} />
          </motion.div>
        )}

        {activePage === 'solutions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-32 pb-12 bg-brand-dark text-center">
              <h1 className="text-5xl font-display font-bold text-white mb-4">Enterprise Solutions</h1>
              <p className="text-gray-400 max-w-2xl mx-auto px-6">End-to-end transformation strategies that deliver measurable impact.</p>
            </div>
            <Solutions />
            <CTASection onCtaClick={setActivePage} />
          </motion.div>
        )}

        {activePage === 'case-studies' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-32 pb-12 bg-brand-dark text-center">
              <h1 className="text-5xl font-display font-bold text-white mb-4">Case Studies</h1>
              <p className="text-gray-400 max-w-2xl mx-auto px-6">Real-world examples of how we've helped global leaders succeed.</p>
            </div>
            <CaseStudies />
            <CTASection onCtaClick={setActivePage} />
          </motion.div>
        )}

        {activePage === 'about' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-32 pb-24 bg-brand-dark text-center">
              <h1 className="text-5xl font-display font-bold text-white mb-4">About Nuvextro</h1>
              <p className="text-gray-400 max-w-2xl mx-auto px-6">We are a team of engineers, architects, and strategists dedicated to building the future of enterprise technology.</p>
            </div>
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden relative">
                  <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-blue/40 hover:scale-110 transition-transform">
                      <Play fill="white" />
                    </button>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">Our Mission</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    At Nuvextro, we believe that technology should be a catalyst for growth, not a barrier. Our mission is to provide global enterprises with the engineering excellence and strategic guidance they need to thrive in an increasingly complex digital world.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-brand-blue font-bold text-4xl mb-2">15+</div>
                      <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-brand-blue font-bold text-4xl mb-2">200+</div>
                      <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Expert Engineers</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <CTASection onCtaClick={setActivePage} />
          </motion.div>
        )}

        {activePage === 'contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ContactPage />
          </motion.div>
        )}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
