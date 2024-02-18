import './button.scss'
import { Text, TextStyles } from '../text/Text'

export enum ButtonType {
    PRIMARY = 'primary',
    SUCCESS = 'success',
    DANGER = 'danger',
    DARK = 'dark',
    INFO = 'info',
    SECONDARY = 'secondary',
}

// fix the casing of the enum values
export enum ButtonHoverType {
    HOVER_UP = 'up',
    hoverDown = 'down',
    hoverOut = 'out',
    hoverRotateRight = 'rotate-right',
    hoverRotateLeft = 'rotate-left',
}

interface ButtonProps {
    label: string
    type?: ButtonType
    hover?: ButtonHoverType
    textStyles?: TextStyles
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

export const Button = ({
    label = 'Button',
    type = ButtonType.PRIMARY,
    hover = undefined,
    size = 'medium',
    textStyles = TextStyles.NORMAL,
    backgroundColor,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={['btn', 'btn-transition', `btn-${type}`, `btn-${size}`, `btn-hover-${hover}`].join(' ')}
            style={{
                backgroundColor,
            }}
            onClick={onClick}
        >
            <Text content={label} textStyles={textStyles} />
        </button>
    )
}
