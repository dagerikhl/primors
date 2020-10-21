import { useEffect, useRef, useState } from "react";

export interface UseDebounceProps<S> {
  /**
   * The `value` to be debounced.
   */
  value: S;
  /**
   * The amount of time the hook waits before debouncing the `value`.
   */
  delay?: number;
}
export type UseDebounce = <S>(
  value: UseDebounceProps<S>["value"],
  delay: UseDebounceProps<S>["delay"]
) => S;

export const useDebounce: UseDebounce = (value, delay = 400) => {
  const delayRef = useRef(delay);
  const debouncedValueRef = useRef<typeof value>();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  const [debouncedValue, setDebouncedValue] = useState(value);

  const clearTimeoutRef = () => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);
  useEffect(() => {
    debouncedValueRef.current = debouncedValue;
  }, [debouncedValue]);

  useEffect(() => {
    if (value === debouncedValueRef.current) {
      return;
    }

    clearTimeoutRef();

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delayRef.current);

    return () => {
      clearTimeoutRef();
    };
  }, [value]);

  return debouncedValue;
};
