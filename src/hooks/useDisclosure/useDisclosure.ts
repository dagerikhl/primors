import { useCallback } from "react";
import { useStateFromProp } from "../state/useStateFromProp/useStateFromProp";

export interface UseDisclosureProps {
  /**
   * The initial value for `isOpen`. Set to `true` to start as open.
   * Note: The `isOpen` state will change if this prop receives another value.
   */
  initialIsOpen?: boolean;
}
interface Result {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}
export type UseDisclosure = (
  initialIsOpen: UseDisclosureProps["initialIsOpen"]
) => Result;

export const useDisclosure: UseDisclosure = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useStateFromProp(initialIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const onToggle = useCallback(() => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }, [setIsOpen]);

  return { isOpen, onOpen, onClose, onToggle };
};
