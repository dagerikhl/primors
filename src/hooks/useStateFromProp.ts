import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export interface UseStateFromPropProps<S> {
  /**
   * The initial value to use, as well as the value to listen for changes on.
   */
  prop: S;
}
export type UseStateFromProp = <S>(
  prop: UseStateFromPropProps<S>["prop"]
) => [S, Dispatch<SetStateAction<S>>];

export const useStateFromProp: UseStateFromProp = (prop) => {
  const valueRef = useRef<typeof prop>();

  const [value, setValue] = useState(prop);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    if (prop === valueRef.current) {
      return;
    }

    setValue(prop);
  }, [prop]);

  return [value, setValue];
};
