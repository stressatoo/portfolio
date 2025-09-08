import Header from "@/components/Header";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          // custom cubic bezier easing
          ease: [0.65, 0, 0.35, 1],
        }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-1 mx-auto w-full max-w-3xl px-4">
          <Outlet />
        </main>
      </motion.div>
    </div>
  );
};

export default MainLayout;
