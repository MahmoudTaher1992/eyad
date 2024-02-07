import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonType } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    label: { control: 'text', defaultValue: 'Button'},
    backgroundColor: { control: 'color' },
    type: {
      control: 'select',
      options: ButtonType,
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const _Button: Story = {
  render: ({label, type, size}) => <Button label={label} type={type} size={size} />,
};