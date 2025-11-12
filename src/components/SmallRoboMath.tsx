import { motion } from 'motion/react';

export function SmallRoboMath() {
  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Glow effect behind robot */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-2xl scale-110 rounded-full" />
      
      <div className="relative">
        {/* Antenna */}
        <motion.div 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-10 bg-gradient-to-t from-cyan-400 to-transparent"
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Head */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl border-4 border-cyan-300/30 relative overflow-hidden">
            {/* Metallic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
            
            {/* Eyes */}
            <div className="flex gap-4 justify-center mt-6">
              <motion.div 
                className="w-6 h-6 bg-cyan-300 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] relative overflow-hidden"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-900 rounded-full"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
              <motion.div 
                className="w-6 h-6 bg-cyan-300 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] relative overflow-hidden"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-900 rounded-full"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Smile display */}
            <div className="flex justify-center mt-3">
              <div className="w-12 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            </div>

            {/* Digital patterns */}
            <div className="absolute bottom-2 left-2 right-2 h-1 bg-cyan-400/20 rounded" />
            <div className="absolute bottom-3.5 left-2 right-2 h-0.5 bg-purple-400/20 rounded" />
          </div>

          {/* Side panels */}
          <div className="absolute -left-2 top-6 w-2 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-l-lg border border-cyan-400/30" />
          <div className="absolute -right-2 top-6 w-2 h-12 bg-gradient-to-l from-blue-600 to-blue-500 rounded-r-lg border border-cyan-400/30" />
        </div>

        {/* Body */}
        <div className="mt-1">
          <div className="w-20 h-28 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 rounded-3xl shadow-2xl border-4 border-cyan-300/30 relative overflow-hidden">
            {/* Metallic shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            
            {/* Calculator display on chest */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-10 bg-cyan-950/60 rounded-lg border-2 border-cyan-400/40 flex items-center justify-center backdrop-blur-sm">
              <motion.span 
                className="text-cyan-300 text-base"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}
              >
                π = 3.14
              </motion.span>
            </div>

            {/* Energy core */}
            <motion.div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Side vents */}
            <div className="absolute left-1 top-16 space-y-1">
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
            </div>
            <div className="absolute right-1 top-16 space-y-1">
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
              <div className="w-3 h-0.5 bg-cyan-400/40 rounded" />
            </div>
          </div>

          {/* Arms */}
          <motion.div 
            className="absolute -left-5 top-3 w-4 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full border-2 border-cyan-400/30"
            animate={{ rotate: [-5, 10, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -right-5 top-3 w-4 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full border-2 border-cyan-400/30"
            animate={{ rotate: [5, -5, 5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Hands - waving gesture */}
          <motion.div 
            className="absolute -left-6 top-16 w-5 h-5 bg-blue-400 rounded-full border-2 border-cyan-300/40 shadow-lg"
            animate={{ 
              y: [-2, 2, -2],
              rotate: [0, 20, 0, -20, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -right-6 top-16 w-5 h-5 bg-blue-400 rounded-full border-2 border-cyan-300/40 shadow-lg"
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}
