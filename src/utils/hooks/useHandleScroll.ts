import { RefObject, useEffect } from "react";

import { throttle } from "lodash-es";

/**
 * Custom hook to handle scroll events on a specified container.
 * @param containerRef - The ref of the container element.
 * @param callback - Function to be called on scroll.
 * @param delay - Debounce delay in milliseconds.
 */
const useHandleScroll = (
  containerRef: RefObject<HTMLElement>,
  callback: (scrollTop: number, scrollLeft: number) => void,
  delay: number = 50
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const handleScroll = () => {
      if (typeof callback === "function") {
        callback(container.scrollTop, container.scrollLeft);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, delay);
    container.addEventListener("scroll", throttledHandleScroll);
    return () => {
      container.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [containerRef, delay, callback]);
};

export default useHandleScroll;
