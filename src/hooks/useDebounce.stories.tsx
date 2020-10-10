import { Story, Meta } from "@storybook/react";
import React from "react";
import { StorybookHookComponent } from "../_internal/StorybookHookComponent/StorybookHookComponent";
import { useDebounce, UseDebounceProps } from "./useDebounce";

export default {
  title: "Hooks/useDebounce",
  // TODO Should not show the `hook` and `args` props in story
  component: StorybookHookComponent,
} as Meta;

const Template: Story<UseDebounceProps<string>> = (args) => {
  const hook = useDebounce;

  const result = hook(args.value, args.delay);

  return (
    <div>
      <div>Result:</div>

      <code>{JSON.stringify(result)}</code>
    </div>
  );
};

export const UseDebounce = Template.bind({});
UseDebounce.args = {
  value: "Initial value",
  delay: 400,
};
