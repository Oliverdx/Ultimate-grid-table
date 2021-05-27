import { useCallback, useEffect } from "react";

export default function useDebounce(effect, delay) {
  const callback = useCallback(effect);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
}
