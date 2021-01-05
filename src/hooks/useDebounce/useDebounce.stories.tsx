import { Story, Meta } from "@storybook/react";
import React, { FC } from "react";
import { StorybookHookResult } from "../../_internal/components/StorybookHookResult/StorybookHookResult";
import { useDebounce, UseDebounceProps } from "./useDebounce";

export default {
  title: "Hooks/useDebounce",
  component: (useDebounce as unknown) as FC<UseDebounceProps<string>>,
  parameters: {
    docs: {
      description: {
        component: `Debounces the value it's passed by a certain delay.`,
      },
    },
  },
  argTypes: {
    value: {
      description: "The `value` to be debounced.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    delay: {
      description:
        "The amount of time the hook waits before debouncing the `value`.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 400,
        },
      },
    },
  },
} as Meta;

// TODO The story re-renders the hook straight away, not allowing the debounce to kick in
const Template: Story<UseDebounceProps<string>> = (args) => {
  return <StorybookHookResult hook={useDebounce} args={Object.values(args)} />;
};

export const UseDebounce = Template.bind({});
UseDebounce.args = {
  value: "Initial value",
  delay: 400,
};
