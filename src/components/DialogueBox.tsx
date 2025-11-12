import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function DialogueBox() {
  const fullMessage = "Xin chào phi hành gia! Trạm Toán học vũ trụ đang cạn năng lượng. Hãy cùng mình khôi phục năng lượng bằng cách chinh phục các thử thách Toán học nhé!";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullMessage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
      className="relative max-w-xl w-full mb-4"
    >
      {/* Holographic container */}
      <div className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border-2 border-cyan-400/40 p-4 md:p-5 shadow-2xl">
        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

        {/* Holographic scan lines */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.03) 2px, rgba(34, 211, 238, 0.03) 4px)',
          }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              '0 0 20px rgba(34, 211, 238, 0.3)',
              '0 0 40px rgba(34, 211, 238, 0.5)',
              '0 0 20px rgba(34, 211, 238, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Message content */}
        <div className="relative z-10">
          <p 
            className="text-base md:text-lg text-cyan-100 leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
            }}
          >
            {displayedText}
            {currentIndex < fullMessage.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-cyan-400 ml-1"
              />
            )}
          </p>
        </div>

        {/* Floating data particles inside dialogue */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '10%',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              delay: i * 0.2,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Speech bubble pointer */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <div 
          className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-cyan-400/40"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(34, 211, 238, 0.3))',
          }}
        />
      </div>

      {/* Holographic projection lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}