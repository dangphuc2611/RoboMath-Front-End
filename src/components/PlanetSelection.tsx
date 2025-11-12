import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FloatingParticles } from './FloatingParticles';
import { GameButton } from './GameButton';
import { SmallRoboMath } from './SmallRoboMath';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface PlanetSelectionProps {
  onBack: () => void;
  playerName?: string;
  onSelectPlanet: (planet: PlanetType) => void;
}

type PlanetType = 'algebra' | 'geometry' | 'challenge' | null;

interface Planet {
  id: PlanetType;
  name: string;
  emoji: string;
  label: string;
  subtitle: string;
  color: string;
  glowColor: string;
  position: { x: string; y: string };
}

const planets: Planet[] = [
  {
    id: 'algebra',
    name: 'Algebra',
    emoji: '🌕',
    label: 'Algebra Planet',
    subtitle: 'Monomials, Polynomials, Identities, Rational Expressions, Probability.',
    color: 'from-cyan-400 via-blue-400 to-green-400',
    glowColor: 'rgba(34, 211, 238, 0.6)',
    position: { x: '15%', y: '35%' }
  },
  {
    id: 'geometry',
    name: 'Geometry',
    emoji: '🌍',
    label: 'Geometry Planet',
    subtitle: 'Quadrilaterals, Thales Theorem, Pythagorean Theorem, Medians, Angle Bisectors.',
    color: 'from-blue-500 via-green-500 to-emerald-400',
    glowColor: 'rgba(34, 197, 94, 0.6)',
    position: { x: '50%', y: '40%' }
  },
  {
    id: 'challenge',
    name: 'Challenge',
    emoji: '🌑',
    label: 'Challenge Planet',
    subtitle: 'Mixed questions – Hard level – Algebra + Geometry.',
    color: 'from-red-900 via-purple-900 to-black',
    glowColor: 'rgba(220, 38, 38, 0.8)',
    position: { x: '75%', y: '35%' }
  }
];

