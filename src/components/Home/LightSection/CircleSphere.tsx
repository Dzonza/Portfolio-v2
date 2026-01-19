import { motion } from 'motion/react';

const CircleSphere = () => {
  const rings = 12;

  return (
    <div className="absolute bottom-0 right-1/2  lg:top-1/2 lg:right-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
      {Array.from({ length: rings }).map((_, i) => {
        const size = 200 - i * 10;
        const delay = i * 0.15;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full border border-purple-400/60"
            style={{
              width: size,
              height: size,
              boxShadow: '0 0 20px rgba(168,85,247,0.2)',
            }}
            whileInView={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.1, 1],
            }}
            viewport={{ amount: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default CircleSphere;
