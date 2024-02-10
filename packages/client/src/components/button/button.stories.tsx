import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonType } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", defaultValue: "Button" },
    backgroundColor: { control: "color" },
    type: {
      control: "radio",
      options: ButtonType,
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const _Button: Story = {
  render: ({ label, type, size }) => (
    <Button label={label} type={type} size={size} />
  ),
};
