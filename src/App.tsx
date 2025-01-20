import React, { useEffect } from 'react';
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
  Mail,           // Import for the email icon
  Phone,          // Import for the phone icon
  Linkedin,       // Import for the LinkedIn icon
  MapPin          // Import for the location icon
} from 'lucide-react';

function App() {
  // Scroll-to-section function
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  }

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section'); // Find all sections with the 'fade-in-section' class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class when in view
            observer.unobserve(entry.target); // Stop observing once it's shown
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sections.forEach((section) => observer.observe(section)); // Observe each section
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
       <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
{/* Navigation */}
<nav className="fixed top-4 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900/20">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-20">
      {/* Logo or Title */}
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Guru's Portfolio
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-10">
        <button onClick={() => scrollToSection('about')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Skills
        </button>
        <button onClick={() => scrollToSection('education')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Education
        </button>
        <button onClick={() => scrollToSection('certificates')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Certificates
        </button>
        <button onClick={() => scrollToSection('testimonials')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Testimonials
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="text-lg text-gray-300 hover:text-purple-400 transition-colors">
          Contact
        </button>
      </div>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black pt-16">
  <div className="container mx-auto px-6 relative z-10 py-32">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      {/* Left: Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          My Full Stack Developer Portfolio
        </h1>
        <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
          Explore my work as a full stack developer, crafting innovative solutions for diverse needs.
          Specializing in building scalable, user-friendly applications that solve real-world problems.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors"
          >
            About Me
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 transform translate-x-4"> {/* Moves the image slightly right */}
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          alt="Tech Background"
          className="rounded-lg shadow-2xl w-full"
        />
      </div>
    </div>
  </div>
</section>


    {/* About Me Section */}
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
  <div className="container mx-auto px-6">
    <div className="flex items-center gap-4 mb-12 fade-in-section">
      <User className="w-8 h-8 text-purple-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        About Me
      </h2>
    </div>
    <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm">
      <p className="text-xl text-gray-300 leading-relaxed fade-in-section">
        I’m a passionate Full Stack Developer with experience in building high-performance web applications,
        specializing in responsive design, cross-browser compatibility, and creating seamless digital experiences.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mt-4 fade-in-section">
        With expertise in <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Node.js</span>, and 
        <span className="text-purple-400">UX/UI Design</span>, I focus on delivering user-centered solutions.
      </p>
      <p className="text-xl text-gray-300 leading-relaxed mt-4 fade-in-section">
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
    <div className="flex items-center gap-4 mb-12 fade-in-section">
      <Brain className="w-8 h-8 text-blue-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Key Skills
      </h2>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Skill Category 1 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 fade-in-section">Web Development</h3>
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
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 fade-in-section">Programming Languages</h3>
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
<div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 fade-in-section">Frontend Technologies</h3>
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
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Backend Technologies</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-400" />
            Node.js
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-400" />
            Express.js
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-400" />
            RESTful APIs
          </li>
        </ul>
      </div>

      {/* Skill Category 5 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Additional Skills</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-400" />
            SEO Optimization
          </li>
          <li className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-400" />
            Cross-Browser Compatibility
          </li>
          <li className="flex items-center gap-2">
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
    <div className="flex items-center gap-4 mb-12 fade-in-section">
      <GraduationCap className="w-8 h-8 text-purple-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Education
      </h2>
    </div>

    {/* Education Cards */}
    <div className="space-y-8">
      {/* Degree 1 */}
      <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <div className="flex justify-between items-start mb-4 fade-in-section">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 fade-in-section">
              Bachelor of Science in Physics
            </h3>
            <p className="text-xl text-blue-400 fade-in-section">
              Indira Gandhi Open University
            </p>
          </div>
          <span className="text-gray-400 fade-in-section">Aug 2024 - Aug 2027</span>
        </div>
        <p className="text-gray-300 fade-in-section">
          Developing knowledge in astrophysics with a focus on cosmology and space exploration.
        </p>
      </div>

      {/* Degree 2 */}
      <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <div className="flex justify-between items-start mb-4 fade-in-section">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 fade-in-section">
              Bachelor of Technology in Artificial Intelligence and Machine Learning
            </h3>
            <p className="text-xl text-blue-400 fade-in-section">
              Manakula Vinayagar Institute of Technology
            </p>
          </div>
          <span className="text-gray-400 fade-in-section">July 2021 - Jan 2024</span>
        </div>
        <p className="text-gray-300 fade-in-section">
          Specialized in Artificial Intelligence with foundational knowledge in Machine Learning.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gradient-to-b from-purple-900/20 to-blue-900/20">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="flex items-center gap-4 mb-12 fade-in-section">
      <Certificate className="w-8 h-8 text-blue-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Certifications
      </h2>
    </div>

    {/* Certification Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Certification 1 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-2 fade-in-section">Data Science Professional Certification</h3>
        <p className="text-gray-400 mb-4 fade-in-section">Issued by: IBM</p>
        <a
          href="https://www.ibm.com/in-en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors fade-in-section"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 2 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-2 fade-in-section">UX Design Professional Certification</h3>
        <p className="text-gray-400 mb-4 fade-in-section">Issued by: Google</p>
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/08GTRDAHUZY2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors fade-in-section"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 3 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-2 fade-in-section">AWS Certified Solutions Architect</h3>
        <p className="text-gray-400 mb-4 fade-in-section">Issued by: Amazon Web Services</p>
        <a
          href="https://aws.amazon.com/certification/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors fade-in-section"
        >
          View Certificate
        </a>
      </div>

      {/* Certification 4 */}
      <div className="bg-blue-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <h3 className="text-2xl font-bold text-blue-400 mb-2 fade-in-section">Meta Data Analyst Certification</h3>
        <p className="text-gray-400 mb-4 fade-in-section">Issued by: Meta</p>
        <a
          href="https://about.meta.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transition-colors fade-in-section"
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
    <div className="flex items-center gap-4 mb-12 fade-in-section">
      <Quote className="w-8 h-8 text-purple-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Testimonials
      </h2>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <Quote className="w-8 h-8 text-purple-400 mb-4 fade-in-section" />
        <p className="text-xl text-gray-300 mb-6 leading-relaxed fade-in-section">
          "Guru's work on Anime Esports was phenomenal. The katana transitions and dynamic design made it a standout platform for gaming and anime fans."
        </p>
        <div className="fade-in-section">
          <p className="font-bold text-purple-400">Lucifer</p>
          <p className="text-gray-400">CEO, Anime Esports</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm fade-in-section">
        <Quote className="w-8 h-8 text-purple-400 mb-4 fade-in-section" />
        <p className="text-xl text-gray-300 mb-6 leading-relaxed fade-in-section">
          "Diagnopro has set a new benchmark for medical education apps. Guru's gamified approach is both engaging and highly effective for students."
        </p>
        <div className="fade-in-section">
          <p className="font-bold text-purple-400">Dr. Emily Carter</p>
          <p className="text-gray-400">Senior Physician</p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Projects Section */}
<section id="projects" className="py-20 bg-black fade-in-section">
  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-12">
      {/* Project 1: Anime Esports */}
      <div className="group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
            alt="Anime Esports"
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4 text-purple-400">Anime Esports</h3>
        <p className="text-gray-400">
          A dynamic platform built to engage anime and gaming enthusiasts with interactive animations, unique branding, and seamless navigation. Features include a team showcase, katana-style transitions, and vibrant color schemes.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-purple-400 hover:text-purple-500 transition-colors font-semibold"
        >
          View Project
        </a>
      </div>

      {/* Project 2: Diagnopro */}
      <div className="group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
            alt="Diagnopro"
            className="w-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <h3 className="text-2xl font-bold mt-6 mb-4 text-purple-400">Diagnopro</h3>
        <p className="text-gray-400">
          An innovative app designed for medical students to practice diagnostics through gamified scenarios. Features include a swipe-based interface, real-life cases, and entertaining educational feedback.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-purple-400 hover:text-purple-500 transition-colors font-semibold"
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
    <div className="flex items-center gap-4 mb-12">
      <Mail className="w-8 h-8 text-purple-400" />
      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
    </div>
    <div className="bg-purple-900/20 rounded-xl p-8 backdrop-blur-sm">
      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        I’d love to hear from you! Whether it’s a project, a question, or just to say hi, feel free to reach out. Let’s collaborate and create something amazing together!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-purple-400" />
          <a
            href="mailto:gurugsv777@gmail.com"
            className="text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            gurugsv777@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-purple-400" />
          <a
            href="tel:+919791165095"
            className="text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            +91 9791165095
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <Linkedin className="w-6 h-6 text-purple-400" />
          <a
            href="https://www.linkedin.com/in/gurugsv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-purple-400 hover:text-purple-500 transition-colors"
          >
            linkedin.com/in/gurugsv
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-purple-400" />
          <p className="text-lg text-gray-300">Karaikal, Puducherry, India</p>
        </div>
      </div>
    </div>
  </div>
</section>

  
    </div>
  );
}

export default App;