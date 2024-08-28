import { RefObject } from "react";

/**
 * Compute scroll metrics for a given container element.
 * @param ref - The ref of the container element.
 * @param buffer - The buffer percentage for the scroll height.
 */
const computeScrollMetrics = (
  ref: RefObject<HTMLDivElement>,
  buffer: number
) => {
  if (!ref.current)
    return { scrollTop: 0, clientHeight: 0, bufferHeight: 0, scrollHeight: 0 };

  const scrollTop = ref.current.scrollTop;
  const clientHeight = ref.current.clientHeight;
  const bufferHeight = (buffer / 100) * clientHeight;
  const scrollHeight = ref.current.scrollHeight;

  return { scrollTop, clientHeight, bufferHeight, scrollHeight };
};

export default computeScrollMetrics;
