// withScrollAnimation.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const withScrollAnimation = (WrappedComponent) => {
  return (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 2 } });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    }, [controls, inView]);

    return (
      <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withScrollAnimation;
