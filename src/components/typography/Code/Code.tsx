import { FC } from "react";
import styled, { css } from "styled-components";

export interface CodeProps {
  /**
   * Determines if the code should be displayed inline or as a block on its own lines.
   */
  block?: boolean;
}

const StyledCode = styled.code<CodeProps>`
  border: 1px solid #555555;
  border-radius: 4px;

  ${({ block }) =>
    block
      ? css`
          display: block;

          margin: 0.5rem 0;
          padding: 0.5rem;

          white-space: pre-wrap;
        `
      : css`
          padding: 0 0.25rem;
        `}
`;

/**
 * Creates a code block to display code in. No syntax highlighting.
 */
export const Code: FC<CodeProps> = (props) => <StyledCode {...props} />;
