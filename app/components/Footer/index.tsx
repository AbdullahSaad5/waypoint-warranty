"use client";

import Link from "next/link";
import Divider from "../Divider";
import links from "@/app/links";
import { Mail, MapPin, Phone } from "lucide-react";
import { ReactElement } from "react";

export default function Footer() {
  const products: string[] = [
    "GAP",
    "Tire and Road Hazard",
    "Theft and Ancillary Products",
    "Pre-Paid Maintenance",
    "Pre-Owned Vehicle Service Contract",
    "EV Battery Vehicle Service Contract",
  ];

  type Addressprops = {
    icon: ReactElement;
    name: string;
    location: string;
  };

  const addresses: Addressprops[] = [
    {
      icon: <MapPin />,
      name: "2173 Embassy Drive",
      location: "Lancaster, PA 17603",
    },
    {
      icon: <Phone />,
      name: "2173 Embassy Drive",
      location: "Lancaster, PA 17603",
    },
    {
      icon: <Mail />,
      name: "2173 Embassy Drive",
      location: "Lancaster, PA 17603",
    },
  ];

  return (
    <>
      <footer>
        <div className="w-full bg-primary sticky bottom-0 text-primaryText p-2">
          <div className="flex items-center justify-center lg:justify-end lg:mr-36 mx-2">
            <div className="">
              <label className="my-1 text-sm text-center">
                Subscribe to get latest news about products and offers.
              </label>
              <div className="relative flex items-center w-72 lg:w-96 my-3 lg:my-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-md w-full lg:text-base text-sm lg:p-2 lg:pr-16 lg:py-3 text-black p-2 pr-10 py-1"
                />
                <button className="absolute -right-1 lg:top-1 xl:top-1 xl:p-2 py-1 mr-2 bg-primary lg:p-2 px-1 lg:py-2 xl:py-2 lg:text-base text-xs rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-3 gap-4">
            <div className="ml-4 md:col-span-1 col-span-3 flex justify-center items-center text-center lg:text-left md:text-left lg:col-span-1">
              <div>
                <span className="font-bold">Company</span>
                <div className="flex flex-col space-y-2 mt-2">
                  {links.map((link) => (
                    <Link key={link.name} href={link.href}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex justify-center items-center text-center lg:text-left md:text-left col-span-3 lg:col-span-1">
              <div>
                <span className="font-bold">Products</span>
                <div className="flex flex-col space-y-2 mt-2">
                  {products.map((product) => (
                    <span key={product}>{product}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-3 flex justify-center items-center text-center lg:text-left md:text-left lg:col-span-1 ">
              <div>
                <span className="font-bold">Contact Us</span>
                <div className="flex flex-col space-y-2 mt-2">
                  {addresses.map((address: Addressprops, index: number) => (
                    <div className="flex flex-row" key={index}>
                      <div className="flex justify-center items-center mr-4">
                        <div>{address.icon}</div>
                      </div>
                      <div className="flex flex-col">
                        <span>{address.name}</span>
                        <span>{address.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <span className="text-sm text-center lg:text-lg md:text-base my-2">
              2024 WAY POINT WARRANTY.com, All rights reserved
            </span>
            <span className="text-sm text-center lg:text-lg md:text-base my-2">
              Terms & Conditions . Privacy Notice
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
