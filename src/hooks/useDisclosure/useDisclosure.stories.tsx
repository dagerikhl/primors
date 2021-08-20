import { Story, Meta } from "@storybook/react";
import { FC } from "react";

import { StoryCode } from "../../_internal/components/storybook/StoryCode/StoryCode";

import { useDisclosure, UseDisclosureProps } from "./useDisclosure";

export default {
  title: "Hooks/useDisclosure",
  component: useDisclosure as unknown as FC<UseDisclosureProps>,
  parameters: {
    docs: {
      description: {
        component:
          "Gives a simple way of controlling an open state of something in the UI, e.g. a modal.",
      },
    },
  },
  argTypes: {
    initialIsOpen: {
      description:
        "The initial value for `isOpen`. Set to `true` to start as open.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta;

const Template: Story<UseDisclosureProps> = ({ initialIsOpen }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure(initialIsOpen);

  return (
    <>
      <button onClick={onOpen}>Open</button>
      <button onClick={onClose}>Close</button>
      <button onClick={onToggle}>Toggle open state</button>

      <StoryCode block>
        <div>initialIsOpen: {JSON.stringify(initialIsOpen)}</div>
        <div>isOpen: {JSON.stringify(isOpen)}</div>
      </StoryCode>

      {isOpen && <h1>I am open!</h1>}
    </>
  );
};

export const Standard = Template.bind({});
Standard.args = {};

export const InitiallyOpen = Template.bind({});
InitiallyOpen.args = {
  initialIsOpen: true,
};
