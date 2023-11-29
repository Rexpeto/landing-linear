"use client";

import { Container } from "@/components";
import { FeaturesProps } from "@/models";

export const Features = ({ children, color, colorDark }: FeaturesProps) => {
  return (
    <div
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
      className="relative flex flex-col items-center py-48 after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%]"
    >
      <Container className="my-[23.2rem] w-full">{children}</Container>
    </div>
  );
};
