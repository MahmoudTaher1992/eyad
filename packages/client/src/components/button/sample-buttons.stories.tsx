import { Meta, StoryObj } from '@storybook/react'

import { SuccessButton as OriginalSuccessButton, DangerButton as OriginalDangerButton } from './sample-buttons'

const meta: Meta<typeof OriginalSuccessButton> = {
    component: OriginalSuccessButton,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text', defaultValue: 'Button' },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
    },
}

export default meta
type Story = StoryObj<typeof OriginalSuccessButton>

export const SuccessButton: Story = {
    render: ({ label, size }) => {
        return <OriginalSuccessButton label={label} size={size} />
    },
}

export const DangerButton: Story = {
    render: ({ label, size }) => {
        return <OriginalDangerButton label={label} size={size} />
    },
}
