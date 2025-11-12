import { motion } from 'motion/react';
import { FloatingParticles } from './FloatingParticles';
import { FloatingPlanets } from './FloatingPlanets';
import { GameButton } from './GameButton';
import { ArrowLeft, Plus, Minus, Zap, Award, Star, Gem, Cpu } from 'lucide-react';
import { SmallRoboMath } from './SmallRoboMath';

interface HowToPlayProps {
  onBack: () => void;
  onNext: () => void;
}

export function HowToPlay({ onBack, onNext }: HowToPlayProps) {
  const collectibles = [
    { icon: Star, color: 'text-yellow-400', glow: 'rgba(250, 204, 21, 0.8)', delay: 0 },
    { icon: Gem, color: 'text-cyan-400', glow: 'rgba(34, 211, 238, 0.8)', delay: 0.2 },
    { icon: Cpu, color: 'text-purple-400', glow: 'rgba(168, 85, 247, 0.8)', delay: 0.4 },
    { icon: Star, color: 'text-pink-400', glow: 'rgba(244, 114, 182, 0.8)', delay: 0.6 },
    { icon: Gem, color: 'text-green-400', glow: 'rgba(74, 222, 128, 0.8)', delay: 0.8 },
    { icon: Cpu, color: 'text-orange-400', glow: 'rgba(251, 146, 60, 0.8)', delay: 1 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjI4NjYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612694537513-b772cb21f725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBibHVlJTIwZ2FsYXh5fGVufDF8fHx8MTc2Mjg3MDM1OHww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      <FloatingPlanets />
      <FloatingParticles />

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onBack}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="text-lg">Back</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}>
              How to Play
            </span>
          </motion.h1>

          {/* Main content container */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left side - Robot and Dialogue */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Robot */}
              <div className="mb-6 scale-90">
                <SmallRoboMath />
              </div>

              {/* Dialogue Box */}
              <div className="relative w-full">
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border-2 border-cyan-400/40 p-6 shadow-2xl">
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

                  <p className="text-lg text-cyan-100 leading-relaxed relative z-10"
                    style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
                    Each planet holds a different Math topic. Answer correctly to gain energy – a wrong answer will drain your energy!
                  </p>
                </div>
              </div>

              {/* Floating collectibles around robot area */}
              {collectibles.slice(0, 3).map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${15 + i * 30}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon 
                      className={`w-8 h-8 ${item.color}`}
                      style={{ filter: `drop-shadow(0 0 10px ${item.glow})` }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right side - Infographic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Energy Bar Section */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-xl border-2 border-blue-400/40 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8))' }} />
                  <h3 className="text-xl text-cyan-300">Energy System</h3>
                </div>
                
                {/* Energy bar display */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-cyan-200 mb-2">
                    <span>Your Energy</span>
                    <span className="text-yellow-400">100 / 100</span>
                  </div>
                  <div className="h-6 bg-gray-900/50 rounded-full overflow-hidden border border-cyan-400/30">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-green-500"
                      style={{
                        boxShadow: '0 0 20px rgba(74, 222, 128, 0.6)',
                        width: '100%'
                      }}
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Correct answer */}
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-400/40 rounded-lg mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-green-500 rounded-full p-2">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-green-300">Correct Answer</p>
                    <p className="text-sm text-green-200/80">Energy restored</p>
                  </div>
                  <div className="text-2xl text-green-400 font-bold">+10</div>
                </motion.div>

                {/* Wrong answer */}
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-red-500/20 border border-red-400/40 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-red-500 rounded-full p-2">
                    <Minus className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-red-300">Wrong Answer</p>
                    <p className="text-sm text-red-200/80">Energy drained</p>
                  </div>
                  <div className="text-2xl text-red-400 font-bold">-5</div>
                </motion.div>
              </div>

              {/* Rewards Section */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-xl border-2 border-purple-400/40 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-400" style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.8))' }} />
                  <h3 className="text-xl text-cyan-300">Rewards</h3>
                </div>

                {/* Golden Board */}
                <div className="mb-3 p-3 bg-yellow-500/10 border border-yellow-400/40 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <p className="text-yellow-300">Golden Math Explorer Board</p>
                      <p className="text-xs text-yellow-200/70">Complete all challenges</p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-2">
                  <motion.div 
                    className="flex items-center gap-2 p-2 bg-blue-500/10 border border-blue-400/30 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-xl">🎖️</div>
                    <p className="text-sm text-cyan-200">Algebra Conqueror</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2 p-2 bg-purple-500/10 border border-purple-400/30 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-xl">🚀</div>
                    <p className="text-sm text-purple-200">Geometry Astronaut</p>
                  </motion.div>
                </div>
              </div>

              {/* More floating collectibles */}
              {collectibles.slice(3).map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      right: `${10 + i * 20}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, -360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon 
                      className={`w-7 h-7 ${item.color}`}
                      style={{ filter: `drop-shadow(0 0 10px ${item.glow})` }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Next Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <GameButton variant="primary" size="large" onClick={onNext}>
              🪐 Next → Choose Your Planet
            </GameButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
