import React, { FC } from "react";

export interface StorybookHookResultProps<Args extends Array<unknown>, Result> {
  hook: (...args: Args) => Result;
  args: Args;
}

export const StorybookHookResult: FC<StorybookHookResultProps<
  unknown[],
  unknown
>> = ({ hook, args }) => {
  const result = hook(...args);

  return (
    <div>
      <div>
        <div>Arguments:</div>
        <code>{JSON.stringify(args)}</code>
      </div>

      <br />

      <div>
        <div>Result:</div>
        <code>{JSON.stringify(result)}</code>
      </div>
    </div>
  );
};
