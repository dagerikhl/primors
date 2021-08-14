import { createElement, FC } from "react";
import styled, { css } from "styled-components";

import { SPACE_SIZES } from "../../../_internal/constants/SPACE_SIZES";
import { Space } from "../../../types/Space";

interface OwnProps {
  // Element
  /**
   * Allows using any element (standard HTML tag) or any React component as the element for this component.
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType;

  // Spacing
  /**
   * Sets the top padding of the `Rig` container.
   */
  top?: Space | boolean;
  /**
   * Sets the right padding of the `Rig` container.
   */
  right?: Space | boolean;
  /**
   * Sets the bottom padding of the `Rig` container.
   */
  bottom?: Space | boolean;
  /**
   * Sets the left padding of the `Rig` container.
   */
  left?: Space | boolean;
}

export type RigProps = OwnProps & React.HTMLAttributes<HTMLElement>;

const StyledRig = styled.div<RigProps>`
  ${({ top, right, bottom, left }) => css`
    ${top &&
    css`
      padding-top: ${top === true ? SPACE_SIZES.medium : SPACE_SIZES[top]}rem;
    `}
    ${right &&
    css`
      padding-right: ${right === true
        ? SPACE_SIZES.medium
        : SPACE_SIZES[right]}rem;
    `}
    ${bottom &&
    css`
      padding-bottom: ${bottom === true
        ? SPACE_SIZES.medium
        : SPACE_SIZES[bottom]}rem;
    `}
    ${left &&
    css`
      padding-left: ${left === true ? SPACE_SIZES.medium : SPACE_SIZES[left]}rem;
    `}
  `}
`;

export const Rig: FC<RigProps> = ({ as = "div", children, ...rest }) =>
  createElement(StyledRig, { ...rest, as }, children);
