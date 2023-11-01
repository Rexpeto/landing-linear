"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Container } from ".";
import { Links } from "@/models";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-md">
      <Container className="flex items-center justify-between h-navigation-height">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center text-md gap-2">
            <Image src="/logo.svg" alt="Vypers" width={28} height={28} />
            <span className="font-semibold">Vypers</span>
          </Link>

          <div
            className={classNames(
              "transition-[visibility]",
              open ? "visible" : "invisible delay-500 md:visible",
            )}
          >
            <nav
              className={classNames(
                "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-250 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100",
                open ? "opacity-100" : "opacity-0",
              )}
            >
              <ul
                className={classNames(
                  "flex md:flex-row md:pt-0 flex-col md:items-center md:gap-6 h-full",
                )}
              >
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className={classNames(
                      "first-letter:uppercase border-y border-white/10 md:border-none translate-y-8 md:translate-y-0 transition-transform duration-150 w-full",
                      open && "md:translate-y-0",
                    )}
                  >
                    <Link
                      className="block p-3 md:p-0 text-md md:text-sm hover:text-gray-400 first-letter:uppercase w-full transition duration-150"
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm hover:text-gray-400 transition duration-150"
          >
            Log in
          </Link>
          <Button href="#" variants="primary" size="medium">
            Sign up
          </Button>

          <button className="ml-2 text-md md:hidden">
            <RxHamburgerMenu onClick={() => setOpen(!open)} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
