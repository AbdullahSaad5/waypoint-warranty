"use client";

import HomeBanner from "@/public/home-banner.png";
import Image from "next/image";
import Image4 from "@/public/image-4.png";
import productDetails from "../../productDetails";
import ProductCard from "../ProductCard";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const offers: string[] = [
    "Full suite of F&I (Finance and Insurance) options",
    "Innovative wealth generating participation programs",
    "Fully domestic programs",
  ];
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[460px] w-full place-items-start object-cover">
        <Image
          src={HomeBanner}
          alt="Home Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] opacity-85"></div>
        <div className="z-[3] flex flex-col lg:items-start lg:mt-14 lg:justify-start h-full px-8 lg:px-16">
          <h1 className="lg:text-5xl text-3xl font-semibold text-primaryText">
            Providing Reliable Programs <br />
            <span className="my-5 block">
              Ensuring You&apos;re Protected
            </span>{" "}
            <span className="block">Every Step Of The Way</span>
          </h1>
          <p className="text-primaryText lg:mt-8 font-thin lg:text-2xl font-[Inter]">
            We inspire and help our{" "}
          </p>
          <p className="text-primaryText lg:text-2xl font-thin font-[Inter]">
            Customers
          </p>
          <button className="bg-secondaryText text-primaryText text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-3 rounded-md mt-4 hover:bg-[#2A76CC]">
            Explore our Products
          </button>
        </div>
      </main>
      <section className="my-8">
        <div className="flex flex-col justify-center items-center my-3">
          <h1 className="text-primary font-bold text-3xl lg:text-5xl my-4">
            About Us
          </h1>
        </div>
        <div className="flex lg:flex-row justify-center items-center">
          <div>
            <Image src={Image4} alt="Home image" className="w-[500px]" />
          </div>
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-secondaryText font-bold text-3xl lg:text-5xl my-4">
              Waypoint Offers
            </h1>
            <ul className="custom-circle-list">
              {offers.map((offer: string, index: number) => (
                <li key={index} className="my-5 text-2xl font-medium">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <div className="absolute inset-0 bg-[#0c2748] z-[2] "></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">Products We Offer</h1>
        </div>
      </section>
      <section className="bg-secondaryBg flex justify-center items-center py-5 px-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:col-span-1 md:gap-x-16 lg:gap-x-10 lg:gap-y-10 md:gap-y-6 gap-y-5 lg:col-span-1 my-12">
          {productDetails.map((product, index: number) => (
            <ProductCard
              key={product.number}
              number={product.number}
              icon={product.icon}
              title={product.title}
              onClick={() => router.push(`/products/${index}`)}
            />
          ))}
        </div>
      </section>
      <section className="bg-primaryBg p-1">
        <h4 className="flex flex-col justify-center items-center my-6 ">
          <p className="text-primary lg:text-2xl md:text-2xl text-xl font-bold font-[Inter]"></p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            We know what it takes to be your partner
          </p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            in guiding you to success in achieving your
          </p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            your
            <span className="text-primary lg:text-4xl font-bold md:text-3xl text-2xl">
              {" "}
              Long-Term Goals
            </span>
          </p>
        </h4>
      </section>
      <section></section>
    </>
  );
}
