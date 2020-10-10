import { Story, Meta } from "@storybook/react";
import React from "react";
import { StorybookHookComponent } from "../_internal/StorybookHookComponent/StorybookHookComponent";
import { useStateFromProp, UseStateFromPropProps } from "./useStateFromProp";

export default {
  title: "Hooks/useStateFromProp",
  // TODO Should not show the `hook` and `args` props in story
  component: StorybookHookComponent,
} as Meta;

const Template: Story<UseStateFromPropProps<string>> = (args) => {
  return <StorybookHookComponent hook={useStateFromProp} args={[args.prop]} />;
};

export const UseStateFromProp = Template.bind({});
UseStateFromProp.args = {
  prop: "Initial prop",
};
