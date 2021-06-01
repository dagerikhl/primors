import { createElement, FC } from "react";
import styled, { css } from "styled-components";
import { spaceSizes } from "../../../_internal/constants/spaceSizes";
import { FlexAlignContent } from "../../../types/FlexAlignContent";
import { FlexAlignItems } from "../../../types/FlexAlignItems";
import { FlexDirection } from "../../../types/FlexDirection";
import { FlexJustifyContent } from "../../../types/FlexJustifyContent";
import { Space } from "../../../types/Space";

interface OwnProps {
  /**
   * Allows using any element (standard HTML tag) or any React component as the element for this component.
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType;

  // Flex
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirection;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  flexWrap?: boolean;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  flexJustifyContent?: FlexJustifyContent;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  flexAlignContent?: FlexAlignContent;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  flexAlignItems?: FlexAlignItems;

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
  ${({
    flexDirection,
    flexWrap,
    flexJustifyContent,
    flexAlignContent,
    flexAlignItems,
  }) => css`
    ${(flexDirection ||
      flexWrap ||
      flexJustifyContent ||
      flexAlignContent ||
      flexAlignItems) &&
    css`
      display: flex;
    `}

    ${flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}

    ${flexWrap &&
    css`
      flex-wrap: wrap;
    `}
      ${flexWrap === false &&
    css`
      flex-wrap: nowrap;
    `}

      ${flexJustifyContent &&
    css`
      justify-content: ${flexJustifyContent};
    `}

      ${flexAlignContent &&
    css`
      align-content: ${flexAlignContent};
    `}

      ${flexAlignItems &&
    css`
      align-items: ${flexAlignItems};
    `}
  `}

  ${({ top, right, bottom, left }) => css`
    ${top &&
    css`
      padding-top: ${top === true ? spaceSizes.medium : spaceSizes[top]}rem;
    `}
    ${right &&
    css`
      padding-right: ${right === true
        ? spaceSizes.medium
        : spaceSizes[right]}rem;
    `}
    ${bottom &&
    css`
      padding-bottom: ${bottom === true
        ? spaceSizes.medium
        : spaceSizes[bottom]}rem;
    `}
    ${left &&
    css`
      padding-left: ${left === true ? spaceSizes.medium : spaceSizes[left]}rem;
    `}
  `}
`;

export const Rig: FC<RigProps> = ({ as = "div", children, ...rest }) =>
  createElement(StyledRig, { ...rest, as }, children);
