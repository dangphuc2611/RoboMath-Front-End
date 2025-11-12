import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${
              Math.random() > 0.5 
                ? 'rgba(34, 211, 238, 0.8)' 
                : 'rgba(168, 85, 247, 0.8)'
            }, transparent)`,
            boxShadow: `0 0 ${particle.size * 2}px ${
              Math.random() > 0.5 
                ? 'rgba(34, 211, 238, 0.6)' 
                : 'rgba(168, 85, 247, 0.6)'
            }`,
          }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Larger energy orbs */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '20px',
            height: '20px',
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}
