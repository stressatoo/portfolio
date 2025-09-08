import { socials } from "@/config/socials";
import { motion, type Variants } from "framer-motion";

const redirectTo = (url: string) => {
  window.open(url, "_blank");
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const SocialButtons = () => {
  return (
    <motion.div
      className="flex gap-1 my-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socials?.map(({ Icon, url }) => (
        <motion.button
          key={url}
          variants={item}
          aria-label={url}
          onClick={() => redirectTo(url)}
          className="cursor-pointer p-2 hover:scale-110 transition-transform"
        >
          <Icon />
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SocialButtons;
