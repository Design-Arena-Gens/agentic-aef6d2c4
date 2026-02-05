'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React, Next.js, and Stripe integration",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Dashboard Analytics",
      description: "Real-time data visualization with interactive charts and metrics",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Media App",
      description: "Full-featured platform with posts, comments, and real-time chat",
      tech: ["React", "Firebase", "Redux", "Material-UI"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative workspace with drag-and-drop functionality",
      tech: ["React", "TypeScript", "Express", "MongoDB"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Redux", "Vue.js"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    tools: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "npm/yarn"]
  };

  return (
    <main className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            UA
          </motion.h1>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          className="max-w-5xl mx-auto text-center z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="text-primary text-lg font-semibold">Hello, I'm</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-7xl md:text-8xl font-bold mb-6 gradient-text"
          >
            Uthman Azeez
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="text-3xl md:text-4xl text-gray-300 mb-8"
          >
            <span>Frontend Developer</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="gradient-text"
            >
              {" "}→ Full Stack Developer
            </motion.span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive web experiences with modern technologies.
            Currently expanding into backend development to become a complete full-stack engineer.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-2xl transition-all animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="gradient-border p-8 md:p-12">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate Frontend Developer with a keen eye for design and user experience.
                I specialize in building modern, responsive web applications using React, Next.js, and TypeScript.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                With a strong foundation in frontend technologies, I'm currently expanding my skill set
                to become a Full Stack Developer. I'm learning backend technologies like Node.js, Express,
                and database management to create complete, end-to-end solutions.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                industry trends and best practices. Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="gradient-border p-8"
              >
                <h3 className="text-2xl font-bold mb-6 capitalize gradient-text">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 glass rounded-full text-sm hover:bg-white/10 transition-all cursor-default"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="gradient-border p-8 hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 group-hover:shadow-2xl transition-shadow`} />
                <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs glass rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12">
              I'm always open to new opportunities and collaborations.
              Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.a
                href="mailto:uthman@example.com"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://github.com/uthmanazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/uthmanazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 text-center text-gray-500 z-10">
        <p>&copy; 2024 Uthman Azeez. All rights reserved.</p>
      </footer>
    </main>
  );
}
