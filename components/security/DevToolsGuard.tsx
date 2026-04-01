"use client";

import React, { useEffect, useState } from "react";
import AccessRestricted from "./AccessRestricted";

interface DevToolsGuardProps {
  children: React.ReactNode;
}

export default function DevToolsGuard({ children, bypass = false }: DevToolsGuardProps & { bypass?: boolean }) {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && !bypass) return;

    const THRESHOLD = 160;

    const triggerBlock = () => {
      setBlocked(true);
      document.title = "Access Restricted | Wrestle AI";
    };

    const detectDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > THRESHOLD || heightDiff > THRESHOLD) {
        triggerBlock();
      }
    };

    const disableContextMenu = (e: MouseEvent) => e.preventDefault();

    const disableKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        triggerBlock();
      }
    };

    const interval = setInterval(detectDevTools, 500);

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableKeys);

    return () => {
      clearInterval(interval);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  if (blocked) return <AccessRestricted />;

  return <>{children}</>;
}
