import { Story, Meta } from "@storybook/react";
import { FC } from "react";

import { StoryCode } from "../../../_internal/components/storybook/StoryCode/StoryCode";

import { useDebouncedState, UseDebouncedStateProps } from "./useDebouncedState";

export default {
  title: "Hooks/State/useDebouncedState",
  component: useDebouncedState as unknown as FC<UseDebouncedStateProps<string>>,
  parameters: {
    docs: {
      description: {
        component: `Debounces the value it's passed by a certain delay.`,
      },
    },
  },
  argTypes: {
    initialValue: {
      description: "The `initialValue` of the state.",
      table: {
        type: {
          summary: "any",
        },
      },
    },
    delay: {
      description:
        "The amount of time the hook waits before debouncing the `value` set.",
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

const Template: Story<UseDebouncedStateProps<string>> = ({
  initialValue,
  delay,
}) => {
  const [{ value, debouncedValue }, setValue] = useDebouncedState(
    initialValue,
    delay
  );

  const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label>
        Change this value to update the value in the state:
        <input value={value} onChange={handleValueChange} />
      </label>

      <StoryCode block>
        <div>initialValue: {initialValue}</div>
        <div>value: {value}</div>
        <div>debouncedValue: {debouncedValue}</div>
      </StoryCode>
    </>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  initialValue: "Some text",
  delay: 400,
};
