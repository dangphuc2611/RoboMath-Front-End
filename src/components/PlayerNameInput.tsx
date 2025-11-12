import { motion } from 'motion/react';
import { useState } from 'react';
import { FloatingParticles } from './FloatingParticles';
import { FloatingPlanets } from './FloatingPlanets';
import { GameButton } from './GameButton';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface PlayerNameInputProps {
  onBack: () => void;
  onContinue: (name: string) => void;
}

export function PlayerNameInput({ onBack, onContinue }: PlayerNameInputProps) {
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');

  const handleStartAdventure = () => {
    if (playerName.trim().length < 2) {
      setError('Please enter a name with at least 2 characters');
      return;
    }
    onContinue(playerName.trim());
  };

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          {/* Icon */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Sparkles className="w-24 h-24 text-cyan-400" 
                style={{ filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))' }} 
              />
              <motion.div
                className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              }}>
              Chào mừng phi hành gia!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-cyan-200 mb-12"
            style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.4)' }}
          >
            {/* What should we call you on this cosmic adventure? */}
            Chúng tôi sẽ gọi bạn là gì trong cuộc phiêu lưu vũ trụ này?
          </motion.p>

          {/* Input Field */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <input
                type="text"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                  setError('');
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleStartAdventure()}
                placeholder="Nhập tên phi hành gia của bạn..."
                maxLength={20}
                className="w-full px-8 py-5 text-2xl text-center text-cyan-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md border-2 border-cyan-400/40 rounded-2xl focus:outline-none focus:border-cyan-400 transition-all"
                style={{
                  textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                }}
              />
              
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.2)',
                    '0 0 40px rgba(34, 211, 238, 0.4)',
                    '0 0 20px rgba(34, 211, 238, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 mt-3 text-sm"
              >
                {error}
              </motion.p>
            )}
          </motion.div>

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <GameButton 
              variant="primary" 
              size="large"
              onClick={handleStartAdventure}
            >
              🚀 Bắt Đầu Du Hành
            </GameButton>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 p-4 bg-purple-500/10 backdrop-blur-sm rounded-xl border border-purple-400/20"
          >
            <p className="text-cyan-200 text-sm">
              💡 <span className="text-purple-300">Fun Fact:</span> Ở ngoài vũ trụ có nhiều ngôi sao hơn số hạt cát trên tất cả các bãi biển trên Trái Đất!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}