import { FC } from "react";
import styled, { css } from "styled-components";

export interface SarcasmProps {
  /**
   * Determines the level of sarcasm to be employed. The higher the level, the more snarky the remark.
   * ""Normally"" levels should be between 1-10, but more sarcasm _is_ possible.
   * Be aware: Above level 10, the text itself will start to mutate.
   */
  level?: number;
  children?: string;
}

interface SvgProps {
  className?: string;
  level: number;
}
const StyledSvg: FC<SvgProps> = ({ className, level }) => (
  <svg className={className} viewBox="0 0 0 0" height={0} width={0}>
    <defs>
      <filter id={`squiggly-${level}`}>
        <feTurbulence
          id={`turbulence${Math.min(5, Math.max(1, level))}`}
          baseFrequency="0.005"
          numOctaves="3"
          result="noise"
          seed={level - 1}
        />
        <feDisplacementMap
          id="displacement"
          in="SourceGraphic"
          scale={1 + level * 0.1}
        />
      </filter>
    </defs>
  </svg>
);

interface StyledSarcasmProps {
  level: number;
}
const StyledSarcasm = styled.span<StyledSarcasmProps>`
  display: inline-block;

  ${({ level }) =>
    css`
      transform: skew(${Math.min(6 + level * 3, 35)}deg);
      filter: url(#squiggly-${level});
    `}
`;

/**
 * Adds a sarcastic sting to your text.
 */
export const Sarcasm = ({
  level = 1,
  children,
}: SarcasmProps): JSX.Element | null => {
  if (typeof children === "undefined") {
    return null;
  }

  let displayText = children;

  if (level > 10) {
    displayText = children;

    if (level > 10) {
      displayText = displayText
        .replace(/really/g, "REALLY")
        .replace(/too/g, "tooo");
    }
    if (level > 12) {
      displayText = displayText
        .replace(/so/g, "soo")
        .replace(/too/g, "toOOoo")
        .replace(/see/g, "seee");
    }
    if (level > 15) {
      displayText = displayText
        .replace(/you/gi, "..you")
        .replace(/extremely/g, "extreemely")
        .replace(/absolutely/g, "absoluutely");
    }
    if (level > 18) {
      displayText = displayText
        .replace(/(^I)|( I )/g, " i ")
        .replace(/thank you/g, '"thank you"')
        .replace(/miss/gi, '"miss"');
      displayText += "...";
    }
  }

  return (
    <>
      <StyledSvg level={level} />

      <StyledSarcasm level={level}>{displayText}</StyledSarcasm>
    </>
  );
};
