import React from "react";
import { FC, AnchorHTMLAttributes } from "react";

const isExternal = (href?: string, target?: string): boolean =>
  !!(href?.startsWith("http") && target === "_blank");

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor: FC<AnchorProps> = ({
  href,
  target,
  children,
  ...rest
}) => (
  <a href={href} target={target} {...rest}>
    {children || href}
    {isExternal(href, target) ? " ↗" : null}
  </a>
);
