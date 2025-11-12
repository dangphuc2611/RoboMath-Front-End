import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FloatingParticles } from './FloatingParticles';
import { GameButton } from './GameButton';
import { SmallRoboMath } from './SmallRoboMath';
import { ArrowLeft, Square, Triangle, Ruler, Compass, Move } from 'lucide-react';

interface GeometryPlanetProps {
  onBack: () => void;
  playerName?: string;
}

interface Lesson {
  id: number;
  title: string;
  icon: any;
  angle: number;
  color: string;
  glowColor: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Tứ giác',
    icon: Square,
    angle: 0,
    color: 'from-blue-400 to-cyan-300',
    glowColor: 'rgba(59, 130, 246, 0.8)',
  },
  {
    id: 2,
    title: 'Định lý Thales',
    icon: Ruler,
    angle: 72,
    color: 'from-cyan-400 to-blue-400',
    glowColor: 'rgba(34, 211, 238, 0.8)',
  },
  {
    id: 3,
    title: 'Định lý Pythagore',
    icon: Triangle,
    angle: 144,
    color: 'from-blue-300 to-sky-400',
    glowColor: 'rgba(56, 189, 248, 0.8)',
  },
  {
    id: 4,
    title: 'Đường trung bình tam giác',
    icon: Move,
    angle: 216,
    color: 'from-sky-400 to-blue-300',
    glowColor: 'rgba(125, 211, 252, 0.8)',
  },
  {
    id: 5,
    title: 'Đường phân giác tam giác',
    icon: Compass,
    angle: 288,
    color: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(37, 99, 235, 0.8)',
  },
];

export function GeometryPlanet({ onBack, playerName }: GeometryPlanetProps) {
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
          className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-sky-900/30 to-cyan-900/40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-cyan-900/20" />
      </div>

      {/* Geometric grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 15 + 5)}%`,
              top: `${(i * 12 + 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-blue-400 rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] border-b-cyan-400" />
            )}
            {i % 3 === 2 && (
              <div className="w-16 h-16 rounded-full border-2 border-sky-400" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Holographic light beams */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 20}%`}
            y1="0%"
            x2={`${i * 20 + 30}%`}
            y2="100%"
            stroke="url(#blueGradient)"
            strokeWidth="1"
            animate={{
              opacity: [0.2, 0.5, 0.2],
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
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
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
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}>
            🌍 Hành Tinh Hình Học
          </span>
        </h1>
        <p className="text-blue-300 text-lg" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>
          Chọn cuộc phiêu lưu hình học của bạn
        </p>
      </motion.div>

      {/* Central Geometry Planet with Orbiting Lessons */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          {/* Central Geometry Planet */}
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
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.3))',
                transform: 'scale(1.5)',
              }}
            />

            {/* Planet body - Earth-like */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-2xl">
              {/* Base Earth colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-emerald-400" />
              
              {/* Geometric continents */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Triangle continent */}
                <div 
                  className="absolute w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-green-600/70"
                  style={{
                    top: '20%',
                    left: '25%',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                />

                {/* Square continent */}
                <div 
                  className="absolute w-12 h-12 bg-emerald-700/70 rotate-12"
                  style={{
                    top: '50%',
                    right: '15%',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                />

                {/* Circle continent */}
                <div 
                  className="absolute w-16 h-16 rounded-full bg-green-700/70"
                  style={{
                    bottom: '15%',
                    left: '15%',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                />

                {/* Pentagon continent */}
                <svg 
                  className="absolute"
                  style={{
                    top: '10%',
                    right: '25%',
                    width: '40px',
                    height: '40px',
                  }}
                >
                  <polygon 
                    points="20,2 38,15 32,35 8,35 2,15" 
                    fill="rgba(21, 128, 61, 0.7)"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                  />
                </svg>

                {/* Small islands - various shapes */}
                <div className="absolute w-4 h-4 bg-teal-600/70 rounded-full top-[35%] left-[60%]" />
                <div className="absolute w-3 h-3 bg-emerald-600/70 rotate-45 bottom-[40%] right-[45%]" />
              </motion.div>

              {/* Clouds/atmosphere effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent)',
                    'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.2), transparent)',
                    'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent)',
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Geometric grid overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <circle cx="96" cy="96" r="80" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="96" cy="96" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                <line x1="96" y1="16" x2="96" y2="176" stroke="white" strokeWidth="0.5" />
                <line x1="16" y1="96" x2="176" y2="96" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Floating geometric symbols around planet */}
            {['△', '□', '○', '⬠', '⬡', '⬢'].map((symbol, i) => {
              const angle = (i * 360) / 6;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={i}
                  className="absolute text-blue-300 text-2xl"
                  style={{
                    left: '50%',
                    top: '50%',
                    textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
                  }}
                  animate={{
                    x: [x * 0.9, x * 1.1, x * 0.9],
                    y: [y * 0.9, y * 1.1, y * 0.9],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 180, 360],
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

          {/* Orbiting Lesson Nodes */}
          <div className="absolute inset-0">
            {lessons.map((lesson, index) => (
              <LessonNode
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
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl border-2 border-blue-400/40 p-5 shadow-2xl">
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-400" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-400" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-400" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-400" />

            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10">
              <p className="text-lg text-blue-100 leading-relaxed mb-2"
                style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>
                Lựa chọn tuyệt vời! Cùng nhau tìm hiểu Hình học
              </p>
              <p className="text-base text-blue-200/90"
                style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.4)' }}>
                và khám phá bí mật của nó!
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}

interface LessonNodeProps {
  lesson: Lesson;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function LessonNode({ lesson, index, isSelected, isHovered, onHover, onLeave, onClick }: LessonNodeProps) {
  const orbitRadius = 280;
  const baseAngle = lesson.angle;
  const Icon = lesson.icon;
  
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
          {/* Node container */}
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
                  className="absolute inset-0 rounded-full border-3 border-blue-300"
                  style={{
                    boxShadow: `0 0 30px ${lesson.glowColor}`,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Node glow */}
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

            {/* Node body */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-3 border-white/40 shadow-2xl bg-white/10 backdrop-blur-sm">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${lesson.color}`}
                animate={{
                  filter: `brightness(${isHovered ? 1.4 : isSelected ? 1.3 : 1.1})`,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: isHovered || isSelected ? [1, 1.1, 1] : 1,
                    rotate: isHovered ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Icon 
                    className="w-10 h-10 text-white" 
                    style={{ 
                      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                      strokeWidth: 2.5,
                    }}
                  />
                </motion.div>
              </div>

              {/* Energy ripple */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/60"
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

              {/* Inner glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)',
                    'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)',
                    'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Lesson title tooltip on hover */}
            <AnimatePresence>
              {(isHovered || isSelected) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-lg border border-blue-400/50 px-4 py-2 shadow-lg">
                    <p className="text-sm text-blue-100 font-medium"
                      style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.6)' }}>
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
