import { motion } from "motion/react";
export const Button = ({ title }) => {
  return (
    <motion.button whileTap={{ scale: 0.9 }} className="main-button">
      {title}
    </motion.button>
  );
};
