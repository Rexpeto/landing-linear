"use client";

import { Button, Highlight } from "@/components";
import { KeyboardIllustration } from ".";
import { MouseEvent, useEffect, useRef, useState } from "react";

const shortcuts = [
  { text: "Opens command line", key: "⌘k" },
  { text: "Assign issue to me", key: "i" },
  { text: "Assign issue to", key: "a" },
  { text: "Change issue status", key: "s" },
  { text: "Set issue priority", key: "p" },
  { text: "Add issue label", key: "l" },
  { text: "Set due date", key: "⇪d" },
  { text: "Set parent issue", key: "⇪⌘p" },
  { text: "Create new issue", key: "c" },
  { text: "Create new issue from template", key: "⌥c" },
  { text: "Move to project", key: "⌥p" },
];

const ShortcutsKeys = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcut = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      goToNextShortcut();
    }, 3000);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  });

  const goToNextShortcut = () => {
    goToShortcut((activeShortcut.current + 1) % shortcuts.length);
  };

  const goToShortcut = (index: number) => {
    clearTimeout(timeoutRef.current);
    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`,
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;

    const keys = shortcut.dataset.keys;

    const keyArray = keys?.split("") || [];

    const keyElement = keyArray.map(
      (key: any) =>
        illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`),
    );

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"));

    keyElement.forEach((element) => {
      if (!element) return;

      element.classList.add("active");
    });

    activeShortcut.current = index;
    scheduleTimeout();
  };

  const onShortcutClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    goToShortcut(ev.currentTarget.dataset.index as unknown as number);
  };

  return (
    <div className="shrink-0 snap-center flex flex-col bg-glass-gradient min-h-[46rem] text-center w-full md:basis-[calc(66.66%-12px)]  md:max-w-[calc(66.66%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
      <div className="flex flex-col gap-4 mb-4">
        <div
          ref={illustrationWrapperRef}
          className="mask-keyboard h-full w-full"
        >
          <KeyboardIllustration />
        </div>

        <div className="overflow-hidden w-full h-[4rem]">
          <div
            ref={wrapperRef}
            className="flex snap-x snap-mandatory whitespace-nowrap pb-89 mask-shortcutkeys gap-2 overflow-x-auto max-w-full"
          >
            {shortcuts.map((shortcut, index) => (
              <Button
                key={shortcut.key}
                className="shrink-0 mb-2 snap-center last:mr-[50vw] first:ml-[50vw]"
                data-keys={shortcut.key}
                data-index={index}
                variants="secondary"
                size="medium"
              >
                <Highlight className="uppercase">{shortcut.key}</Highlight>
                {shortcut.text}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-lg md:text-2xl mb-4">Built for your keyboard</p>
      <p className="text-primary-text text-sm md:text-md">
        Fly through your tasks with rapid-fire keyboard shortcuts for
        everything. Literally everything.
      </p>
    </div>
  );
};

export default ShortcutsKeys;
