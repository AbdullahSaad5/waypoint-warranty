"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import links from "@/app/links";
import { Menu } from "lucide-react";

export default function Header() {
  const currentLocation = usePathname();
  return (
    <>
      <header className="bg-primaryBg">
        <nav className="flex justify-between items-center w-[94%] mx-auto">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="Waypoint Warranty Logo"
                className="w-[155px] my-2"
              />
            </Link>
          </div>
          <div className="hidden lg:min-h-fit  lg:flex items-center px-5">
            <ul className="flex md:flex-row md:items-center gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-secondaryText mx-4
                      ${
                        currentLocation.startsWith(link.href) &&
                        (currentLocation[link.href.length] === "/" ||
                          currentLocation.length === link.href.length) &&
                        "bg-primary px-4 py-3 rounded-full text-white xl:px-6"
                      }
                      `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <details className="dropdown dropdown-end lg:hidden">
              <summary className="btn m-1">
                <Menu />
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[999] w-52 p-2 shadow">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-secondaryText mx-2
                        ${
                          currentLocation.startsWith(link.href) &&
                          (currentLocation[link.href.length] === "/" ||
                            currentLocation.length === link.href.length) &&
                          "bg-primary text-white"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}
