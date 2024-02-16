import './text.scss'

export enum TextStyles {
    ITALIC = 'italic',
    OBLIQUE = 'oblique',
    LINE_THROUGH = 'line-through',
    UNDERLINE = 'underline',
    OVERLINE = 'overline',
}
interface textProps {
    content: string
    text_style?: TextStyles
}
export const Text = ({ content = 'text', text_style }: textProps) => {
    return <p className={`text-${text_style}`}>{content}</p>
}
