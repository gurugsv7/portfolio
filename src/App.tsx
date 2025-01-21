import React, { useEffect } from 'react';
import animeImage from './assets/images/anime.png';
import diagnoproImage from './assets/images/diagnopro.png';
import {
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Quote,
  Brain,
  Book,
  AlignCenterVertical as Certificate,
  User,
  Mail,
  Phone,
  Linkedin,
  MapPin,
} from 'lucide-react';
import ModelViewer from './ModelViewer'; // Import the 3D viewer component

function App() {
  // Scroll-to-section function
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
       <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
{/* Navigation */}
<nav className="fixed top-4 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900/20">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between h-20">
      {/* Logo or Title */}
      <div className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Guru's Portfolio
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center space-x-10">
        <button
          onClick={() => scrollToSection('about')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection('certificates')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Certificates
        </button>
        <button
          onClick={() => scrollToSection('testimonials')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Testimonials
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <button
          onClick={() => scrollToSection('contact')}
          className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
        >
          Menu
        </button>
      </div>
    </div>
  </div>
</nav>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center bg-black pt-12 md:pt-16">
  <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          My Full Stack Developer Portfolio
        </h1>
        <p className="text-base md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
          Explore my work as a full stack developer, crafting innovative solutions for diverse needs.
          Specializing in building scalable, user-friendly applications that solve real-world problems.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg bg-purple-500 hover:bg-purple-600 rounded-md font-medium transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-5 md:px-6 py-2 md:py-3 text-sm md:text-lg border border-purple-500 hover:bg-purple-500/10 rounded-md font-medium transition-colors"
          >
            About Me
          </button>
        </div>
      </div>

      {/* Right: 3D Model Viewer (Hidden on Mobile) */}
      <div className="hidden md:block md:w-1/2 transform translate-x-4">
        <div className="rounded-lg shadow-2xl w-full">
          <ModelViewer /> {/* 3D Model Viewer */}
        </div>
      </div>
    </div>
  </div>
</section>


{/* About Me Section */}
<section id="about" className="py-10 md:py-16 bg-gradient-to-b from-black to-purple-900/20">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center md:flex-row md:items-center md:gap-4 mb-8 fade-in-section">
      <div className="flex items-center justify-center md:justify-start">
        <User className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center md:text-left mt-4 md:mt-0">
        About Me
      </h2>
    </div>
    <div className="bg-purple-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm">
      <p className="text-base md:text-xl text-gray-300 leading-relaxed fade-in-section text-center md:text-left">
        I’m a passionate Full Stack Developer with experience in building high-performance web applications,
        specializing in responsive design, cross-browser compatibility, and creating seamless digital experiences.
      </p>
      <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4 fade-in-section text-center md:text-left">
        With expertise in <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Node.js</span>, and 
        <span className="text-purple-400">UX/UI Design</span>, I focus on delivering user-centered solutions.
      </p>
      <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-4 fade-in-section text-center md:text-left">
        I’m continuously expanding my knowledge in <span className="text-purple-400">Astrophysics</span> with a keen interest
        in cosmology and space exploration.
      </p>
    </div>
  </div>
</section>


{/* Skills Section */}
<section id="skills" className="py-20 bg-gradient-to-b from-purple-900/20 to-blue-900/20">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center md:gap-4 mb-12 text-center md:text-left fade-in-section">
      <Brain className="w-8 h-8 mx-auto md:mx-0 text-blue-400 mb-4 md:mb-0" />
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Key Skills
      </h2>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Skill Category 1 */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 fade-in-section">
          Web Development
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            React.js
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Node.js
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            NativeScript
          </li>
        </ul>
      </div>

      {/* Skill Category 2 */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 fade-in-section">
          Programming Languages
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            JavaScript
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            TypeScript
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Python
          </li>
        </ul>
      </div>

      {/* Skill Category 3 */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 fade-in-section">
          Frontend Technologies
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            React.js / Next.js
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Tailwind CSS
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Responsive Web Design
          </li>
        </ul>
      </div>

      {/* Skill Category 4 */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 fade-in-section">
          Backend Technologies
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Node.js
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Express.js
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            RESTful APIs
          </li>
        </ul>
      </div>

      {/* Skill Category 5 */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 fade-in-section">
          Additional Skills
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            SEO Optimization
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Cross-Browser Compatibility
          </li>
          <li className="flex items-center gap-2 fade-in-section">
            <Star className="w-4 h-4 text-purple-400" />
            Astrophysics Enthusiast
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


{/* Education Section */}
<section id="education" className="py-20 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center md:gap-4 mb-12 text-center md:text-left fade-in-section">
      <GraduationCap className="w-8 h-8 mx-auto md:mx-0 text-purple-400 mb-4 md:mb-0" />
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Education
      </h2>
    </div>

    {/* Education Cards */}
    <div className="space-y-6 md:space-y-8">
      {/* Degree 1 */}
      <div className="bg-purple-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-purple-400">
              Bachelor of Science in Physics
            </h3>
            <p className="text-lg md:text-xl text-blue-400">
              Indira Gandhi Open University
            </p>
          </div>
          <span className="text-sm md:text-base text-gray-400 mt-4 md:mt-0">
            Aug 2024 - Aug 2027
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Developing knowledge in astrophysics with a focus on cosmology and space exploration.
        </p>
      </div>

      {/* Degree 2 */}
      <div className="bg-purple-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-purple-400">
              Bachelor of Technology in Artificial Intelligence and Machine Learning
            </h3>
            <p className="text-lg md:text-xl text-blue-400">
              Manakula Vinayagar Institute of Technology
            </p>
          </div>
          <span className="text-sm md:text-base text-gray-400 mt-4 md:mt-0">
            July 2021 - Jan 2024
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Specialized in Artificial Intelligence with foundational knowledge in Machine Learning.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Certifications Section */}
<section id="certificates" className="py-20 bg-gradient-to-b from-purple-900/20 to-blue-900/20">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center md:gap-4 mb-12 text-center md:text-left fade-in-section">
      <Certificate className="w-8 h-8 mx-auto md:mx-0 text-blue-400 mb-4 md:mb-0" />
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Certifications
      </h2>
    </div>

    {/* Certification Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Certification 1 - Meta */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">Meta Data Analyst Certification</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">Issued by: Meta</p>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/ZYQ9R1HTYB1A"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors text-sm md:text-base"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 2 - AWS */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">AWS Certified Solutions Architect</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">Issued by: Amazon Web Services</p>
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/ZGGL9QSNCNFA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors text-sm md:text-base"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 3 - IBM */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">IBM Data Science Professional Certification</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">Issued by: IBM</p>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/4ZI02EHQTCXD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors text-sm md:text-base"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 4 - Google (Unchanged) */}
      <div className="bg-blue-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">Google UX Design Professional Certification</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">Issued by: Google</p>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/08GTRDAHUZY2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors text-sm md:text-base"
        >
          View Certificate
        </a>
      </div>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section id="testimonials" className="py-20 bg-gradient-to-b from-blue-900/20 to-black">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center md:gap-4 mb-12 text-center md:text-left fade-in-section">
      <Quote className="w-8 h-8 mx-auto md:mx-0 text-purple-400 mb-4 md:mb-0" />
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Testimonials
      </h2>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Testimonial 1 */}
      <div className="bg-purple-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <Quote className="w-8 h-8 text-purple-400 mb-4" />
        <p className="text-sm md:text-xl text-gray-300 mb-6 leading-relaxed">
          "Guru's work on Anime Esports was phenomenal. The katana transitions and dynamic design made it a standout platform for gaming and anime fans."
        </p>
        <div>
          <p className="font-bold text-purple-400 text-base md:text-lg">Lucifer</p>
          <p className="text-gray-400 text-sm md:text-base">CEO, Anime Esports</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-purple-900/20 rounded-xl p-6 md:p-8 backdrop-blur-sm fade-in-section">
        <Quote className="w-8 h-8 text-purple-400 mb-4" />
        <p className="text-sm md:text-xl text-gray-300 mb-6 leading-relaxed">
          "Diagnopro has set a new benchmark for medical education apps. Guru's gamified approach is both engaging and highly effective for students."
        </p>
        <div>
          <p className="font-bold text-purple-400 text-base md:text-lg">Dr. Emily Carter</p>
          <p className="text-gray-400 text-sm md:text-base">Senior Physician</p>
        </div>
      </div>
    </div>
  </div>
</section>


  {/* Projects Section */}
<section id="projects" className="py-20 bg-black fade-in-section">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Featured Projects
    </h2>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {/* Project 1: Anime Esports */}
      <div className="group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://raw.githubusercontent.com/gurugsv7/portfolio/main/src/anime.png"
            alt="Anime Esports"
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4 text-purple-400 text-center md:text-left">
          Anime Esports
        </h3>
        <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
          A dynamic platform built to engage anime and gaming enthusiasts with interactive animations, unique branding, and seamless navigation.
        </p>
        <a
          href="https://www.animeesportsorg.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-purple-400 hover:text-purple-500 transition-colors font-semibold text-center md:text-left"
        >
          View Project
        </a>
      </div>

      {/* Project 2: Diagnopro */}
      <div className="group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://raw.githubusercontent.com/gurugsv7/portfolio/main/src/diagnopro.png"
            alt="Diagnopro"
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-6 mb-2 md:mb-4 text-purple-400 text-center md:text-left">
          Diagnopro
        </h3>
        <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
          An innovative app designed for medical students to practice diagnostics through gamified scenarios.
        </p>
        <a
          href="https://gurugsv7.github.io/DiagnoPro/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-purple-400 hover:text-purple-500 transition-colors font-semibold text-center md:text-left"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
</section>

{/* Contact Me Section */}
<section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900/20 fade-in-section">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex flex-col md:flex-row items-center gap-4 mb-12 text-center md:text-left">
      <Mail className="w-8 h-8 text-purple-400 mx-auto md:mx-0" />
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
    </div>

    {/* Contact Content */}
    <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm">
      {/* Contact Text */}
      <p className="text-sm md:text-lg text-gray-300 mb-6 leading-relaxed text-center md:text-left">
        I’d love to hear from you! Whether it’s a project, a question, or just to say hi, feel free to reach out. Let’s collaborate and create something amazing together!
      </p>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Mail className="w-6 h-6 text-purple-400" />
          <a
            href="mailto:gurugsv777@gmail.com"
            className="text-sm md:text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            gurugsv777@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Phone className="w-6 h-6 text-purple-400" />
          <a
            href="tel:+919791165095"
            className="text-sm md:text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            +91 9791165095
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Linkedin className="w-6 h-6 text-purple-400" />
          <a
            href="https://www.linkedin.com/in/gurugsv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            linkedin.com/in/gurugsv
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <MapPin className="w-6 h-6 text-purple-400" />
          <p className="text-sm md:text-lg text-gray-300">
            Karaikal, Puducherry, India
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  
    </div>
  );
}

export default App;