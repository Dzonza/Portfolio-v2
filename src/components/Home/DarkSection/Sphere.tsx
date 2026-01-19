import { motion } from 'motion/react';

const Sphere = () => {
  return (
    <div className="absolute top-0 left-1/2 lg:top-1/2 lg:left-0 -translate-y-1/2 -translate-x-1/2">
      <motion.div
        className="w-48 h-48 rounded-full"
        style={{
          background: `
        radial-gradient(circle at 30% 30%, #ffffff88, #a855f7 30%, #4c1d95 60%, #1a0b2e)
      `,
          boxShadow: `
        0 0 50px #a855f766,
        0 0 90px #6d28d9aa,
        inset 0 0 40px #ffffff10
      `,
          filter: 'blur(0.4px)',
        }}
        whileInView={{
          scale: [1.05, 1.15, 1.05],
          opacity: [1, 0.85, 1],
          rotate: [0, 2, 0, -2, 0],
        }}
        viewport={{ amount: 0 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default Sphere;
