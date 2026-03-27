import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Users, MapPin, Building2, Award, Smartphone } from 'lucide-react'

const highlights = [
  {
    icon: Smartphone,
    title: 'Mobile Developer',
    description: 'Building cross-platform React Native apps for 180M+ MAU with 85%+ code reusability across Android, iOS & mWeb.',
    color: 'text-primary-400',
    bgColor: 'bg-primary-400/10',
  },
  {
    icon: Code,
    title: 'Frontend Engineer',
    description: 'Proficient in React Native, React.js, TypeScript, JavaScript, Redux, Tailwind CSS & Bootstrap.',
    color: 'text-accent-blue',
    bgColor: 'bg-accent-blue/10',
  },
  {
    icon: Palette,
    title: 'UI Engineer',
    description: 'Shipped Inline Recs, Variant Selector, Buy Again & Membership programs with pixel-perfect UI/UX.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Maintained 99.9% uptime during BBD 2025 with zero critical failures at record-breaking traffic.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
]

const funFacts = [
  { icon: Building2, text: 'SDE at Flipkart' },
  { icon: MapPin, text: 'Bangalore, India' },
  { icon: Award, text: 'CGPA: 8.32' },
  { icon: Code, text: '500+ DSA Problems' },
]

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

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
              About Me
            </span>
            <h2 className="section-title">
              Passionate about building{' '}
              <span className="gradient-text">exceptional</span> digital experiences
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              I'm a software engineer who loves transforming complex problems into elegant,
              user-friendly solutions at scale.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo & Profile Card */}
            <motion.div variants={itemVariants} className="relative">
              {/* Profile Photo Card */}
              <div className="relative z-10">
                <div className="card p-4 md:p-6">
                  {/* Photo Container */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden bg-dark-950">
                    <div className="w-full h-80 overflow-hidden">
                      <img 
                        src="/profile.png" 
                        alt="Ranjan Kumar"
                        className="w-[105%] h-full object-cover object-top border-0 -ml-[2.5%]"
                        style={{ background: '#0a0a0f' }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                    
                    {/* Name Tag on Photo */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">Ranjan Kumar</h3>
                      <p className="text-primary-400 font-medium">Software Development Engineer</p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                      <Building2 className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-dark-300">Flipkart</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                      <MapPin className="w-4 h-4 text-accent-blue" />
                      <span className="text-sm text-dark-300">Bangalore</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-dark-300">B.Tech CSE, NITJ</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                      <Code className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-dark-300">500+ DSA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary-400/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent-blue/20 rounded-2xl -z-10" />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -right-2 top-20 hidden lg:block"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="glass px-4 py-2 rounded-full">
                  <span className="text-sm text-primary-400 font-medium">🚀 Open to opportunities</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Description & Facts */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  As a <span className="text-white font-medium">React Native & Frontend Developer at Flipkart</span>, 
                  I build scalable mobile features for <span className="text-primary-400 font-medium">180M+ MAU</span> across 
                  Android, iOS & mWeb using <span className="text-white font-medium">React Native, TypeScript & JavaScript</span>.
                </p>
                <p>
                  My tech stack includes <span className="text-white font-medium">React.js, Redux, Tailwind CSS, Bootstrap</span> and more.
                  I've shipped <span className="text-white font-medium">Inline Recs, Variant Selector, Buy Again & Membership Programs</span> 
                  driving significant business impact.
                </p>
                <p>
                  A <span className="text-white font-medium">Computer Science graduate from NIT Jalandhar</span> with 
                  CGPA 8.32, I have <span className="text-white font-medium">500+ 
                  problems on LeetCode</span> (Rating: 1701, Top 15%) with strong DSA fundamentals.
                </p>
              </div>

              {/* Code Block */}
              <div className="card p-3 sm:p-5 overflow-x-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-1.5 min-w-[280px]">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"Ranjan Kumar"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">role</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"SDE @ Flipkart"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">languages</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-400">[</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-orange-400">"C"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"C++"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"Python"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"Java"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-orange-400">"JavaScript"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"TypeScript"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"SQL"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-yellow-400">]</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">stack</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-400">[</span>
                    <span className="text-orange-400">"React Native"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"React.js"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"Redux"</span>
                    <span className="text-yellow-400">]</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">tools</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-yellow-400">[</span>
                    <span className="text-orange-400">"Tailwind"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"Bootstrap"</span>
                    <span className="text-white">,</span>{' '}
                    <span className="text-orange-400">"Jest"</span>
                    <span className="text-yellow-400">]</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">impact</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"180M+ MAU"</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card p-6 group hover:border-primary-400/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
