import React, { FC } from "react";

// TODO These generics could be typed better
export interface StorybookHookComponentProps {
  hook: (...args: any) => any;
  args: any[];
}

export const StorybookHookComponent: FC<StorybookHookComponentProps> = ({
  hook,
  args,
}) => {
  const result = hook(...args);

  return (
    <div>
      <div>Result:</div>

      <code>{JSON.stringify(result)}</code>
    </div>
  );
};
