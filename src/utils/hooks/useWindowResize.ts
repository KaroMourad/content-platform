import { useEffect } from "react";
import { throttle } from "lodash-es";

/**
 * Custom hook to handle window resize events.
 * @param callback - Function to be called on resize.
 * @param delay - Throttle delay in milliseconds.
 */
const useWindowResize = (callback: () => void, delay: number = 50) => {
  useEffect(() => {
    const throttledCallback = throttle(callback, delay);

    window.addEventListener("resize", throttledCallback);

    return () => {
      window.removeEventListener("resize", throttledCallback);
      throttledCallback.cancel();
    };
  }, [callback, delay]);
};

export default useWindowResize;
