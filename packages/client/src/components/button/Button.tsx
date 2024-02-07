import React from "react";
import "../../Styles/button.css";

interface Button_2_Props {
  primary?: boolean;
  success?: boolean;
  dark?: boolean;
  info?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const Button_2 = ({
  primary = false,
  success = false,
  dark = false,
  info = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: Button_2_Props) => {
  const mode = primary
    ? "storybook-btn--primary"
    : success
    ? "storybook-btn--success"
    : dark
    ? "storybook-btn--dark"
    : info
    ? "storybook-btn--info"
    : "storybook-btn--secondary";
  return (
    <button
      className={["storybook-btn", `storybook-btn--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button_2;
