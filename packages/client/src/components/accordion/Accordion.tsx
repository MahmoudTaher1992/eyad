import React, { useState, useEffect, useRef } from "react";
import Chevron from "./chevron.svg";
import "./accordion.scss";

interface AccordionProps {
  label: string;
  content: string;
}

export const Accordion = ({
  label = "Accordion",
  content = ".................",
}: AccordionProps) => {
  const [toggle, setToggle] = useState(false);
  const [rotation, setRotation] = useState(false);
  const [heightEl, setHeightEl] = useState<string | null>(null);
  const refHeight = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refHeight.current) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }
  }, []);

  const arrowRotation = () => {
    setRotation(!rotation);
  };

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <button
        onClick={() => {
          toggleState();
          arrowRotation();
        }}
        className={[
          "accordion-visible",
          `${!toggle ? "all-radius" : "top-radius"}`,
        ].join(" ")}
      >
        <span>{label}</span>
        <div className="arrow">
          <img
            src={Chevron}
            className={rotation === false ? "down" : "up"}
            alt="Chevron"
          />
        </div>
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        ref={refHeight}
        style={{ height: toggle ? heightEl : "0" }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};
