import Image from "next/image";
import Link from "next/link";
import { Container } from ".";
import { Links } from "@/models";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10">
      <Container className="flex items-center justify-between h-[var(--navigation-height)]">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center text-md gap-2">
            <Image src="/logo.svg" alt="Vypers" width={28} height={28} />
            <span className="font-semibold">Vypers</span>
          </Link>

          <nav className="flex items-center gap-4 h-full">
            {Links.map((link) => (
              <Link
                className="text-sm hover:text-gray-400 first-letter:uppercase transition duration-150"
                href={link.url}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm hover:text-gray-400 transition duration-150"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="flex items-center text-sm py-2 px-4 rounded-full bg-btn-primary text-white"
          >
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;