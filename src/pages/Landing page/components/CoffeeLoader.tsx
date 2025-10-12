import { motion } from "framer-motion";
import { Coffee } from "lucide-react"; 

export default function CoffeeLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1E1E1E] text-[#DAB67B]">
      {/* Coffee cup */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="relative"
      >
        <Coffee size={80} strokeWidth={1.5} />

        {/* Steam animation */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-[6px] h-[18px] bg-[#DAB67B]/80 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-5, -20, -30],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.3,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Text below */}
      <motion.p
        className="mt-8 text-lg font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Brewing your experience...
      </motion.p>
    </div>
  );
}
