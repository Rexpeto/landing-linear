"use client";
import classNames from "classnames";
import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Lines {
  id: number;
  direction: "to left" | "to top";
  duration: number;
  size: number;
}

// Generate random number
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Component
const HeroImages = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const [lines, setLines] = useState<Lines[]>([]);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLines = (id: number) => {
    setLines((lines) => lines.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLines = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            id: Math.random(),
            direction: randomNumber(0, 1) ? "to left" : "to top",
            duration: randomNumber(1300, 3500),
            size: randomNumber(10, 38),
          },
        ]);
      }, timeout);
    };

    renderLines(randomNumber(800, 2500));

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, lines]);

  return (
    <div className="[perspective:2000px] mt-48" ref={ref}>
      <div
        className={classNames(
          "relative bg-hero-gradient border border-border-white bg-white  bg-opacity-5 rounded-lg",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:bg-hero-glow before:opacity-0 before:w-full before:h-full before:top-0 before:left-0 before:absolute before:rounded-lg before:[filter:blur(120px)]",
          inView && "before:animate-image-glow",
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 z-20">
          {lines.map((line, index) => (
            <span
              key={index}
              onAnimationEnd={() => removeLines(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
                line.direction === "to left" &&
                  `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
                line.direction === "to top" &&
                  `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`,
              )}
            />
          ))}
        </div>

        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines",
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <Image
          className={classNames(
            "relative w-full opacity-0 transition-opacity delay-700",
            inView ? "opacity-100" : "opacity-0",
          )}
          src={"/hero.webp"}
          alt="hero image"
          width={1200}
          height={600}
        />
      </div>
    </div>
  );
};

export default HeroImages;
