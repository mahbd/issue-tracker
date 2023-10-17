"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/", className: "" },
    { label: "Issues", href: "/issues" },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-2 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                currentPath === link.href ? "font-bold" : ""
              } text-zinc-500 hover:text-zinc-800 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
