import { Story, Meta } from "@storybook/react";
import React from "react";

import { Code, CodeProps } from "./Code";

export default {
  title: "Components/Typography/Code",
  component: Code,
} as Meta;

const Template: Story<CodeProps> = (props) => (
  <Code {...props}>
    {`\
const thisTsVariable = 42;
const thisOtherVariable = 2;

onCalculate?.(thisTsVariable * thisOtherVariable);\
    `}
  </Code>
);
export const Inline = Template.bind({});

export const Block = Template.bind({});
Block.args = {
  block: true,
};
