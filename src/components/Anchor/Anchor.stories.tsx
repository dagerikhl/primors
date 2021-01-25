import { Story, Meta } from "@storybook/react";

import { Anchor, AnchorProps } from "./Anchor";

export default {
  title: "Components/Anchor",
  component: Anchor,
  parameters: {
    docs: {
      description: {
        component: `Styles an anchor tag for usability and accessability purposes.`,
      },
    },
  },
} as Meta;

const Template: Story<AnchorProps> = Anchor;

export const Internal = Template.bind({});
Internal.args = {
  href: "/homepage",
};

export const External = Template.bind({});
External.args = {
  href: "https://github.com/dagerikhl/primors",
  target: "_blank",
};
