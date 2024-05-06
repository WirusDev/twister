import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ModalDialogScrollable from "./AddPlayers";
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function NewMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className='menu filter drop-shadow-md w-300 h-300 bg-accent p-5 rounded-md fixed top-10 right-10 z-50'
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className='button inline-flex bg-main-grey p-1'
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className='w-[15] h-[15] ml-2'
        >
          <svg width='15' height='15' viewBox='0 0 20 20'>
            <path d='M0 7 L 20 7 L 10 16' />
          </svg>
        </motion.div>
      </motion.button>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className='flex flex-col gap-10 bg-accent bg-main-grey p-5 rounded-md   w-[150px]'
      >
        <motion.li
          variants={itemVariants}
          className='text-background w-full flex items-center justify-center'
        >
          <ModalDialogScrollable />
        </motion.li>
        <motion.li variants={itemVariants} className='text-background'>
          Item 2
        </motion.li>
        <motion.li variants={itemVariants} className='text-background'>
          Item 3
        </motion.li>
        <motion.li variants={itemVariants} className='text-background'>
          Item 4
        </motion.li>
        <motion.li variants={itemVariants} className='text-background'>
          Item 5
        </motion.li>
      </motion.ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='button inline-flex bg-main-grey p-1'
      >
        Menu
        <div className='w-[15] h-[15] ml-2'>
          <svg width='15' height='15' viewBox='0 0 20 20'>
            <path d='M0 7 L 20 7 L 10 16' />
          </svg>
        </div>
      </button>
    </motion.nav>
  );
}
