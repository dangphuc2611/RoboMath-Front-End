import { motion } from 'motion/react';
import { Calculator, Plus, Minus, X, Divide, Percent, Sparkles, Sigma, PieChart } from 'lucide-react';

export function RoboMathHero() {
  const mathSymbols = [
    { icon: Calculator, delay: 0, angle: 0 },
    { icon: Plus, delay: 0.2, angle: 45 },
    { icon: Minus, delay: 0.4, angle: 90 },
    { icon: X, delay: 0.6, angle: 135 },
    { icon: Divide, delay: 0.8, angle: 180 },
    { icon: Percent, delay: 1, angle: 225 },
    { icon: Sigma, delay: 1.2, angle: 270 },
    { icon: PieChart, delay: 1.4, angle: 315 },
  ];

  // Custom symbols for π and √
  const customSymbols = [
    { text: 'π', delay: 1.6, angle: 22.5 },
    { text: '√', delay: 1.8, angle: 67.5 },
    { text: 'x²', delay: 2, angle: 112.5 },
    { text: 'Σ', delay: 2.2, angle: 157.5 },
  ];

  return (
    <div className="relative">
      {/* Floating holographic math symbols */}
      <div className="relative w-64 h-64">
        {mathSymbols.map((symbol, index) => {
          const Icon = symbol.icon;
          const radius = 90;
          const x = Math.cos((symbol.angle * Math.PI) / 180) * radius;
          const y = Math.sin((symbol.angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8],
                x: [x, x + 10, x],
                y: [y, y - 10, y]
              }}
              transition={{
                delay: symbol.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                marginLeft: '-16px',
                marginTop: '-16px',
              }}
            >
              <div className="relative">
                <Icon 
                  className="w-8 h-8 text-cyan-400" 
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))',
                  }}
                />
                {/* Holographic scan lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-transparent"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    mixBlendMode: 'screen',
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Custom symbols */}
        {customSymbols.map((symbol, index) => {
          const radius = 90;
          const x = Math.cos((symbol.angle * Math.PI) / 180) * radius;
          const y = Math.sin((symbol.angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.2, 0.8],
                x: [x, x + 10, x],
                y: [y, y - 10, y]
              }}
              transition={{
                delay: symbol.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                marginLeft: '-16px',
                marginTop: '-16px',
              }}
            >
              <div className="relative">
                <div 
                  className="w-8 h-8 text-cyan-400" 
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))',
                    fontFamily: 'monospace',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {symbol.text}
                </div>
                {/* Holographic scan lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-transparent"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    mixBlendMode: 'screen',
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Robot body */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            y: [0, -15, 0],
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
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-t from-cyan-400 to-transparent"
              animate={{ scaleY: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
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
                    {/* Pupil */}
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
                    {/* Pupil */}
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
                <div className="absolute bottom-4 left-2 right-2 h-0.5 bg-purple-400/20 rounded" />
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
                animate={{ rotate: [-5, 15, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -right-5 top-3 w-4 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Hands */}
              <motion.div 
                className="absolute -left-6 top-16 w-5 h-5 bg-blue-400 rounded-full border-2 border-cyan-300/40 shadow-lg"
                animate={{ 
                  y: [-2, 2, -2],
                  rotate: [0, 15, 0, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -right-6 top-16 w-5 h-5 bg-blue-400 rounded-full border-2 border-cyan-300/40 shadow-lg"
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Sparkles around robot */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  delay: i * 0.3,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-300" style={{ filter: 'drop-shadow(0 0 4px rgba(253, 224, 71, 0.8))' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}