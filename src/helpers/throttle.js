export default function throttle() {
  let throttleTimer;
  return (timeout, cb, ...cbArgs) => {
    if (throttleTimer) return; 
    throttleTimer = true;
    setTimeout(() => {
      cb(...cbArgs);
      throttleTimer = false;
    }, timeout);
  };
}