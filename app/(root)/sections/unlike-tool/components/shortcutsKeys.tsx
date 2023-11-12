"use client";
import { Button, Highlight } from "@/components";
import { KeyboardIllustration } from ".";
import { MouseEvent, useRef } from "react";

const shortcuts = [
  { text: "Opens command line", key: "⌘K" },
  { text: "Assign issue to me", key: "I" },
  { text: "Assign issue to", key: "A" },
  { text: "Change issue status", key: "S" },
  { text: "Set issue priority", key: "P" },
  { text: "Add issue label", key: "L" },
  { text: "Set due date", key: "⇪D" },
  { text: "Set parent issue", key: "⇪⌘P" },
  { text: "Create new issue", key: "C" },
  { text: "Create new issue from template", key: "⌥C" },
  { text: "Move to project", key: "⌥P" },
];

const ShortcutsKeys = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onShortcutClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTo({
      left: ev.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="shrink-0 snap-center flex flex-col bg-glass-gradient min-h-[46rem] text-center w-full md:basis-[calc(66.66%-12px)]  md:max-w-[calc(66.66%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
      <div className="flex flex-col gap-4 mb-4">
        <div className="mask-keyboard h-full w-full">
          <KeyboardIllustration />
        </div>

        <div className="overflow-hidden w-full h-[4rem]">
          <div
            ref={wrapperRef}
            className="flex snap-x snap-mandatory whitespace-nowrap pb-89 mask-shortcutkeys gap-2 overflow-x-auto max-w-full"
          >
            {shortcuts.map((shortcut) => (
              <Button
                key={shortcut.key}
                className="shrink-0 mb-2 snap-center last:mr-[50vw] first:ml-[50vw]"
                onClick={() => {}}
                variants="secondary"
                size="medium"
              >
                <Highlight>{shortcut.key}</Highlight>
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
