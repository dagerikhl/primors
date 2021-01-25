import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export interface UseDebouncedStateProps<S> {
  /**
   * The `initialValue` of the state.
   */
  initialValue: S;
  /**
   * The amount of time the hook waits before debouncing the `value` set.
   */
  delay?: number;
}
interface Result<S> {
  value: S;
  debouncedValue: S;
}
export type UseDebouncedState = <S>(
  initialValue: UseDebouncedStateProps<S>["initialValue"],
  delay?: UseDebouncedStateProps<S>["delay"]
) => [Result<S>, Dispatch<SetStateAction<S>>];

export const useDebouncedState: UseDebouncedState = (
  initialValue,
  delay = 400
) => {
  const delayRef = useRef(delay);
  const debouncedValueRef = useRef<typeof initialValue>();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

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

  return [{ value, debouncedValue }, setValue];
};
