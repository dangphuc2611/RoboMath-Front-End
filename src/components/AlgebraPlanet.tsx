import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FloatingParticles } from './FloatingParticles';
import { GameButton } from './GameButton';
import { SmallRoboMath } from './SmallRoboMath';
import { ArrowLeft } from 'lucide-react';

interface AlgebraPlanetProps {
  onBack: () => void;
  playerName?: string;
}

interface Lesson {
  id: number;
  title: string;
  icon: string;
  angle: number;
  color: string;
  glowColor: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Đơn thức & Đa thức',
    icon: 'x²',
    angle: 0,
    color: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34, 211, 238, 0.8)',
  },
  {
    id: 2,
    title: 'Hằng đẳng thức',
    icon: '=',
    angle: 72,
    color: 'from-blue-400 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.8)',
  },
  {
    id: 3,
    title: 'Phân tích đa thức',
    icon: '()',
    angle: 144,
    color: 'from-cyan-500 to-teal-400',
    glowColor: 'rgba(20, 184, 166, 0.8)',
  },
  {
    id: 4,
    title: 'Phân thức đại số',
    icon: '÷',
    angle: 216,
    color: 'from-teal-400 to-cyan-400',
    glowColor: 'rgba(45, 212, 191, 0.8)',
  },
  {
    id: 5,
    title: 'Xác suất',
    icon: 'P',
    angle: 288,
    color: 'from-blue-500 to-cyan-600',
    glowColor: 'rgba(37, 99, 235, 0.8)',
  },
];

const mathSymbols = ['√', 'x²', 'π', 'Σ', '∫', 'α', 'β', 'θ'];
const floatingEquations = [
  'x² + 2x + 1',
  'a² - b²',
  '(a + b)²',
  'ax + by = c',
  'P(A|B)',
];

export function AlgebraPlanet({ onBack, playerName }: AlgebraPlanetProps) {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [hoveredLesson, setHoveredLesson] = useState<number | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjI4NjYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/30 to-teal-900/40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-blue-900/20" />
      </div>

      {/* Floating math equations in background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingEquations.map((equation, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-2xl font-mono"
            style={{
              left: `${(i * 20 + 10)}%`,
              top: `${(i * 15 + 10)}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {equation}
          </motion.div>
        ))}
      </div>

      {/* Energy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 15}%`}
            y1="0%"
            x2={`${i * 15 + 50}%`}
            y2="100%"
            stroke="url(#gradient)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              strokeWidth: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <FloatingParticles />

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onBack}
        className="absolute top-8 left-8 z-30 flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="text-lg">Back to Planets</span>
      </motion.button>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl mb-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }}>
            🌕 Hành Tinh Đại Số
          </span>
        </h1>
        <p className="text-cyan-300 text-lg" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
          Chọn bài học để bắt đầu!
        </p>
      </motion.div>

      {/* Central Planet with Orbiting Lessons */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          {/* Central Algebra Planet */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            {/* Planet glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                background: 'radial-gradient(circle, rgba(34, 211, 238, 0.6), rgba(20, 184, 166, 0.3))',
                transform: 'scale(1.5)',
              }}
            />

            {/* Planet body */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-300/30 shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-green-400"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Energy patterns */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent)',
                    'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.3), transparent)',
                    'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent)',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Center symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-6xl text-white/90"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                >
                  𝑥
                </motion.div>
              </div>
            </div>

            {/* Floating math symbols around planet */}
            {mathSymbols.map((symbol, i) => {
              const angle = (i * 360) / mathSymbols.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={i}
                  className="absolute text-cyan-300 text-2xl"
                  style={{
                    left: '50%',
                    top: '50%',
                    textShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
                  }}
                  animate={{
                    x: [x * 0.9, x * 1.1, x * 0.9],
                    y: [y * 0.9, y * 1.1, y * 0.9],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {symbol}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Orbiting Lesson Orbs */}
          <div className="absolute inset-0">
            {lessons.map((lesson, index) => (
              <LessonOrb
                key={lesson.id}
                lesson={lesson}
                index={index}
                isSelected={selectedLesson === lesson.id}
                isHovered={hoveredLesson === lesson.id}
                onHover={() => setHoveredLesson(lesson.id)}
                onLeave={() => setHoveredLesson(null)}
                onClick={() => setSelectedLesson(lesson.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RoboMath Guide - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-20 flex items-end gap-4"
      >
        {/* Dialogue Box */}
        <div className="relative max-w-md">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl border-2 border-cyan-400/40 p-5 shadow-2xl">
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 211, 238, 0.3)',
                  '0 0 40px rgba(34, 211, 238, 0.5)',
                  '0 0 20px rgba(34, 211, 238, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10">
              <p className="text-lg text-cyan-100 leading-relaxed mb-2"
                style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
                Tuyệt vời! Hãy bắt đầu hành trình Đại số nhé!
              </p>
              <p className="text-base text-cyan-200/90"
                style={{ textShadow: '0 0 8px rgba(34, 211, 238, 0.4)' }}>
                Hãy sẵn sàng để khởi động Math Station của bạn!
              </p>
            </div>
          </div>
        </div>

        {/* Robot */}
        <div className="scale-75">
          <SmallRoboMath />
        </div>
      </motion.div>

      {/* Start Lesson Button */}
      <AnimatePresence>
        {selectedLesson && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <GameButton variant="primary" size="large">
              🚀 Bắt Đầu Bài Học
            </GameButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}

interface LessonOrbProps {
  lesson: Lesson;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function LessonOrb({ lesson, index, isSelected, isHovered, onHover, onLeave, onClick }: LessonOrbProps) {
  const orbitRadius = 280;
  const baseAngle = lesson.angle;
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
      }}
      transition={{ 
        delay: index * 0.1 + 0.5,
        duration: 0.6,
        type: "spring"
      }}
      className="absolute left-1/2 top-1/2 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Orbit path */}
      <motion.div
        className="absolute"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: '0 0',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            left: `${Math.cos((baseAngle * Math.PI) / 180) * orbitRadius}px`,
            top: `${Math.sin((baseAngle * Math.PI) / 180) * orbitRadius}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Orb container */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : isSelected ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Selection ring */}
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.6, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 rounded-full border-3 border-cyan-300"
                  style={{
                    boxShadow: `0 0 30px ${lesson.glowColor}`,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Orb glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              animate={{
                scale: isHovered || isSelected ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: isHovered || isSelected ? [0.6, 1, 0.6] : [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: `radial-gradient(circle, ${lesson.glowColor}, transparent)`,
                transform: 'scale(1.5)',
              }}
            />

            {/* Orb body */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-white/30 shadow-2xl">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${lesson.color}`}
                animate={{
                  filter: `brightness(${isHovered ? 1.4 : isSelected ? 1.3 : 1})`,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-3xl text-white font-bold"
                  animate={{
                    scale: isHovered || isSelected ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
                >
                  {lesson.icon}
                </motion.div>
              </div>

              {/* Energy ripple */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Lesson title on hover */}
            <AnimatePresence>
              {(isHovered || isSelected) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-lg border border-cyan-400/50 px-4 py-2 shadow-lg">
                    <p className="text-sm text-cyan-100 font-medium"
                      style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
                      {lesson.title}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
