import { useEffect } from 'react';

export default function useScrollThrottle(fn: () => void, delay = 500) {
  let throttleInProgress = false;

  function handleThrottleScroll() {
    if (throttleInProgress) return;
    throttleInProgress = true;

    setTimeout(() => {
      fn();
      throttleInProgress = false;
    }, delay);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleThrottleScroll);

    return () => {
      window.removeEventListener('scroll', handleThrottleScroll);
    };
  }, []);
}
