import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Server, Wrench, Database, Brain } from 'lucide-react'

const colorMap = {
  'primary-400': { main: '#f97316', light: 'rgba(249, 115, 22, 0.5)', bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.3)' },
  'accent-blue': { main: '#3b82f6', light: 'rgba(59, 130, 246, 0.5)', bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)' },
  'purple-400': { main: '#a855f7', light: 'rgba(168, 85, 247, 0.5)', bg: 'rgba(168, 85, 247, 0.1)', border: 'rgba(168, 85, 247, 0.3)' },
  'green-400': { main: '#4ade80', light: 'rgba(74, 222, 128, 0.5)', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.3)' },
  'pink-400': { main: '#f472b6', light: 'rgba(244, 114, 182, 0.5)', bg: 'rgba(244, 114, 182, 0.1)', border: 'rgba(244, 114, 182, 0.3)' },
  'cyan-400': { main: '#22d3ee', light: 'rgba(34, 211, 238, 0.5)', bg: 'rgba(34, 211, 238, 0.1)', border: 'rgba(34, 211, 238, 0.3)' },
}

const skillCategories = [
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: Code,
    color: 'primary-400',
    description: 'Core programming languages I work with',
    skills: [
      { name: 'JavaScript', level: 92, icon: '🟨' },
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'C++', level: 88, icon: '⚡' },
      { name: 'C', level: 85, icon: '©️' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'SQL', level: 85, icon: '🗃️' },
      { name: 'R', level: 70, icon: '📊' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend & Mobile',
    icon: Globe,
    color: 'accent-blue',
    description: 'Building cross-platform mobile and web experiences',
    skills: [
      { name: 'React Native', level: 95, icon: '📱' },
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'Redux', level: 88, icon: '🔄' },
      { name: 'Tailwind CSS', level: 85, icon: '🎨' },
      { name: 'Bootstrap', level: 85, icon: '🅱️' },
      { name: 'Jest', level: 82, icon: '🧪' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Databases',
    icon: Database,
    color: 'purple-400',
    description: 'Server-side development and data management',
    skills: [
      { name: 'SQL', level: 85, icon: '🗃️' },
      { name: 'MySQL', level: 82, icon: '🐬' },
      { name: 'MongoDB', level: 78, icon: '🍃' },
      { name: 'NoSQL', level: 75, icon: '📦' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
    ],
  },
  {
    id: 'tools',
    name: 'Developer Tools',
    icon: Wrench,
    color: 'green-400',
    description: 'Tools and platforms I use daily',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: '🐙' },
      { name: 'Android Studio', level: 88, icon: '🤖' },
      { name: 'XCode', level: 85, icon: '🍎' },
      { name: 'Cursor', level: 90, icon: '⚡' },
      { name: 'VS Code', level: 92, icon: '💻' },
      { name: 'Postman', level: 88, icon: '📬' },
      { name: 'New Relic', level: 82, icon: '📊' },
      { name: 'Charles/Proxyman', level: 80, icon: '🔍' },
    ],
  },
  {
    id: 'cs',
    name: 'CS Fundamentals',
    icon: Brain,
    color: 'pink-400',
    description: 'Core computer science concepts',
    skills: [
      { name: 'Data Structures', level: 92, icon: '🏗️' },
      { name: 'Algorithms', level: 90, icon: '⚙️' },
      { name: 'OOP', level: 88, icon: '🎯' },
      { name: 'Operating Systems', level: 82, icon: '💾' },
      { name: 'DBMS', level: 85, icon: '🗄️' },
    ],
  },
  {
    id: 'other',
    name: 'Other Skills',
    icon: Server,
    color: 'cyan-400',
    description: 'Additional technical and soft skills',
    skills: [
      { name: 'Machine Learning', level: 72, icon: '🤖' },
      { name: 'NLP', level: 70, icon: '📝' },
      { name: 'Weka', level: 75, icon: '📈' },
      { name: 'Problem Solving', level: 92, icon: '🧩' },
      { name: 'Team Leadership', level: 85, icon: '👥' },
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

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

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="section-title">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              A comprehensive toolkit built through academic learning and hands-on projects.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="overflow-x-auto pb-2 mb-8 sm:mb-12 -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {skillCategories.map((category) => {
                const isActive = activeCategory === category.id
                const colors = colorMap[category.color]
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      !isActive ? 'glass hover:bg-white/5 text-dark-400 hover:text-white' : ''
                    }`}
                    style={isActive ? {
                      backgroundColor: colors.bg,
                      color: colors.main,
                      border: `1px solid ${colors.border}`
                    } : {}}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Left - Category Info */}
              <div className="card p-4 sm:p-6 lg:p-8">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                  style={{ backgroundColor: colorMap[activeSkills?.color]?.bg }}
                >
                  {activeSkills && (
                    <activeSkills.icon 
                      className="w-6 h-6 sm:w-8 sm:h-8" 
                      style={{ color: colorMap[activeSkills.color]?.main }}
                    />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{activeSkills?.name}</h3>
                <p className="text-dark-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{activeSkills?.description}</p>

                {/* Visual Skill Breakdown */}
                <div className="space-y-4 sm:space-y-6">
                  {activeSkills?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg">{skill.icon}</span>
                          <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                        </div>
                        <span 
                          className="font-mono text-xs sm:text-sm"
                          style={{ color: colorMap[activeSkills.color]?.main }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${colorMap[activeSkills.color]?.main}, ${colorMap[activeSkills.color]?.light})`
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Quick Stats & All Skills Grid */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="card p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-dark-500">LeetCode Problems</div>
                  </div>
                  <div className="card p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">400+</div>
                    <div className="text-xs sm:text-sm text-dark-500">GeeksforGeeks</div>
                  </div>
                </div>

                {/* Coding Profiles */}
                <div className="card p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Coding Profiles</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <a href="https://leetcode.com/u/ranjank_nitj/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-primary-400/10 transition-colors">
                      <span className="text-dark-300 text-sm sm:text-base">LeetCode</span>
                      <span className="text-primary-400 font-mono text-xs sm:text-sm">1701 (Top 15%)</span>
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/ranjank/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-green-400/10 transition-colors">
                      <span className="text-dark-300 text-sm sm:text-base">GeeksforGeeks</span>
                      <span className="text-green-400 font-mono text-xs sm:text-sm">400+ DSA</span>
                    </a>
                    <a href="https://www.hackerrank.com/ranjank" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 sm:p-3 bg-white/5 rounded-lg hover:bg-accent-blue/10 transition-colors">
                      <span className="text-dark-300 text-sm sm:text-base">HackerRank</span>
                      <span className="text-accent-blue font-mono text-xs sm:text-sm">4⭐ in C</span>
                    </a>
                  </div>
                </div>

                {/* All Skills Grid */}
                <div className="card p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">All Technologies</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skillCategories.flatMap((cat) =>
                      cat.skills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-lg text-xs sm:text-sm text-dark-300 hover:bg-primary-400/10 hover:text-primary-400 transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.icon} {skill.name}
                        </motion.span>
                      ))
                    )}
                  </div>
                </div>

                {/* Currently Learning */}
                <div className="card p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="animate-pulse">🔥</span> Currently Exploring
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['System Design', 'Microservices', 'AWS', 'Node.js', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-primary-400/10 to-accent-blue/10 border border-primary-400/20 rounded-lg text-xs sm:text-sm text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
