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
  }, [isInView, mainControls]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.25,
        delay: 0.3 + styleProps.delay,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default ScrollingMotion;
