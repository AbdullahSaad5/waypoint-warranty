"use client";

import Link from "next/link";
import Divider from "../Divider";
import links from "@/app/links";
import { Mail, MapPin, Phone } from "lucide-react";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";
import productDetails from "@/app/productDetails";
import { createSlug } from "@/app/utils/createSlug";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const products: string[] = productDetails.map((product) => product.title);

  type Addressprops = {
    icon: ReactElement;
    name: string;
    location?: string;
    href: string;
  };

  const addresses: Addressprops[] = [
    {
      icon: <MapPin />,
      name: "2173 Embassy Drive",
      location: "Lancaster, PA 17603",
      href: "https://maps.app.goo.gl/8aLcrz5Aot6NKbXe7",
    },
    {
      icon: <Phone />,
      name: "+1 (408) 389-5470",
      href: "tel:+14083895470",
    },
    {
      icon: <Mail />,
      name: "info@waypointwarrantysolutions.com",
      href: "mailto:info@waypointwarrantysolutions.com",
    },
  ];

  const handleSubscribe = () => {
    if (email === "") {
      setError("Please enter your email address");
      return;
    } else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) === false) {
      setError("Make sure you have entered a valid email address");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      toast.success("You have successfully subscribed to our newsletter");
      setEmail("");
      setLoading(false);
    }, 2000);

    setTimeout(() => {
      setError("");
    }, 10000);
  };

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
                  className={`rounded-md w-full lg:text-base text-sm lg:p-2 lg:pr-16 lg:py-3 text-black p-2 pr-10 py-1 ${
                    error ? "border-red-500 text-red-500" : "border-none text-black"
                  }`}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span className="absolute bottom-[-20px] left-0 text-xs text-white">{error}</span>}
                <button
                  onClick={() => handleSubscribe()}
                  disabled={loading}
                  className={`absolute -right-1 lg:top-1 xl:top-1 xl:p-2 py-1 mr-2 bg-primary lg:p-2 px-1 lg:py-2 xl:py-2 lg:text-base text-xs rounded-md ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? <span className="loading loading-spinner loading-sm"></span> : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-3 gap-4">
            <div className="ml-4 md:col-span-1 col-span-3 flex justify-center text-center lg:text-left md:text-left lg:col-span-1">
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
            <div className="md:col-span-1 flex justify-center text-center lg:text-left md:text-left col-span-3 lg:col-span-1">
              <div>
                <span className="font-bold">Products</span>
                <div className="flex flex-col space-y-2 mt-2">
                  {products
                    .slice(0, 5)
                    .concat("All Products")
                    .map((product) => (
                      <Link
                        href={product === "All Products" ? `/products` : `/products/${createSlug(product)}`}
                        key={product}
                      >
                        <span>{product}</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex justify-center text-center lg:text-left md:text-left col-span-3 lg:col-span-1">
              <div>
                <span className="font-bold">Contact Us</span>
                <div className="flex flex-col space-y-2 mt-2 gap-4 items-center md:items-start">
                  {addresses.map((address: Addressprops, index: number) => (
                    <a className="flex flex-row" key={index} href={address.href} target="_blank" rel="noreferrer">
                      <div className="flex justify-center items-center mr-4">
                        <div>{address.icon}</div>
                      </div>
                      <div className="flex flex-col">
                        <span className="break-all">{address.name}</span>
                        <span className="break-all">{address.location}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <span className="text-sm text-center lg:text-lg md:text-base my-2">
              2024 WAYPOINT WARRANTY.com, All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
