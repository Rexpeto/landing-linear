"use client";
import classNames from "classnames";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HeroImages = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

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
