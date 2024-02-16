import { Meta, StoryObj } from '@storybook/react'
import { Text as OriginalText, TextStyles } from './Text'

const meta: Meta<typeof OriginalText> = {
    component: OriginalText,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
        text_style: {
            control: 'radio',
            options: TextStyles,
        },
    },
}

export default meta
type Story = StoryObj<typeof OriginalText>

export const Text: Story = {
    render: ({ content, text_style }) => {
        return <OriginalText content={content} text_style={text_style} />
    },
}
