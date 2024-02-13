import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const _Accordion: Story = {
  render: ({ label, content }) => <Accordion label={label} content={content} />,
};
