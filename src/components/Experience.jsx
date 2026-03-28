import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Building2 } from 'lucide-react'

const colorMap = {
  'primary-400': '#f97316',
  'accent-blue': '#3b82f6',
  'purple-400': '#a855f7',
  'green-400': '#4ade80',
  'pink-400': '#f472b6',
  'cyan-400': '#22d3ee',
}

const experiences = [
  {
    id: 1,
    company: 'Flipkart',
    logo: '/logos/flipkart.svg',
    isImage: true,
    role: 'Software Development Engineer',
    location: 'Bangalore, India',
    period: 'Aug 2024 - Present',
    type: 'Full-time',
    description: 'Developing and deploying scalable React Native features serving 180M+ MAU across Android, iOS, and mWeb platforms with 85%+ code reusability.',
    highlights: [
      'Built Inline Recommendation feature for Flipkart Minutes (50M+ users), increasing basket size by 20%+ and engagement by 25%+',
      'Engineered cross-platform Product Variant Multi-Selector Bottomsheet, reducing checkout journey by 40% and driving 12% conversion uplift',
      'Developed membership programs (Plus, Black) with One-Click Activation, onboarding 5M+ subscribers in 3 days during BBD 2025',
      'Implemented Buy Again feature improving user retention by 18%+ and repeat purchase rate by 25%+ for 500M+ registered users',
      'Maintained 99.9% system uptime during BBD 2025 with record-breaking traffic and zero critical failures',
    ],
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Redux', 'Android', 'iOS', 'New Relic'],
    color: 'primary-400',
    current: true,
  },
  {
    id: 2,
    company: 'Cadence Design Systems',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Cadence_Logo_2019.png',
    isImage: true,
    role: 'Software Engineering Intern, EDA',
    location: 'Noida, India',
    period: 'Jan 2024 - June 2024',
    type: 'Internship',
    description: 'Enhanced Cadence Virtuoso automation workflows using C++ and Linux, improving development efficiency by 15%+.',
    highlights: [
      'Resolved 20+ Qt-related UI issues using advanced debugging and OOP design patterns, improving stability by 25%+',
      'Implemented comprehensive error handling system with 100+ test cases, reducing debugging time by 30%+',
      'Collaborated with cross-functional teams using Perforce, Agile methodologies, and code review practices',
      'Utilized C++, OOP, Data Structures, and Algorithms on Linux systems for EDA tool development',
    ],
    technologies: ['C++', 'Qt', 'Linux', 'Perforce', 'OOP', 'Agile', 'Data Structures'],
    color: 'accent-blue',
    current: false,
  },
  {
    id: 3,
    company: 'ISRO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/200px-Indian_Space_Research_Organisation_Logo.svg.png',
    isImage: true,
    role: 'Machine Learning Intern',
    location: 'India',
    period: 'Jun 2023 - Jul 2023',
    type: 'Internship',
    description: 'Developed SRGAN super-resolution model for remote sensing images at Indian Space Research Organisation.',
    highlights: [
      'Built SRGAN super-resolution model for enhancing remote sensing satellite imagery',
      'Generated data samples of remote sensing images for multiple object detection',
      'Implemented machine learning pipelines in Python for image processing workflows',
      'Contributed to software development for satellite image analysis systems',
    ],
    technologies: ['Python', 'Machine Learning', 'SRGAN', 'Deep Learning', 'Image Processing', 'NumPy'],
    color: 'cyan-400',
    current: false,
  },
  {
    id: 5,
    company: 'Media Cell, NIT Jalandhar',
    logo: '📸',
    role: 'Content and Management Head',
    location: 'Jalandhar, India',
    period: 'December 2020 - June 2024',
    type: 'Leadership',
    description: 'Led the media and content team at NIT Jalandhar, managing communications and event coverage.',
    highlights: [
      'Led a team of content creators and managed media coverage for college events',
      'Developed content strategies for social media platforms',
      'Coordinated with various departments for event documentation',
      'Mentored junior team members in content creation and management',
    ],
    technologies: ['Leadership', 'Content Strategy', 'Team Management', 'Event Management'],
    color: 'purple-400',
    current: false,
  },
  {
    id: 6,
    company: 'Rajbhasha Samiti, NIT Jalandhar',
    logo: '✍️',
    role: 'Content Writer and Editor',
    location: 'Jalandhar, India',
    period: 'December 2020 - August 2022',
    type: 'Part-time',
    description: 'Contributed as a content writer and editor for the Hindi literary society at NIT Jalandhar.',
    highlights: [
      'Created engaging content for college publications and events',
      'Edited and proofread articles for quality and consistency',
      'Contributed to the literary magazine and special editions',
    ],
    technologies: ['Writing', 'Editing', 'Content Creation', 'Public Speaking'],
    color: 'green-400',
    current: false,
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Experience
            </span>
            <h2 className="section-title">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              From EDA software development at Cadence to building e-commerce experiences at Flipkart.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-6 sm:pl-8 md:pl-0">
            {/* Timeline Line - positioned for mobile on left, centered on desktop */}
            <div className="absolute left-2 sm:left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-blue to-purple-400 md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-0 sm:left-1 md:left-1/2 w-4 h-4 bg-dark-900 border-4 rounded-full md:-translate-x-1/2 z-10 -translate-x-1/2"
                    style={{ borderColor: exp.current ? '#4ade80' : colorMap[exp.color] }}
                  >
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="card p-4 sm:p-6 md:p-8 relative overflow-hidden group"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient Accent */}
                      <div 
                        className="absolute top-0 left-0 w-1 h-full"
                        style={{ backgroundColor: colorMap[exp.color] }}
                      />

                      {/* Current Badge */}
                      {exp.current && (
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          <span className="hidden sm:inline">Current</span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 pr-16 sm:pr-0">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 overflow-hidden ${exp.isImage ? 'bg-white p-2' : 'bg-white/10 p-1.5'}`}>
                            {exp.isImage ? (
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                  e.target.parentElement.innerHTML = '🏢'
                                }}
                              />
                            ) : (
                              exp.logo
                            )}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-white truncate">{exp.company}</h3>
                            <p 
                              className="font-medium text-sm sm:text-base truncate"
                              style={{ color: colorMap[exp.color] }}
                            >
                              {exp.role}
                            </p>
                          </div>
                        </div>
                        {!exp.current && (
                          <span 
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full flex-shrink-0 border"
                            style={{ 
                              backgroundColor: `${colorMap[exp.color]}15`,
                              borderColor: `${colorMap[exp.color]}40`,
                              color: colorMap[exp.color]
                            }}
                          >
                            <span 
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: colorMap[exp.color] }}
                            />
                            {exp.type}
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-dark-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-300 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-dark-400">
                            <span 
                              className="mt-0.5 sm:mt-1 flex-shrink-0"
                              style={{ color: colorMap[exp.color] }}
                            >
                              ▹
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="tech-tag text-xs px-2 py-1 sm:px-3 sm:py-1.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-dark-400 mb-4">Want to know more about my experience?</p>
            <motion.a
              href="/RanjanKumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Download Full Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
