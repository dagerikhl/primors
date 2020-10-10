import { createElement, FC, ReactHTML } from "react";
import styled, { css } from "styled-components";
import { spaceSizes } from "../../_internal/constants/spaceSizes";
import { FlexAlign } from "../../types/FlexAlign";
import { FlexDirection } from "../../types/FlexDirection";
import { FlexJustify } from "../../types/FlexJustify";
import { Space } from "../../types/Space";

export interface RigProps {
  element?: keyof ReactHTML;
  // Flex
  direction?: FlexDirection;
  wrap?: boolean;
  justify?: FlexJustify;
  align?: FlexAlign;
  // Spacing
  top?: Space;
  right?: Space;
  bottom?: Space;
  left?: Space;
}

const RigComponent: FC<RigProps> = ({ element = "div", children, ...rest }) =>
  createElement(element as string, rest, children);

export const Rig = styled(RigComponent)<RigProps>`
  display: flex;

  ${({ direction, wrap, justify, align }) => css`
    ${direction &&
    css`
      flex-direction: ${direction};
      align-items: ;
    `}

    ${wrap &&
    css`
      flex-wrap: wrap;
    `}
      ${wrap === false &&
    css`
      flex-wrap: nowrap;
    `}

      ${justify &&
    css`
      justify-content: ${justify};
    `}

      ${align &&
    css`
      align-items: ${align};
    `}
  `}

  ${({ top, right, bottom, left }) => css`
    ${top &&
    css`
      padding-top: ${spaceSizes[top]}rem;
    `}
    ${right &&
    css`
      padding-right: ${spaceSizes[right]}rem;
    `}
    ${bottom &&
    css`
      padding-bottom: ${spaceSizes[bottom]}rem;
    `}
    ${left &&
    css`
      padding-left: ${spaceSizes[left]}rem;
    `}
  `}
`;
