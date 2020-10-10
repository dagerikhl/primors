import React, { FC } from "react";

export interface StorybookHookResultProps {
  hookResult: unknown;
}

export const StorybookHookResult: FC<StorybookHookResultProps> = ({
  hookResult,
}) => (
  <div>
    <div>Result:</div>

    <code>{JSON.stringify(hookResult)}</code>
  </div>
);
