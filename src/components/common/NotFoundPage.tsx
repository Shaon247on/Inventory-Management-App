"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';
import { containerVariants2, floatingVariants, glowVariants, itemVariants } from '../animations/AnimatedCounter';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Generate deterministic positions to avoid hydration errors
  const generateDeterministicPositions = () => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      // Use a simple deterministic formula based on index
      const x = (i * 17 + 23) % 100; // Some arbitrary math for distribution
      const y = (i * 31 + 47) % 100;
      positions.push({ x, y, delay: (i * 0.3) % 5 });
    }
    return positions;
  };

  const [backgroundElements] = useState(generateDeterministicPositions());

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + (i % 3), // Vary duration based on index
                repeat: Infinity,
                delay: element.delay
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      />

      <motion.div
        className="text-center z-10 px-6 max-w-4xl mx-auto"
        variants={containerVariants2}
        initial="hidden"
        animate="visible"
      >
        {/* Floating icon */}
        <motion.div
          className="flex justify-center mb-8"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="relative">
            <Sparkles className="w-16 h-16 text-yellow-400" />
            <motion.div
              className="absolute inset-0 w-16 h-16 border-2 border-yellow-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-none select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            404
          </motion.h1>
          <motion.div
            className="absolute inset-0 text-9xl md:text-[12rem] font-black text-white opacity-10 blur-sm"
            animate={{
              x: [0, 5, -5, 0],
              y: [0, -5, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Oops! Page Not
          <motion.span
            className="inline-block text-yellow-400 ml-3"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Found
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          The page you&apos;re looking for seems to have vanished into the digital void.
          Don&apos;t worry though, even the best explorers sometimes take a wrong turn.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => router.push('/')}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Back to Home
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              layoutId="buttonGlow"
            />
          </motion.button>

          <motion.button
            onClick={() => router.back()}
            className="group px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Animated line */}
        <motion.div
          className="mt-16 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;