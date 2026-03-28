import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Sparkles, Code2, Smartphone, Globe, ShoppingCart, Truck, Bike } from 'lucide-react'
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
      className="relative min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
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

      {/* Floating Icons - Arranged in curved pattern */}
      {/* Left side curve - top to bottom */}
      <motion.div
        className="absolute top-[18%] left-[6%] hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Smartphone className="w-8 h-8 text-primary-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[38%] left-[4%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Code2 className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[58%] left-[6%] hidden lg:block"
        animate={{ y: [8, -8, 8], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Bike className="w-8 h-8 text-pink-400" />
        </div>
      </motion.div>

      {/* Right side curve - top to bottom */}
      <motion.div
        className="absolute top-[18%] right-[6%] hidden lg:block"
        animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Globe className="w-8 h-8 text-accent-blue" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[38%] right-[4%] hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <ShoppingCart className="w-8 h-8 text-yellow-400" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[58%] right-[6%] hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="p-4 glass rounded-2xl">
          <Truck className="w-8 h-8 text-green-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            
            {/* Left: Text Content */}
            <div className="flex-1 text-center order-2 lg:order-1">
              {/* Badge - Animated & Attractive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6 mt-6 sm:mt-0"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient border */}
                  <motion.div 
                    className="absolute -inset-[2px] rounded-full opacity-75 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(90deg, #f97316, #fbbf24, #22c55e, #3b82f6, #a855f7, #f97316)',
                      backgroundSize: '300% 100%',
                    }}
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Inner content */}
                  <div className="relative flex items-center gap-3 px-5 py-2.5 bg-dark-950 rounded-full">
                    {/* Animated status indicator */}
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500"></span>
                    </span>
                    
                    {/* Text with gradient on Flipkart */}
                    <span className="text-sm font-medium">
                      <span className="text-dark-300">Currently building at </span>
                      <span className="font-bold bg-gradient-to-r from-primary-400 via-yellow-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                        Flipkart
                      </span>
                    </span>
                    
                    {/* Animated Orbiting Dots */}
                    <div className="relative w-6 h-6">
                      {/* Center glow */}
                      <motion.div
                        className="absolute inset-1 rounded-full bg-gradient-to-r from-primary-400 to-yellow-400"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      {/* Orbiting dot 1 */}
                      <motion.div
                        className="absolute w-2 h-2 rounded-full bg-purple-400"
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        style={{ 
                          top: '50%', 
                          left: '50%',
                          marginTop: '-4px',
                          marginLeft: '-4px',
                          transformOrigin: '4px 12px'
                        }}
                      />
                      {/* Orbiting dot 2 */}
                      <motion.div
                        className="absolute w-1.5 h-1.5 rounded-full bg-accent-blue"
                        animate={{ 
                          rotate: -360,
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        style={{ 
                          top: '50%', 
                          left: '50%',
                          marginTop: '-3px',
                          marginLeft: '-3px',
                          transformOrigin: '3px -8px'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Welcome Text - Colorful */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-2xl mb-3 font-medium"
              >
                <span className="text-dark-400">Hey there! </span>
                <span className="text-purple-400">Welcome </span>
                <span className="text-dark-400">to </span>
                <span className="text-primary-400">my </span>
                <span className="text-accent-blue">world </span>
                <motion.span 
                  className="inline-block"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👋
                </motion.span>
              </motion.div>

              {/* Main Title */}
              <div ref={titleRef} className="overflow-hidden mb-1 sm:mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-none sm:leading-tight">
                  <span className="block text-white">{splitText("I'm")}</span>
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
                className="h-7 sm:h-10 mb-3 sm:mb-6 flex items-center justify-center"
              >
                <TypewriterEffect roles={roles} />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="text-base md:text-lg text-dark-400 max-w-xl mx-auto mb-8 leading-relaxed"
              >
            Building scalable <span className="text-primary-400">React Native</span> &{' '}
            <span className="text-accent-blue">TypeScript</span> features for{' '}
            <span className="text-white font-medium">180M+ MAU</span>. 
            Shipped <span className="text-purple-400">Inline Recs</span>,{' '}
            <span className="text-green-400">Variant Selector</span>,{' '}
            <span className="text-pink-400">Buy Again</span> &{' '}
            <span className="text-yellow-400">Flipkart Membership</span>.
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
            </div>

            {/* Right: Profile Image */}
            <motion.div
              className="flex-shrink-0 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative">
                {/* Glowing Ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #a855f7, #3b82f6)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Profile Image Container */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-dark-800 bg-dark-900">
                  <img
                    src={`${import.meta.env.BASE_URL}hero-profile.png`}
                    alt="Ranjan Kumar"
                    className="w-full h-full object-cover scale-[1.2]"
                    style={{ objectPosition: '50% 75%' }}
                  />
                </div>

                {/* Floating Badge - Decorated */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-bottom-2 sm:-right-2 md:bottom-4 md:right-0"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative group">
                    {/* Animated glow behind */}
                    <motion.div
                      className="absolute -inset-0.5 sm:-inset-1 rounded-xl sm:rounded-2xl opacity-70 blur-sm"
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #fbbf24, #a855f7)',
                      }}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Badge content */}
                    <div className="relative flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2.5 bg-dark-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10">
                      {/* Flipkart yellow icon */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 aspect-square rounded sm:rounded-lg bg-gradient-to-br from-yellow-400 to-primary-400 flex items-center justify-center">
                        <span className="text-[9px] sm:text-xs font-bold text-dark-900">F</span>
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col whitespace-nowrap">
                        <span className="text-[8px] sm:text-xs text-dark-400 leading-tight">Working as</span>
                        <span className="text-[10px] sm:text-sm font-semibold bg-gradient-to-r from-white to-dark-300 bg-clip-text text-transparent leading-tight">
                          SDE @ Flipkart
                        </span>
                      </div>
                      
                      {/* Verified badge */}
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 aspect-square rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats - Flipkart focused */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12"
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
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-dark-500">{stat.label}</div>
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
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2"
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
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}

export default Hero
