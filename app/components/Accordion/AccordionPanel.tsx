'use client';

import { ReactNode, useEffect, useRef } from "react";
import "./AccordionPanel.scss";

type AccordionPanelProps = {
  isActive: boolean;
  children: ReactNode;
  className?: string;
};

export default function AccordionPanel({ isActive, children, className }: AccordionPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    if (isActive) {
      const startHeight = `${panel.scrollHeight}px`;
      panel.style.overflow = "hidden";
      panel.style.height = startHeight;
      panel.style.opacity = "1";

      const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.propertyName !== "height" || panelRef.current !== panel) {
          return;
        }

        panel.style.height = "auto";
        panel.style.overflow = "visible";
      };

      panel.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        panel.removeEventListener("transitionend", handleTransitionEnd);
      };
    } else {
      const startHeight = `${panel.scrollHeight}px`;
      panel.style.overflow = "hidden";
      panel.style.height = startHeight;
      panel.style.opacity = "1";

      requestAnimationFrame(() => {
        if (!panelRef.current) {
          return;
        }

        panel.style.height = "0px";
        panel.style.opacity = "0";
      });
    }
  }, [isActive]);

  const baseClassName = className || "accordion-panel";
  
  return (
    <div
      ref={panelRef}
      className={`${baseClassName}${isActive ? ` ${baseClassName}--open` : ""}`}
    >
      {children}
    </div>
  );
}

