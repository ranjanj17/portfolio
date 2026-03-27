import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star, Award, Medal, Code, GraduationCap, Users, Target } from 'lucide-react'

const colorMap = {
  'primary-400': '#f97316',
  'green-400': '#4ade80',
  'accent-blue': '#3b82f6',
  'purple-400': '#a855f7',
}

const achievements = [
  {
    icon: Code,
    title: 'LeetCode 500+ Problems',
    description: 'Solved over 500 Data Structures and Algorithms problems with a contest rating of 1701.',
    year: '2024',
    color: 'primary-400',
  },
  {
    icon: Star,
    title: 'GeeksforGeeks 400 Problems',
    description: 'Completed 400+ coding problems covering all major DSA topics.',
    year: '2024',
    color: 'green-400',
  },
  {
    icon: Medal,
    title: 'HackerRank 4-Star',
    description: 'Achieved 4-star rating in C programming language on HackerRank.',
    year: '2023',
    color: 'accent-blue',
  },
  {
    icon: GraduationCap,
    title: 'NIT Jalandhar Graduate',
    description: 'B.Tech in Computer Science & Technology with CGPA 8.32/10.',
    year: '2024',
    color: 'purple-400',
  },
]

const stats = [
  { icon: Code, value: '500+', label: 'LeetCode Problems', description: 'Top 15%' },
  { icon: Target, value: '1701', label: 'Contest Rating', description: 'LeetCode contests' },
  { icon: Star, value: '400+', label: 'GFG Problems', description: 'DSA & System Design' },
  { icon: GraduationCap, value: '8.32', label: 'CGPA', description: 'NIT Jalandhar' },
]

const education = [
  { 
    name: 'B.Tech CSE', 
    institution: 'Dr. B R Ambedkar NIT Jalandhar',
    score: 'CGPA: 8.32',
    year: '2020-2024' 
  },
  { 
    name: 'Class 12th (PCM)', 
    institution: 'JNV Saran, Bihar',
    score: '92.20%',
    year: '2017-2019' 
  },
  { 
    name: 'Class 10th', 
    institution: 'JNV Saran, Bihar',
    score: 'CGPA: 10',
    year: '2016-2017' 
  },
]

const Achievements = () => {
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

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Achievements & Education
            </span>
            <h2 className="section-title">
              Milestones That <span className="gradient-text">Matter</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Academic excellence and competitive programming achievements.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="card p-4 sm:p-6 text-center group hover:border-primary-400/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-primary-400/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-400" />
                </div>
                <motion.div
                  className="text-2xl sm:text-4xl font-bold gradient-text mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-base">{stat.label}</div>
                <div className="text-xs sm:text-sm text-dark-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                Coding Achievements
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    className="card p-4 sm:p-5 flex items-start gap-3 sm:gap-4 group hover:border-primary-400/30 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${colorMap[achievement.color]}15` }}
                    >
                      <achievement.icon 
                        className="w-5 h-5 sm:w-6 sm:h-6" 
                        style={{ color: colorMap[achievement.color] }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start sm:items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm sm:text-base">
                          {achievement.title}
                        </h4>
                        <span className="text-xs text-dark-500 font-mono shrink-0">{achievement.year}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-dark-400">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" />
                Education
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.name}
                    variants={itemVariants}
                    className="card p-4 sm:p-5 group hover:border-accent-blue/30 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-2 mb-1 sm:mb-2">
                      <h4 className="font-semibold text-white group-hover:text-accent-blue transition-colors text-sm sm:text-base">
                        {edu.name}
                      </h4>
                      <span className="text-xs text-dark-500 font-mono shrink-0">{edu.year}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-dark-400 mb-0.5 sm:mb-1">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-primary-400 font-medium">{edu.score}</p>
                  </motion.div>
                ))}
              </div>

              {/* Positions of Responsibility */}
              <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  Leadership Roles
                </h3>
                <div className="card p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-1.5 sm:mt-2 rounded-full bg-primary-400 shrink-0" />
                    <div>
                      <h4 className="font-medium text-white text-sm sm:text-base">Content & Management Head</h4>
                      <p className="text-xs sm:text-sm text-dark-400">Media Cell, NIT Jalandhar</p>
                      <p className="text-xs text-dark-500">Dec 2020 - June 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 mt-1.5 sm:mt-2 rounded-full bg-accent-blue shrink-0" />
                    <div>
                      <h4 className="font-medium text-white text-sm sm:text-base">Content Writer & Editor</h4>
                      <p className="text-xs sm:text-sm text-dark-400">Rajbhasha Samiti, NIT Jalandhar</p>
                      <p className="text-xs text-dark-500">Dec 2020 - Aug 2022</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['📚 Reading', '✍️ Writing', '🍳 Cooking', '🎤 Anchoring', '🎙️ Speaking', '🏏 Cricket'].map((hobby) => (
                    <span
                      key={hobby}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-lg sm:rounded-xl text-xs sm:text-sm text-dark-300"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
