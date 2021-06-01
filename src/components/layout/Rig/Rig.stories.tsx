import { Story, Meta } from "@storybook/react";
import React from "react";

import { Rig, RigProps } from "./Rig";

export default {
  // TODO Read this from the folder hierarchy
  title: "Components/Layout/Rig",
  component: Rig,
  parameters: {
    docs: {
      description: {
        component: `\
Provides easy ways to manipulate the layout of this element and its children.

Think of it as a supercharged \`div\`.

Allows rendering as any element you choose and control its own padding via props.\
`,
      },
    },
  },
} as Meta;

const Template: Story<RigProps> = (args) => (
  <Rig {...args}>
    <div>I am contained in a Rig!</div>
  </Rig>
);

export const As = Template.bind({});
As.args = {
  as: "button",
};

export const Spacing = Template.bind({});
Spacing.args = {
  top: "xx-large",
  left: "small",
  right: true,
};
