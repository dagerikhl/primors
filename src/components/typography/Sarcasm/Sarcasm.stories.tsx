import { Story, Meta } from "@storybook/react";

import { Sarcasm, SarcasmProps } from "./Sarcasm";

export default {
  title: "Components/Typography/Sarcasm",
  component: Sarcasm,
} as Meta;

const Template: Story<SarcasmProps> = (props) => (
  <Sarcasm {...props}>
    I am really happy to see you, it has been too long, I did miss you so!
  </Sarcasm>
);

export const Sarcastic = Template.bind({});
Sarcastic.args = {};

export const MaxNormalSarcastic = Template.bind({});
MaxNormalSarcastic.args = {
  level: 10,
};

export const ExtremelySnarky = Template.bind({});
ExtremelySnarky.args = {
  level: 100,
};

export const Sarcasm101: Story<SarcasmProps> = ({ level }) => (
  <>
    <div>Base level: {level ?? 1}</div>

    <hr />

    {Array.from({ length: 101 }).map((_, i) => {
      const itemLevel = (level ?? 0) + i;

      return (
        <div key={i}>
          <Sarcasm key={i} level={itemLevel}>
            I am really happy to see you, it has been too long, I did miss you
            so!
          </Sarcasm>{" "}
          [{itemLevel}]
        </div>
      );
    })}
  </>
);
Sarcasm101.args = {};
