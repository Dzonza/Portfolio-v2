import { motion } from 'motion/react';
const PulsingCircles = () => {
  return (
    <>
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        whileInView={{ scale: [0, 1.3], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        viewport={{ amount: 0 }}
        src="/images/ellipse-small.png"
        alt="small dotted circle"
        className=" absolute top-1/2 left-0 "
      />
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        whileInView={{ scale: [0.27, 1.3], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        viewport={{ amount: 0 }}
        src="/images/ellipse-medium.png"
        alt="small dotted circle"
        className=" absolute top-1/2 left-0 "
      />
      <motion.img
        initial={{ rotate: 180, x: '-50%', y: '-50%' }}
        whileInView={{ scale: [0.4, 1.3], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.3 }}
        viewport={{ amount: 0 }}
        src="/images/ellipse-large.png"
        alt="small dotted circle"
        className=" absolute top-1/2 left-0 "
      />
    </>
  );
};

export default PulsingCircles;
