"use client";

import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 120, startDelay = 400 }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{shown}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[3px] translate-y-1 animate-pulse bg-indigo-300"
      />
    </>
  );
}
