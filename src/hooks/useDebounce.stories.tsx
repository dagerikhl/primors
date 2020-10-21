import { Story, Meta } from "@storybook/react";
import React from "react";
import { StorybookHookResult } from "../_internal/components/StorybookHookResult/StorybookHookResult";
import { useDebounce, UseDebounceProps } from "./useDebounce";

export default {
  title: "Hooks/useDebounce",
  component: StorybookHookResult,
  parameters: {
    docs: {
      description: {
        component: `Debounces the value it's passed by a certain delay.`,
      },
    },
  },
} as Meta;

const Template: Story<UseDebounceProps<string>> = ({ value, delay }) => {
  const result = useDebounce(value, delay);

  return <StorybookHookResult hookResult={result} />;
};

export const UseDebounce = Template.bind({});
UseDebounce.args = {
  value: "Initial value",
  delay: 400,
};
