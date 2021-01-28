import styled, { css } from "styled-components";

interface StoryCodeProps {
  block?: boolean;
}

export const StoryCode = styled.code<StoryCodeProps>`
  ${({ block }) =>
    block
      ? css`
          display: block;

          margin: 0.5rem 0;
          padding: 1rem;

          line-height: 1.5rem;
        `
      : css`
          padding: 0 0.5rem;
        `}

  background-color: #f4f4f4;
  border: 1px solid #555555;
  border-radius: 4px;
`;
