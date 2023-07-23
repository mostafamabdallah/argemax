import React, { ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
type Props = {
  children: ReactNode;
};

const Animation = ({ children }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visable");
    }
    console.log(inView);
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 200,
          },

          visable: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        initial="hidden"
        animate={animation}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
