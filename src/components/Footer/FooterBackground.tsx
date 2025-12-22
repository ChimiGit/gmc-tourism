import { motion } from 'framer-motion';

export default function FooterBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-muted pointer-events-none absolute top-1/2 left-1/2 z-0
                 -translate-x-1/2 -translate-y-1/2
                 text-[200px] font-bold whitespace-nowrap select-none
                 md:text-[300px]"
    >
      GMC
    </motion.div>
  );
}
