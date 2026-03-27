import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Globe, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'CFG Normalizer',
    subtitle: 'Theory of Computation Web App',
    description: 'A web application to convert Context-Free Grammars (CFGs) into Chomsky Normal Form (CNF) and Greibach Normal Form (GNF), applying Theory of Computation principles.',
    longDescription: 'Developed a full-stack web application that helps students and professionals convert CFGs into normalized forms. The app features a responsive UI built with React and a Python backend with RESTful APIs for grammar transformations and string testing on production rules. This project demonstrates strong understanding of formal language theory and software development skills.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
    platforms: ['web'],
    category: 'Full-Stack',
    featured: true,
    stats: [
      { label: 'Technologies', value: '5+' },
      { label: 'API Endpoints', value: '10+' },
      { label: 'Grammar Types', value: 'CNF/GNF' },
    ],
    technologies: ['Python', 'React', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
    links: {
      github: 'https://github.com/ranjanj17',
      live: '#',
    },
    color: 'primary-400',
    period: 'Jan 2024 - July 2024',
  },
  {
    id: 2,
    title: 'TrustTrace',
    subtitle: 'Fake News Detection System',
    description: 'A cutting-edge system using Python, Streamlit, Machine Learning, and NLP for real-time credibility assessment of social media posts and tweets.',
    longDescription: 'Engineered a comprehensive fake news detection system that analyzes both text and image inputs to accurately identify the credibility of posts and tweets. The system uses advanced NLP techniques and machine learning models trained to combat misinformation. Built with Streamlit for an interactive UI, enabling users to verify content reliability in real-time.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop',
    platforms: ['web'],
    category: 'Machine Learning',
    featured: true,
    stats: [
      { label: 'ML Models', value: 'Multiple' },
      { label: 'Input Types', value: 'Text/Image' },
      { label: 'Accuracy', value: 'High' },
    ],
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'NLP', 'CSS'],
    links: {
      github: 'https://github.com/ranjanj17/TrustTrace',
      live: '#',
    },
    color: 'accent-blue',
    period: 'Jan 2023 - May 2023',
  },
  {
    id: 3,
    title: 'AurumTrend',
    subtitle: 'Gold Market Analysis Platform',
    description: 'A data analysis project for navigating gold market trends using Python and Jupyter Notebook with advanced visualization techniques.',
    longDescription: 'Built a comprehensive gold market analysis platform that helps users understand and predict gold price trends. The project uses data science techniques including time series analysis, statistical modeling, and visualization to provide insights into market patterns. Implemented using Jupyter Notebook with Python libraries for data manipulation and visualization.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=500&fit=crop',
    platforms: ['web'],
    category: 'Data Science',
    featured: true,
    stats: [
      { label: 'Analysis Type', value: 'Time Series' },
      { label: 'Visualizations', value: '10+' },
      { label: 'Data Points', value: '1000+' },
    ],
    technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib', 'Data Analysis'],
    links: {
      github: 'https://github.com/ranjanj17/AurumTrend',
      live: '#',
    },
    color: 'yellow-400',
    period: '2023',
  },
  {
    id: 4,
    title: 'DSA Problem Solutions',
    subtitle: 'Competitive Programming Repository',
    description: 'A comprehensive collection of 500+ solved Data Structures and Algorithms problems from LeetCode, GeeksforGeeks, and HackerRank.',
    longDescription: 'Maintained a well-organized repository of competitive programming solutions covering arrays, strings, trees, graphs, dynamic programming, and more. Each solution includes time/space complexity analysis and multiple approaches where applicable. This repository showcases problem-solving skills and algorithmic thinking.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
    platforms: ['web'],
    category: 'Algorithms',
    featured: false,
    stats: [
      { label: 'Problems', value: '500+' },
      { label: 'Topics', value: '15+' },
      { label: 'Languages', value: 'C++/Python' },
    ],
    technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
    links: {
      github: 'https://github.com/ranjanj17',
      live: 'https://leetcode.com/u/ranjank_nitj/',
    },
    color: 'cyan-400',
    period: '2020 - Present',
  },
]

const platformIcons = {
  web: { icon: Globe, label: 'Web' },
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const categories = ['all', ...new Set(projects.map((p) => p.category))]
  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="section-title">
              Projects That <span className="gradient-text">Define Me</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              From full-stack applications to ML systems and e-commerce clones - explore my work.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary-400/20 text-primary-400 border border-primary-400/30'
                    : 'glass hover:bg-white/5 text-dark-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <motion.div
                    className="card h-full overflow-hidden cursor-pointer"
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary-400 rounded-full text-xs font-bold text-dark-950">
                          Featured
                        </div>
                      )}

                      {/* Period Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs text-white">
                        {project.period}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className={`text-xs font-medium text-${project.color} uppercase tracking-wider`}>
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-1 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-dark-500 mb-2">{project.subtitle}</p>
                      <p className="text-dark-400 text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-0.5 bg-white/5 rounded text-dark-400">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-dark-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View More */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-sm text-dark-500 group-hover:text-primary-400 transition-colors flex items-center gap-1">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="flex gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4 text-dark-400 hover:text-white" />
                            </a>
                          )}
                          {project.links.live && project.links.live !== '#' && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4 text-dark-400 hover:text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/ranjanj17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View All on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 glass rounded-full hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl sm:text-2xl text-white">×</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs sm:text-sm font-medium text-primary-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-dark-600">•</span>
                  <span className="text-xs text-dark-400">{selectedProject.period}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-base sm:text-lg text-dark-400 mb-4 sm:mb-6">{selectedProject.subtitle}</p>

                <p className="text-sm sm:text-base text-dark-300 leading-relaxed mb-6 sm:mb-8">{selectedProject.longDescription}</p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {selectedProject.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 sm:p-4 bg-white/5 rounded-xl">
                      <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-dark-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xs sm:text-sm font-semibold text-dark-400 uppercase tracking-wider mb-2 sm:mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                  {selectedProject.links.live && selectedProject.links.live !== '#' && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
