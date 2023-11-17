"use client";

import { commandOptions } from "@/models/commandOptions.model";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const commandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      const clickedOutside = !commandMenuRef.current?.contains(
        e.target as Node,
      );
      setOpened(clickedOutside ? false : true);
    };

    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  return (
    <div
      ref={commandMenuRef}
      className={classNames(
        "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
        opened &&
          "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem] opened",
        !opened && "translate-y-[12.8rem] opacity-60",
      )}
    >
      <span className="bg-white/5 mt-3 mx-4 rounded-lg text-white/50 text-[12px] px-2 leading-10">
        LIN-111 Welkway lightning
      </span>
      <input
        className="text-lg bg-transparent py-3 mx-4 w-full outline-none"
        placeholder="Type a command or search..."
      />
      <div className="flex flex-col w-full text-sm text-gray-400/90 transition duration-150">
        {commandOptions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex items-center gap-3 py-3 px-4 text-start hover:bg-white/5 w-full"
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommandMenu;
