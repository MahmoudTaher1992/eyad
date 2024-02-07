import type { Meta, StoryObj } from "@storybook/react";

import Button_2 from "../components/button/Button";

const meta = {
  title: "Button",
  component: Button_2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
    primary: {
      control: "boolean",
      defaultValue: true,
      options: [true, false],
    },
    size: {
      control: "radio",
      options: ["small", "large", "medium"],
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button_2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Hello World",
  },
};

export const Secondary: Story = {
  args: {
    label: "Hello World",
  },
};

export const Info: Story = {
  args: {
    info: true,
    label: "Hello World",
  },
};

export const Dark: Story = {
  args: {
    dark: true,
    label: "Hello World",
  },
};

export const Success: Story = {
  args: {
    success: true,
    label: "Hello World",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Hello World",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Hello World",
  },
};
