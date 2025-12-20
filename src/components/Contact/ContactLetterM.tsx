import { motion } from 'motion/react';

const ContactLetterM = () => {
  return (
    <>
      <motion.img
        whileInView={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[20%] right-[25%]"
        src="/images/contact-m-shadow.png"
        alt="n letter dark"
      />
      <motion.img
        whileInView={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[24%] right-[25%]"
        src="/images/contact-m-letter.png"
        alt="n letter"
      />
    </>
  );
};

export default ContactLetterM;
