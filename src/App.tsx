import { motion } from 'motion/react';
import { useState } from 'react';
import { RoboMathHero } from './components/RoboMathHero';
import { FloatingParticles } from './components/FloatingParticles';
import { FloatingPlanets } from './components/FloatingPlanets';
import { GameButton } from './components/GameButton';
import { DialogueBox } from './components/DialogueBox';
import { PlayerNameInput } from './components/PlayerNameInput';
import { HowToPlay } from './components/HowToPlay';
import { PlanetSelection } from './components/PlanetSelection';
import { AlgebraPlanet } from './components/AlgebraPlanet';
import { GeometryPlanet } from './components/GeometryPlanet';
import { Trophy, HelpCircle } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<'intro' | 'name-input' | 'how-to-play' | 'planet-selection' | 'algebra-planet' | 'geometry-planet'>('intro');
  const [playerName, setPlayerName] = useState<string>('');

  if (screen === 'name-input') {
    return <PlayerNameInput onBack={() => setScreen('intro')} onContinue={(name) => {
      setPlayerName(name);
      setScreen('planet-selection');
    }} />;
  }

  if (screen === 'how-to-play') {
    return <HowToPlay onBack={() => setScreen('intro')} onNext={() => setScreen('name-input')} />;
  }

  if (screen === 'planet-selection') {
    return <PlanetSelection onBack={() => setScreen('intro')} playerName={playerName} onSelectPlanet={(planet) => {
      if (planet === 'algebra') {
        setScreen('algebra-planet');
      } else if (planet === 'geometry') {
        setScreen('geometry-planet');
      }
    }} />;
  }

  if (screen === 'algebra-planet') {
    return <AlgebraPlanet onBack={() => setScreen('planet-selection')} playerName={playerName} />;
  }

  if (screen === 'geometry-planet') {
    return <GeometryPlanet onBack={() => setScreen('planet-selection')} playerName={playerName} />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Primary cosmic background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjI4NjYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        {/* Secondary galaxy overlay */}
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
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      {/* Floating Planets */}
      <FloatingPlanets />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <h1 className="text-5xl md:text-6xl mb-2 tracking-wider relative">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                WebkitTextStroke: '1px rgba(147, 197, 253, 0.3)',
                letterSpacing: '0.05em'
              }}>
              ROBOMATH
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-cyan-300 tracking-wide"
            style={{
              textShadow: '0 0 20px rgba(103, 232, 249, 0.6), 0 0 40px rgba(103, 232, 249, 0.3)'
            }}
          >
             Khám Phá Vũ Trụ Toán Học Cùng RoboMath!
          </motion.p>
        </motion.div>

        {/* Robot Hero */}
        <div className="scale-75 md:scale-90">
          <RoboMathHero />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center gap-4 mt-4"
        >
          {/* Dialogue Box */}
          <DialogueBox />

          {/* Main Start Button */}
          <GameButton variant="primary" size="large" onClick={() => setScreen('name-input')}>
            🚀 Bắt Đầu Khám Phá!
          </GameButton>

          {/* Secondary Buttons */}
          <div className="flex gap-4">
            <GameButton variant="secondary" size="small" onClick={() => setScreen('how-to-play')}>
              <HelpCircle className="w-5 h-5 mr-2" />
              Luật chơi
            </GameButton>
            <GameButton variant="secondary" size="small">
              <Trophy className="w-5 h-5 mr-2" />
              BXH
            </GameButton>
          </div>
        </motion.div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}