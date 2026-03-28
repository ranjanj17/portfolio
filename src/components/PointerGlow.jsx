import { motion } from 'framer-motion'

const PointerGlow = ({ position }) => {
  return (
    <>
      {/* Main Glow Effect */}
      <motion.div
        className="cursor-glow hidden lg:block"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  )
}

export default PointerGlow
