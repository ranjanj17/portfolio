import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: 'blur(10px)'
      }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="w-32 h-32 mx-auto relative flex items-center justify-center"
          >
            {/* Spinning border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-400 border-r-accent-blue"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Logo text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-2xl font-mono">
                <span className="text-dark-400">&lt;</span>
                <span className="gradient-text font-bold">Ranjan</span>
                <span className="text-dark-400"> /&gt;</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <h2 className="text-xl font-semibold text-white">
            Initializing Experience
          </h2>
          
          {/* Progress Bar */}
          <div className="w-48 h-1 mx-auto bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-400 to-accent-blue"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
          
          {/* Code-style Loading */}
          <motion.div
            className="mt-6 font-mono text-sm text-dark-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {'> '}
            </motion.span>
            <span className="text-primary-400">loading</span>
            <span className="text-white">(</span>
            <span className="text-green-400">'portfolio'</span>
            <span className="text-white">)</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary-400"
            >
              _
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader

