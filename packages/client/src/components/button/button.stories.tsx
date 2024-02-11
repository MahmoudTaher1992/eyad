import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonType, ButtonHoverType } from "./Button";

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
      control: "select",
      options: ButtonType,
    },
    hover: {
      control: "select",
      options: ButtonHoverType,
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
  render: ({ label, type, size, backgroundColor, hover }) => (
    <Button
      label={label}
      type={type}
      hover={hover}
      size={size}
      backgroundColor={!type ? backgroundColor : undefined}
    />
  ),
};
