import { FC } from "react";
import styled, { css } from "styled-components";

import { FlexAlignContent } from "../../../types/FlexAlignContent";
import { FlexAlignItems } from "../../../types/FlexAlignItems";
import { FlexDirection } from "../../../types/FlexDirection";
import { FlexJustifyContent } from "../../../types/FlexJustifyContent";
import { Rig, RigProps } from "../Rig/Rig";

interface OwnProps {
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  direction?: FlexDirection;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  wrap?: boolean;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?: FlexJustifyContent;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?: FlexAlignContent;
  /**
   * See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?: FlexAlignItems;
}

export type FlexRigProps = OwnProps &
  RigProps &
  React.HTMLAttributes<HTMLElement>;

interface StyledOwnProps {
  $wrap?: boolean;
}

const StyledRig = styled(Rig)<FlexRigProps & StyledOwnProps>`
  ${({ direction, $wrap, justifyContent, alignContent, alignItems }) => css`
    ${(direction || $wrap || justifyContent || alignContent || alignItems) &&
    css`
      display: flex;
    `}

    ${direction &&
    css`
      flex-direction: ${direction};
    `}

    ${$wrap &&
    css`
      flex-wrap: wrap;
    `}
    ${$wrap === false &&
    css`
      flex-wrap: nowrap;
    `}

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

    ${alignContent &&
    css`
      align-content: ${alignContent};
    `}

    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}
  `}
`;

export const FlexRig: FC<FlexRigProps> = ({ wrap, children, ...rest }) => (
  <StyledRig $wrap={wrap} {...rest} data-testid="flex-rig">
    {children}
  </StyledRig>
);
