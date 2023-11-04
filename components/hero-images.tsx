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
          "relative bg-hero-gradient border border-border-white bg-white bg-opacity-5 rounded-lg",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:bg-hero-glow before:w-full before:h-full before:top-0 before:left-0 before:absolute before:rounded-lg before:[filter:blur(120px)]",
          inView && "before:animate-image-glow",
        )}
      >
        <Image
          className="relative w-full"
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
