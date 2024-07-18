import React, { useEffect, useRef } from "react";

import { delay, motion, useAnimation, useInView } from "framer-motion";
const ScrollingMotion = ({ children, styleProps = { delay: 0 } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.25,
          delay: 0.3 + styleProps.delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollingMotion;
