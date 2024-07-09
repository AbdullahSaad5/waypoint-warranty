"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import links from "@/app/links";

export default function Header() {
  const currentLocation = usePathname();
  return (
    <>
      <header>
        <div className="max-w-full p-1">
          <div className="flex items-center justify-start h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={140}
                  height={60}
                  className="mt-1"
                />
              </Link>
            </div>
            <div className="mx-auto">
              <nav>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-secondaryText mx-4 ${
                      currentLocation.startsWith(link.href) &&
                      (currentLocation[link.href.length] === "/" ||
                        currentLocation.length === link.href.length) &&
                      "bg-primary px-4 py-3 rounded-full text-white xl:px-6"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
