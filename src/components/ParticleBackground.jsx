import { useEffect, useState } from 'react'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `particle-float ${particle.duration}s infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Floating Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(247, 147, 30, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          animation: 'float 15s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(40, 116, 240, 0.4) 0%, transparent 70%)',
          top: '60%',
          right: '10%',
          animation: 'float 18s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          bottom: '20%',
          left: '30%',
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
    </div>
  )
}

export default ParticleBackground

