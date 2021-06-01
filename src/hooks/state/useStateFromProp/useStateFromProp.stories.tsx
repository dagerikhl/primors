import { Story, Meta } from "@storybook/react";
import { FC, useState } from "react";

import { StoryCode } from "../../../_internal/components/storybook/StoryCode/StoryCode";

import { useStateFromProp, UseStateFromPropProps } from "./useStateFromProp";

export default {
  title: "Hooks/State/Use State From Prop",
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

const Template: Story<UseStateFromPropProps<string>> = ({ prop }) => {
  const [value, setValue] = useState(prop);
  const [valueFromProp, setValueFromProp] = useStateFromProp(prop);

  const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue(event.target.value);
  };
  const handleValueFromPropChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValueFromProp(event.target.value);
  };

  return (
    <>
      <div>
        <h3>
          With <StoryCode>useState</StoryCode>
        </h3>

        <label>
          Change this value to update the value in the state:
          <input value={value} onChange={handleValueChange} />
        </label>

        <StoryCode block>
          <div>prop: {prop}</div>
          <div>value: {value}</div>
        </StoryCode>
      </div>

      <div>
        <h3>
          With <StoryCode>useStateFromProp</StoryCode>
        </h3>

        <label>
          Change this value to update the value in the state:
          <input value={valueFromProp} onChange={handleValueFromPropChange} />
        </label>

        <StoryCode block>
          <div>prop: {prop}</div>
          <div>value: {valueFromProp}</div>
        </StoryCode>
      </div>
    </>
  );
};

export const UseStateFromProp = Template.bind({});
UseStateFromProp.args = {
  prop: "Initial prop",
};