export function PlanetSelection({ onBack, playerName, onSelectPlanet }: PlanetSelectionProps) {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetType>(null);

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
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-blue-900/40" />
      </div>

      {/* Parallax stars */}
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
        <span className="text-lg">Back</span>
      </motion.button>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <h1 className="text-4xl md:text-5xl mb-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}>
            Choose Your Destination
          </span>
        </h1>
        {playerName && (
          <p className="text-cyan-300 text-lg" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
            Welcome, {playerName}!
          </p>
        )}
      </motion.div>

      {/* Planets */}
      <div className="absolute inset-0 z-10">
        {planets.map((planet, index) => (
          <PlanetCard
            key={planet.id}
            planet={planet}
            index={index}
            isSelected={selectedPlanet === planet.id}
            isHovered={hoveredPlanet === planet.id}
            onHover={() => setHoveredPlanet(planet.id)}
            onLeave={() => setHoveredPlanet(null)}
            onClick={() => {
              setSelectedPlanet(planet.id);
              onSelectPlanet(planet.id);
            }}
          />
        ))}
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
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border-2 border-cyan-400/40 p-5 shadow-2xl">
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
                Choose the planet you want to explore!
              </p>
              <p className="text-base text-cyan-200/90"
                style={{ textShadow: '0 0 8px rgba(34, 211, 238, 0.4)' }}>
                Each one is a new math adventure!
              </p>
            </div>
          </div>
        </div>

        {/* Robot */}
        <div className="scale-75">
          <SmallRoboMath />
        </div>
      </motion.div>

      {/* Start Mission Button */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <GameButton variant="primary" size="large">
              🚀 Start Mission
            </GameButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}

interface PlanetCardProps {
  planet: Planet;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

function PlanetCard({ planet, index, isSelected, isHovered, onHover, onLeave, onClick }: PlanetCardProps) {
  const scale = isHovered ? 1.1 : isSelected ? 1.05 : 1;
  const brightness = isHovered ? 1.3 : isSelected ? 1.2 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      style={{
        position: 'absolute',
        left: planet.position.x,
        top: planet.position.y,
        transform: 'translate(-50%, -50%)'
      }}
      className="cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative flex flex-col items-center">
        {/* Planet Visual */}
        <motion.div
          animate={{ 
            scale,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ 
            scale: { duration: 0.3 },
            rotate: { duration: isHovered ? 20 : 0, ease: "linear", repeat: isHovered ? Infinity : 0 }
          }}
          className="relative"
        >
          {/* Selection Ring */}
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.4, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute inset-0 rounded-full border-4 border-cyan-400"
                style={{
                  boxShadow: `0 0 40px ${planet.glowColor}, 0 0 80px ${planet.glowColor}`,
                }}
              />
            )}
          </AnimatePresence>

          {/* Planet Glow */}
          <motion.div
            animate={{
              opacity: isHovered || isSelected ? [0.6, 1, 0.6] : 0.4,
              scale: isHovered || isSelected ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background: `radial-gradient(circle, ${planet.glowColor}, transparent)`,
              transform: 'scale(1.5)',
            }}
          />

          {/* Planet Body */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${planet.color}`}
              animate={{
                filter: `brightness(${brightness})`,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Special effects for each planet */}
            {planet.id === 'algebra' && <AlgebraEffects />}
            {planet.id === 'geometry' && <GeometryEffects />}
            {planet.id === 'challenge' && <ChallengeEffects />}
          </div>

          {/* Floating symbols */}
          {planet.id === 'algebra' && <AlgebraSymbols isActive={isHovered || isSelected} />}
          {planet.id === 'geometry' && <GeometryShapes isActive={isHovered || isSelected} />}
          {planet.id === 'challenge' && <ChallengeSymbols isActive={isHovered || isSelected} />}
        </motion.div>

        {/* Planet Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="mt-6 text-center max-w-xs"
        >
          <h2 className="text-2xl mb-2 text-cyan-100" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
            {planet.emoji} {planet.label}
          </h2>
          <p className="text-sm text-cyan-200/80 leading-relaxed">
            {planet.subtitle}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Planet-specific effects
function AlgebraEffects() {
  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.4), transparent)',
            'radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.4), transparent)',
            'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.4), transparent)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </>
  );
}

function GeometryEffects() {
  return (
    <>
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop")',
          backgroundSize: 'cover',
          mixBlendMode: 'overlay'
        }}
      />
    </>
  );
}

function ChallengeEffects() {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.3), transparent)',
            'radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.3), transparent)',
            'radial-gradient(circle at 70% 70%, rgba(220, 38, 38, 0.3), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.3), transparent)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Lightning effects */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0, 0.6, 0, 0, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      >
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-red-500 to-transparent opacity-70" 
          style={{ transform: 'rotate(15deg)' }} />
      </motion.div>
    </>
  );
}

function AlgebraSymbols({ isActive }: { isActive: boolean }) {
  const symbols = ['x²', 'π', '√', 'Σ', '∫'];
  return (
    <>
      {symbols.map((symbol, i) => {
        const angle = (i * 360) / symbols.length;
        const radius = 100;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute text-cyan-300 text-xl"
            style={{
              left: '50%',
              top: '50%',
              textShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            }}
            animate={{
              x: isActive ? [x * 0.8, x, x * 0.8] : x * 0.8,
              y: isActive ? [y * 0.8, y, y * 0.8] : y * 0.8,
              opacity: isActive ? [0.5, 1, 0.5] : 0.4,
              scale: isActive ? [0.8, 1.2, 0.8] : 0.8,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {symbol}
          </motion.div>
        );
      })}
    </>
  );
}

function GeometryShapes({ isActive }: { isActive: boolean }) {
  const shapes = [
    { type: 'square', rotation: 0 },
    { type: 'triangle', rotation: 120 },
    { type: 'circle', rotation: 240 },
  ];
  
  return (
    <>
      {shapes.map((shape, i) => {
        const angle = (i * 360) / shapes.length;
        const radius = 95;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: isActive ? [x * 0.8, x, x * 0.8] : x * 0.8,
              y: isActive ? [y * 0.8, y, y * 0.8] : y * 0.8,
              opacity: isActive ? [0.5, 1, 0.5] : 0.4,
              rotate: isActive ? [0, 360] : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {shape.type === 'square' && (
              <div className="w-8 h-8 border-3 border-green-400 rotate-45"
                style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.6)' }} />
            )}
            {shape.type === 'triangle' && (
              <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-blue-400"
                style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))' }} />
            )}
            {shape.type === 'circle' && (
              <div className="w-8 h-8 rounded-full border-3 border-cyan-400"
                style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }} />
            )}
          </motion.div>
        );
      })}
    </>
  );
}

function ChallengeSymbols({ isActive }: { isActive: boolean }) {
  return (
    <>
      {[...Array(6)].map((_, i) => {
        const angle = (i * 360) / 6;
        const radius = 100;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: isActive ? [x * 0.7, x * 1.1, x * 0.7] : x * 0.7,
              y: isActive ? [y * 0.7, y * 1.1, y * 0.7] : y * 0.7,
              opacity: isActive ? [0.3, 0.8, 0.3] : 0.2,
              scale: isActive ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          >
            <Sparkles className="w-6 h-6 text-red-400" 
              style={{ filter: 'drop-shadow(0 0 8px rgba(248, 113, 113, 0.8))' }} />
          </motion.div>
        );
      })}
    </>
  );
}