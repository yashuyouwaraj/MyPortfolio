import { useState, useEffect } from 'react';

/**
 * Hook to detect if viewport width is below a certain breakpoint (mobile)
 * @param {number} breakpoint - Viewport width breakpoint in pixels (default: 768)
 * @returns {boolean} True if viewport width is less than breakpoint
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    // Check during SSR and initial render
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
