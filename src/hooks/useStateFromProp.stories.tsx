import { Story, Meta } from "@storybook/react";
import React, { FC } from "react";
import { StorybookHookResult } from "../_internal/components/StorybookHookResult/StorybookHookResult";
import { useStateFromProp, UseStateFromPropProps } from "./useStateFromProp";

export default {
  title: "Hooks/useStateFromProp",
  component: (useStateFromProp as unknown) as FC<UseStateFromPropProps<string>>,
  parameters: {
    docs: {
      description: {
        component: `\
Functions exactly like React's \`useState\` hook (see https://reactjs.org/docs/hooks-reference.html#usestate),
but it listens for changes of the passed prop value. This can be very useful in some cases.

But beware! If you pass something like an object or array that is generated every render, this will cause an eternal loop!`,
      },
    },
  },
  argTypes: {
    prop: {
      description:
        "The initial value to use, as well as the value to listen for changes on.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
  },
} as Meta;

const Template: Story<UseStateFromPropProps<string>> = (args) => {
  return (
    <StorybookHookResult hook={useStateFromProp} args={Object.values(args)} />
  );
};

export const UseStateFromProp = Template.bind({});
UseStateFromProp.args = {
  prop: "Initial prop",
};
