import { createElement, FC } from "react";
import styled, { css } from "styled-components";
import { spaceSizes } from "../../_internal/constants/spaceSizes";
import { FlexAlign } from "../../types/FlexAlign";
import { FlexDirection } from "../../types/FlexDirection";
import { FlexJustify } from "../../types/FlexJustify";
import { Space } from "../../types/Space";

export interface RigProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType;
  // Flex
  flexDirection?: FlexDirection;
  flexWrap?: boolean;
  flexJustify?: FlexJustify;
  flexAlign?: FlexAlign;
  // Spacing
  top?: Space;
  right?: Space;
  bottom?: Space;
  left?: Space;
}

const StyledRig = styled.div<RigProps>`
  ${({ flexDirection, flexWrap, flexJustify, flexAlign }) => css`
    ${(flexDirection || flexWrap || flexJustify || flexAlign) &&
    css`
      display: flex;
    `}

    ${flexDirection &&
    css`
      flex-direction: ${flexDirection};
      align-items: ;
    `}

    ${flexWrap &&
    css`
      flex-wrap: wrap;
    `}
      ${flexWrap === false &&
    css`
      flex-wrap: nowrap;
    `}

      ${flexJustify &&
    css`
      justify-content: ${flexJustify};
    `}

      ${flexAlign &&
    css`
      align-items: ${flexAlign};
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

export const Rig: FC<RigProps> = ({ as = "div", children, ...rest }) =>
  createElement(StyledRig, { ...rest, as }, children);
