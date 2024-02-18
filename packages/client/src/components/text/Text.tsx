import './text.scss'

export enum TextStyles {
    ITALIC = 'italic',
    OBLIQUE = 'oblique',
    LINE_THROUGH = 'line-through',
    UNDERLINE = 'underline',
    OVERLINE = 'overline',
    NORMAL = 'normal',
}
interface textProps {
    content: string
    textStyles?: TextStyles
}
export const Text = ({ content = 'text', textStyles }: textProps) => {
    return <p className={`text-${textStyles}`}>{content}</p>
}
