import "./button.scss";

export enum ButtonType {
  PRIMARY = "primary",
  SUCCESS = "success",
  DARK = "dark",
  INFO = "info",
  SECONDARY = "secondary",
}

export enum ButtonHoverType {
  hoverUp = "up",
  hoverDown = "down",
  hoverOut = "out",
  hoverRotateRight = "rotate-right",
  hoverRotateLeft = "rotate-left",
}

interface ButtonProps {
  label: string;
  type?: ButtonType;
  hover?: ButtonHoverType;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button = ({
  label = "Button",
  type = ButtonType.PRIMARY,
  hover = undefined,
  size = "medium",
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        "btn",
        "btn-transition",
        `btn-${type}`,
        `btn-${size}`,
        `btn-hover-${hover}`,
      ].join(" ")}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};
