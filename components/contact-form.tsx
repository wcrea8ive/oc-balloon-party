"use client";

import { useEffect, useRef } from "react";

export function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/93015610177148";
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
}
