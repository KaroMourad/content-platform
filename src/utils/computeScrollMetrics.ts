/**
 * Computes scroll metrics for a given HTMLDivElement reference.
 *
 * @param {React.RefObject<HTMLDivElement>} ref - A React ref object pointing to an HTMLDivElement.
 * @param {number} buffer - The buffer size as a percentage of the client height.
 * @returns {Object} An object containing:
 *   - scrollTop {number}: Vertical scroll position in pixels.
 *   - clientHeight {number}: Height of the element's content area in pixels.
 *   - bufferHeight {number}: Height of the buffer zone in pixels.
 *   - scrollHeight {number}: Total height of the element's content.
 */
const computeScrollMetrics = (
  ref: React.RefObject<HTMLDivElement>,
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
