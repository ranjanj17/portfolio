import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Ranjan showed exceptional skills during his internship at Cadence. His work on the Virtuoso infrastructure demonstrated strong C++ fundamentals and excellent problem-solving abilities. He was quick to grasp complex EDA concepts and delivered quality code.",
    author: 'Tech Lead',
    role: 'Senior Engineer',
    company: 'Cadence Design Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    content: "Working with Ranjan in the Media Cell was a great experience. His leadership skills and ability to manage content creation for the entire college was impressive. He consistently delivered high-quality work and mentored junior team members.",
    author: 'Professor',
    role: 'Faculty Advisor',
    company: 'NIT Jalandhar',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    content: "Ranjan's dedication to competitive programming is remarkable. His consistent practice and 500+ problems solved on LeetCode shows his commitment to mastering data structures and algorithms. A strong problem solver.",
    author: 'Peer',
    role: 'Fellow Student',
    company: 'NIT Jalandhar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    content: "Ranjan's full-stack projects like CFG Normalizer and TrustTrace demonstrate his ability to build complete applications from scratch. His understanding of both frontend and backend technologies is solid.",
    author: 'Mentor',
    role: 'Project Guide',
    company: 'NIT Jalandhar',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-400 font-medium text-sm tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="section-title">
              What People <span className="gradient-text">Say</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Feedback from mentors, colleagues, and the community.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="card p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-400/20" />

              {/* Testimonial Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-dark-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full border-2 border-primary-400/30 mb-4"
                    />
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-dark-400 text-sm">
                      {testimonials[currentIndex].role} at{' '}
                      <span className="text-primary-400">{testimonials[currentIndex].company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6">
                <motion.button
                  onClick={prev}
                  className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6">
                <motion.button
                  onClick={next}
                  className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-400'
                      : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Mini Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {testimonials.filter((_, i) => i !== currentIndex).slice(0, 2).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="card p-6 cursor-pointer hover:border-primary-400/30 transition-all duration-300"
                onClick={() => setCurrentIndex(testimonials.findIndex((t) => t.id === testimonial.id))}
                whileHover={{ y: -4 }}
              >
                <p className="text-dark-300 text-sm line-clamp-3 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">{testimonial.author}</div>
                    <div className="text-dark-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
