import { Story, Meta } from "@storybook/react";
import React from "react";
import { StorybookHookResult } from "../_internal/components/StorybookHookResult/StorybookHookResult";
import { useStateFromProp, UseStateFromPropProps } from "./useStateFromProp";

export default {
  title: "Hooks/useStateFromProp",
  component: StorybookHookResult,
} as Meta;

const Template: Story<UseStateFromPropProps<string>> = ({ prop }) => {
  const result = useStateFromProp(prop);

  return <StorybookHookResult hookResult={result} />;
};

export const UseStateFromProp = Template.bind({});
UseStateFromProp.args = {
  prop: "Initial prop",
};
