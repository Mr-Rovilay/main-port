import { motion } from "framer-motion";

const CoderAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          color: "rgba(255, 255, 255, 0.1)",
          fontSize: "20px",
          whiteSpace: "pre",
          fontFamily: "monospace",
          background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
          padding: "20px",
        }}
      >
        {`const coderAnimation = () => {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <p>Animating Code</p>
    </motion.div>
  );
};`}
      </motion.div>
    </div>
  );
};

export default CoderAnimation;
