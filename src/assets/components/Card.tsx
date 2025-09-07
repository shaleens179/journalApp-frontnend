import { motion } from "framer-motion";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-dark rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition"
    >
      <h2 className="text-xl font-bold text-primary dark:text-accent mb-3">
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </motion.div>
  );
}
