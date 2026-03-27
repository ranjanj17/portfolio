import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Sparkles, Code2, Smartphone, Globe } from 'lucide-react'
import gsap from 'gsap'

const roles = [
  'Software Development Engineer',
  'React Native Developer',
  'Mobile App Developer',
  'Frontend Engineer',
  'UI Engineer',
  'Cross-Platform Developer',
]

// Typewriter Effect Component
const TypewriterEffect = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex, roles])

  return (
    <div className="flex items-center gap-1">
      <span className="text-xl md:text-2xl text-dark-300">&lt;</span>
      <span className="text-xl md:text-2xl text-primary-400 font-mono">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-xl md:text-2xl text-primary-400"
      >
        |
      </motion.span>
      <span className="text-xl md:text-2xl text-dark-300">/&gt;</span>
    </div>
  )
}

const Hero = () => {
  const titleRef = useRef(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char')
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      )
    }
  }, [])

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(247, 147, 30, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247, 147, 30, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Platform Icons */}
      <motion.div
        className="absolute top-1/4 left-[10%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Smartphone className="w-8 h-8 text-primary-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[12%] hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Globe className="w-8 h-8 text-accent-blue" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[15%] hidden lg:block"
        animate={{ y: [-15, 5, -15], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Code2 className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-dark-300">
              Currently building at{' '}
              <span className="text-primary-400 font-semibold">Flipkart</span>
            </span>
          </motion.div>

          {/* Main Title */}
          <div ref={titleRef} className="overflow-hidden mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight">
              <span className="block text-white">{splitText("Hi, I'm")}</span>
              <span className="block gradient-text-animated">
                {splitText('Ranjan Kumar')}
              </span>
            </h1>
          </div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="h-12 mb-8 flex items-center justify-center"
          >
            <TypewriterEffect roles={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable <span className="text-primary-400">React Native</span> &{' '}
            <span className="text-accent-blue">TypeScript</span> features for{' '}
            <span className="text-white font-medium">180M+ MAU</span> at Flipkart.
            Shipped <span className="text-purple-400">Inline Recs</span>,{' '}
            <span className="text-green-400">Variant Selector</span>,{' '}
            <span className="text-pink-400">Buy Again</span> &{' '}
            <span className="text-yellow-400">Membership Programs</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="btn-primary group flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              View My Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats - Flipkart focused */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            {[
              { value: '180M+', label: 'Monthly Users' },
              { value: '85%+', label: 'Code Reusability' },
              { value: '99.9%', label: 'Uptime BBD 2025' },
              { value: '3', label: 'Platforms' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}

export default Hero
