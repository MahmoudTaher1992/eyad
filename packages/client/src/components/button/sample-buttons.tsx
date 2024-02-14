import { Button, ButtonHoverType, ButtonType } from './button'

interface SuccessButtonProps {
    label: string
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

export const SuccessButton = ({ label, size, onClick }: SuccessButtonProps) => (
    <Button
        label={label}
        type={ButtonType.SUCCESS}
        size={size}
        onClick={onClick}
        hover={ButtonHoverType.hoverRotateLeft}
    />
)

interface DangerButtonProps {
    label: string
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
}
export const DangerButton = ({ label, size, onClick }: DangerButtonProps) => {
    return (
        <Button label={label} type={ButtonType.DANGER} size={size} onClick={onClick} hover={ButtonHoverType.hoverOut} />
    )
}
