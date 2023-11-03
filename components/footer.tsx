import { footerLinks } from "@/models";
import { Container, GetIcon } from ".";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-16 mt-5 text-sm">
      <Container className="flex flex-col lg:flex-row  justify-between">
        <div>
          <div className="flex items-center h-full flex-row lg:flex-col justify-between">
            <div className="flex text-white/50 items-center gap-2">
              <Image src="/logo.svg" alt="Vypers" width={28} height={28} />
              Vypers - Designed Worldwide
            </div>
            <div className="flex items-center gap-6 text-md text-white/50 mt-auto">
              <GetIcon icon="SiX" />
              <GetIcon icon="SiGithub" />
              <GetIcon icon="SiSlack" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="flex flex-col min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0 gap-5"
            >
              <h3 className="font-medium text-white/60">{column.title}</h3>
              {column.links.map((link) => (
                <Link
                  className="text-white/50 hover:text-white transition duration-150"
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
