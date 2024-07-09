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
          <div className="grid grid-cols-2 gap-2 col-span-2 lg:col-span-1 ">
            <div className="flex flex-col col-start-1 lg:col-start-2">
              <label className="my-1 text-sm">
                Subscribe to get latest news about products and offers.
              </label>
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="rounded-md w-full p-2 pr-16 py-3"
                />
                <button className="absolute -right-1 top-1 mr-2 bg-primary text-primaryText p-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-3 gap-4 col-span-1">
            <div className="ml-4">
              <span className="font-bold">Company</span>
              <div className="flex flex-col space-y-2 mt-2">
                {links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold">Products</span>
              <div className="flex flex-col space-y-2 mt-2">
                {products.map((product) => (
                  <span key={product}>{product}</span>
                ))}
              </div>
            </div>
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
          <Divider />
          <div className="flex justify-around items-center">
            <span>2024 WAY POINT WARRANTY.com, All rights reserved</span>
            <span>Terms & Conditions . Privacy Notice</span>
          </div>
        </div>
      </footer>
    </>
  );
}
