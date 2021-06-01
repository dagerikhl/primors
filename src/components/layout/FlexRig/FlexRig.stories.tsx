import { Story, Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { FlexRig, FlexRigProps } from "./FlexRig";

export default {
  title: "Components/Layout/FlexRig",
  component: FlexRig,
  parameters: {
    docs: {
      description: {
        component: `\
Provides easy ways to layout a flex container.

It utilizes the common props of the \`Rig\` component as well.\
`,
      },
    },
  },
} as Meta;

const Item = styled.div`
  padding: 4px 8px;

  border: 1px solid gray;
  border-radius: 4px;
`;

const Template: Story<FlexRigProps> = (args) => (
  <FlexRig {...args}>
    {Array.from(Array(100).keys()).map((i) => (
      <Item key={i}>Item {i}</Item>
    ))}
  </FlexRig>
);

export const Row = Template.bind({});
Row.args = {
  direction: "row",
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
};

export const Wrapping = Template.bind({});
Wrapping.args = {
  wrap: true,
};
