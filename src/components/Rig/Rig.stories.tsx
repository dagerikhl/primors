import { Story, Meta } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { Rig, RigProps } from "./Rig";

export default {
  title: "Components/Rig",
  component: Rig,
  parameters: {
    docs: {
      description: {
        component: `\
Provides easy ways to manipulate the layout of any elements placed inside it.

Think of it as a supercharged \`div\`.

Allows rendering as any element you choose, setting the layout of its children, as well as to control its own padding via props.`,
      },
    },
  },
} as Meta;

const Item = styled.div`
  padding: 4px 8px;

  border: 1px solid gray;
  border-radius: 4px;
`;

const Template: Story<RigProps> = (args) => (
  <Rig {...args}>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    <Item>Item 4</Item>
  </Rig>
);

export const As = Template.bind({});
As.args = {
  as: "button",
};

export const Flex = Template.bind({});
Flex.args = {
  flexWrap: true,
  flexJustify: "space-between",
};

export const Spacing = Template.bind({});
Spacing.args = {
  top: "xx-large",
  left: "small",
  right: true,
};