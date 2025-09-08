import * as React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export function NameTyping() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hovered, setHovered] = React.useState(false);

  const base = "Ale";
  const extra = "ssandro";

  return (
    <h1
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] relative inline-block w-max"
    >
      {/* typing effect per "Ale" */}
      {base.split("").map((letter, index) => (
        <motion.span
          key={`base-${index}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}

      {/* typing effect per "ssandro" solo all'hover */}
      <AnimatePresence mode="wait">
        {hovered &&
          extra.split("").map((letter, index) => (
            <motion.span
              key={`extra-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
      </AnimatePresence>
    </h1>
  );
}
