import { motion } from 'motion/react';
import type { FC } from 'react';
const ContactLetterN: FC = () => {
  return (
    <>
      <motion.img
        whileInView={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[20%] top-[32%]"
        src="/images/contact-n-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        whileInView={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[21%] top-[28%]"
        src="/images/contact-n-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default ContactLetterN;
