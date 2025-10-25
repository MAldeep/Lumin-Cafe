import {  motion } from "framer-motion";
interface Props {
  step : number;
  stepTitles : string[];
}
export default function ProgressionBar({step , stepTitles} : Props) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 2, ease: ["easeInOut"] }}
      className="w-full lg:w-1/2 mb-6 bg-amber-100 p-3 rounded-3xl shadow-2xl hover:shadow-none duration-150 transition-all"
    >
      <div className="flex justify-between items-center mb-2">
        {step <= 3 ? (
          <p className="text-sm text-gray-600 font-medium">
            Step{" "}
            <span className="text-sm text-amber-900 font-bold bg-amber-300 px-2 py-1 rounded-3xl">
              {step}
            </span>{" "}
            of 3
          </p>
        ) : (
          <p className="text-sm text-green-600 font-medium">Completed 🎉</p>
        )}
        {step <= 3 && (
          <p className="text-sm text-gray-500">{stepTitles[step - 1]}</p>
        )}
      </div>

      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-2 bg-amber-900 rounded-full"
          initial={{ width: 0 }}
          animate={{
            width:
              step === 1
                ? "33%"
                : step === 2
                ? "66%"
                : step === 3
                ? "100%"
                : "100%",
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
