/**
 * Creates a debounced version of a function that delays the invocation
 * of the function until after a specified wait time has elapsed
 * since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns A new debounced function.
 */
const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  delay: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default debounce;
