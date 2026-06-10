import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/\D/g, ''), 10);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </motion.span>
  );
}
