import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GameButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  onClick?: () => void;
}

export function GameButton({ 
  children, 
  variant = 'primary', 
  size = 'small',
  onClick 
}: GameButtonProps) {
  const isPrimary = variant === 'primary';
  const isLarge = size === 'large';

  return (
    <motion.button
      className={`
        relative overflow-hidden
        ${isLarge ? 'px-12 py-4 text-xl' : 'px-6 py-2.5 text-base'}
        rounded-full
        ${isPrimary 
          ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white' 
          : 'bg-white/10 backdrop-blur-md text-cyan-300 border-2 border-cyan-400/40'
        }
        transition-all duration-300
        flex items-center justify-center
        cursor-pointer
      `}
      style={{
        boxShadow: isPrimary 
          ? '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)' 
          : '0 0 20px rgba(34, 211, 238, 0.3)',
        textShadow: isPrimary ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isPrimary
          ? '0 0 40px rgba(34, 211, 238, 0.8), 0 0 80px rgba(168, 85, 247, 0.6)'
          : '0 0 30px rgba(34, 211, 238, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated shimmer effect for primary button */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            `0 0 20px ${isPrimary ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.2)'}`,
            `0 0 40px ${isPrimary ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.4)'}`,
            `0 0 20px ${isPrimary ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.2)'}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <span className="relative z-10 flex items-center tracking-wide">
        {children}
      </span>

      {/* Corner accents for secondary buttons */}
      {!isPrimary && (
        <>
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60" />
        </>
      )}
    </motion.button>
  );
}