import { motion } from 'motion/react';

export function FloatingPlanets() {
  const planets = [
    {
      id: 1,
      size: 120,
      gradient: 'from-orange-400 via-pink-500 to-purple-600',
      left: '10%',
      top: '15%',
      duration: 20,
    },
    {
      id: 2,
      size: 80,
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      left: '75%',
      top: '20%',
      duration: 25,
    },
    {
      id: 3,
      size: 100,
      gradient: 'from-green-400 via-teal-500 to-blue-600',
      left: '85%',
      top: '65%',
      duration: 22,
    },
    {
      id: 4,
      size: 60,
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      left: '15%',
      top: '75%',
      duration: 18,
    },
    {
      id: 5,
      size: 90,
      gradient: 'from-pink-400 via-purple-500 to-indigo-600',
      left: '5%',
      top: '45%',
      duration: 23,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute"
          style={{
            left: planet.left,
            top: planet.top,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Planet body */}
          <div className="relative w-full h-full">
            <div 
              className={`w-full h-full rounded-full bg-gradient-to-br ${planet.gradient} shadow-2xl opacity-70`}
              style={{
                boxShadow: `0 0 ${planet.size / 2}px ${planet.size / 4}px rgba(59, 130, 246, 0.3)`,
              }}
            />
            
            {/* Glow effect */}
            <div 
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${planet.gradient} blur-xl opacity-50`}
              style={{
                transform: 'scale(1.2)',
              }}
            />
            
            {/* Shine effect */}
            <div 
              className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-white/30 blur-md"
            />
            
            {/* Surface details */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Rings for some planets */}
          {planet.id === 2 && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${planet.size * 1.8}px`,
                height: `${planet.size * 0.3}px`,
              }}
              animate={{
                rotateX: [60, 55, 60],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                style={{ 
                  transform: 'perspective(100px) rotateX(75deg)',
                }}
              />
            </motion.div>
          )}

          {/* Orbital path visualization */}
          <motion.div
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${planet.size * 0.3}px`,
              height: `${planet.size * 0.3}px`,
              marginLeft: `-${planet.size * 0.15}px`,
              marginTop: `-${planet.size * 0.15}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: planet.duration / 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-white/20" />
          </motion.div>
        </motion.div>
      ))}

      {/* Distant stars */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
