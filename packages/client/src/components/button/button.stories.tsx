import { Meta, StoryObj } from '@storybook/react'

import { Button as OriginalButton, ButtonType, ButtonHoverType } from './Button'
import { TextStyles } from '../text/Text'

const meta: Meta<typeof OriginalButton> = {
    component: OriginalButton,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text', defaultValue: 'Button' },
        backgroundColor: { control: 'color' },
        type: {
            control: 'select',
            options: ButtonType,
        },
        hover: {
            control: 'select',
            options: ButtonHoverType,
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
        textStyles: {
            control: 'select',
            options: TextStyles,
        },
    },
}

export default meta
type Story = StoryObj<typeof OriginalButton>

export const Button: Story = {
    render: ({ label, type, size, backgroundColor, hover, textStyles }) => {
        return (
            <OriginalButton
                label={label}
                type={type}
                textStyles={textStyles}
                hover={hover}
                size={size}
                backgroundColor={type === undefined ? undefined : backgroundColor}
            />
        )
    },
}
