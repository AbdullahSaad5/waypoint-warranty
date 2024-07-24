"use client";

import HomeBanner from "@/public/home-banner.png";
import Image from "next/image";
import Image4 from "@/public/image-4.png";
import productDetails from "../../productDetails";
import ProductCard from "../ProductCard";
import Card from "../MainPageCard";
import CardImage1 from "@/public/card-image-1.png";
import CardImage2 from "@/public/card-image-2.png";
import CardImage3 from "@/public/card-image-3.png";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { createSlug } from "@/app/utils/createSlug";
import dynamic from "next/dynamic";
const ProductsCarousel = dynamic(() => import("./products-carousel"), { ssr: false, loading: () => <p>Loading...</p> });

const inter = Inter({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
});

export default function LandingPage() {
  const router = useRouter();
  const offers: string[] = [
    "A Full Suite of Innovative F&I products and services",
    "Innovative wealth generating participation programs",
    "Fully domestic programs",
    "Guided and Strategic Partnership",
  ];
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[500px] w-full lg:place-items-start object-cover">
        <Image src={HomeBanner} alt="Home Banner" className="absolute left-0 top-0 z-[2] h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] opacity-85"></div>
        <div className="z-[3] flex flex-col items-center justify-center lg:items-start lg:mt-14 my-1 lg:justify-start h-full lg:w-[850px] xl:[800px] 2xl:[900px] px-8 lg:px-16">
          <h1 className="lg:text-3xl md:text-2xl text-xl lg:text-left text-center font-semibold text-primaryText ">
            Let Waypoint be your guide every step of the way. From revolutionary participation programs for both dealer
            and agent partners, to an ever-evolving full suite of products and services to meet today&apos;s consumer
            demands.
          </h1>
          <p
            className={`text-primaryText lg:mt-8 mt-5 font-thin 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base lg:text-left text-center ${inter.className}`}
          >
            Waypoint offers true partnership and transparency on every step of your journey.{" "}
          </p>
          <button
            onClick={() => router.push("/products")}
            className="bg-secondaryText text-primaryText text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-3 rounded-md mt-4 hover:bg-[#2A76CC]"
          >
            Explore our Products
          </button>
        </div>
      </main>
      <section className="m-8">
        <div className="flex lg:flex-row flex-col mx-3 lg:mx-5 gap-y-9 items-center justify-center py-12 px-4 sm:px-6 lg:gap-x-9 lg:px-8">
          <Card
            image={CardImage1}
            title="Dealers"
            path="/dealers"
            description="As an administrative partner who was founded by dealers, we understand the specific needs of a dealer, and the ever-changing and demanding needs of your customer with an eye on innovative participation programs"
            icon={
              <svg viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M66.3564 23.5647C70.471 19.4501 68.5947 14.6443 66.3564 12.3072L56.4814 2.43222C52.3339 -1.68236 47.561 0.193891 45.2239 2.43222L39.6281 8.06097H31.1026C24.8485 8.06097 21.2276 11.3526 19.3843 15.1381L4.76931 29.7531V42.9197L2.43222 45.2239C-1.68236 49.3714 0.193891 54.1443 2.43222 56.4814L12.3072 66.3564C14.0847 68.1339 15.9939 68.7922 17.8043 68.7922C20.1414 68.7922 22.281 67.6401 23.5647 66.3564L32.4522 57.436H44.2693C49.8651 57.436 52.696 53.9468 53.7164 50.5235C57.436 49.536 59.4768 46.7051 60.2997 43.9401C65.4018 42.6235 67.311 37.7847 67.311 34.3943V24.5193H65.3689L66.3564 23.5647ZM60.7276 34.3943C60.7276 35.8756 60.1022 37.686 57.436 37.686H54.1443V40.9776C54.1443 42.4589 53.5189 44.2693 50.8526 44.2693H47.561V47.561C47.561 49.0422 46.9356 50.8526 44.2693 50.8526H29.7531L18.9564 61.6493C17.936 62.6039 17.3435 62.0443 16.9814 61.6822L7.13931 51.8731C6.18472 50.8526 6.74431 50.2601 7.10639 49.8981L11.3526 45.6189V32.4522L17.936 25.8689V31.1026C17.936 35.0856 20.5693 40.9776 27.811 40.9776C35.0526 40.9776 37.686 35.0856 37.686 31.1026H60.7276V34.3943ZM61.6822 18.8906L56.0864 24.5193H31.1026V31.1026C31.1026 32.5839 30.4772 34.3943 27.811 34.3943C25.1447 34.3943 24.5193 32.5839 24.5193 31.1026V21.2276C24.5193 19.7135 25.0789 14.6443 31.1026 14.6443H42.3272L49.8322 7.13931C50.8526 6.18472 51.4451 6.74431 51.8072 7.10639L61.6493 16.9156C62.6039 17.936 62.0443 18.5285 61.6822 18.8906Z"
                  fill="#128949"
                />
              </svg>
            }
          />
          <Card
            image={CardImage2}
            title="Agents"
            path="/agents"
            description="We value your partnership; we respect and support your business as if it were our own with a full suite of products and services."
            icon={
              <svg width="66" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.625 59.25V52.6667H55.9583V29.2958C55.9583 22.8771 53.7233 17.4327 49.2532 12.9626C44.7831 8.4925 39.3376 6.25636 32.9167 6.25417C26.4957 6.25197 21.0513 8.48811 16.5834 12.9626C12.1155 17.4371 9.87939 22.8815 9.875 29.2958V49.375H0V30.5302H3.29167L3.53854 26.1688C3.97743 22.4382 5.06149 18.9819 6.79071 15.8C8.51993 12.6181 10.6869 9.84757 13.2918 7.48854C15.8966 5.12951 18.8854 3.29167 22.2583 1.975C25.6311 0.658333 29.1839 0 32.9167 0C36.6494 0 40.188 0.658333 43.5323 1.975C46.8766 3.29167 49.8666 5.11635 52.5021 7.44904C55.1376 9.78174 57.3046 12.538 59.0031 15.7177C60.7016 18.8975 61.7988 22.3537 62.2948 26.0865L62.5417 30.5302H65.8333V49.375H62.5417V59.25H29.625ZM23.0417 36.2083C22.109 36.2083 21.3278 35.8923 20.698 35.2603C20.0682 34.6283 19.7522 33.8471 19.75 32.9167C19.7478 31.9862 20.0638 31.205 20.698 30.573C21.3322 29.941 22.1134 29.625 23.0417 29.625C23.9699 29.625 24.7522 29.941 25.3886 30.573C26.025 31.205 26.3399 31.9862 26.3333 32.9167C26.3267 33.8471 26.0107 34.6294 25.3853 35.2636C24.7599 35.8978 23.9787 36.2127 23.0417 36.2083ZM42.7917 36.2083C41.859 36.2083 41.0778 35.8923 40.448 35.2603C39.8182 34.6283 39.5022 33.8471 39.5 32.9167C39.4978 31.9862 39.8138 31.205 40.448 30.573C41.0822 29.941 41.8634 29.625 42.7917 29.625C43.7199 29.625 44.5022 29.941 45.1386 30.573C45.775 31.205 46.0899 31.9862 46.0833 32.9167C46.0768 33.8471 45.7607 34.6294 45.1353 35.2636C44.5099 35.8978 43.7287 36.2127 42.7917 36.2083ZM13.249 31.1063C12.8649 25.291 14.6205 20.2986 18.5156 16.1292C22.4108 11.9597 27.266 9.875 33.0813 9.875C37.9639 9.875 42.2573 11.4243 45.9615 14.5228C49.6658 17.6214 51.9008 21.5868 52.6667 26.4189C47.6743 26.3619 43.0802 25.0167 38.8845 22.3833C34.6887 19.75 31.465 16.184 29.2135 11.6854C28.3358 16.0743 26.4847 19.9837 23.6605 23.4136C20.8363 26.8435 17.3657 29.4078 13.249 31.1063Z"
                  fill="#128949"
                />
              </svg>
            }
          />
          <Card
            image={CardImage3}
            title="Products"
            path="/products"
            description="We offer a full suite of products and services to help you achieve your long-term goals."
            icon={
              <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M38.5 73.2245C56.9169 73.2245 72.2245 57.9492 72.2245 39.4999C72.2245 21.0831 56.883 5.77539 38.4661 5.77539C20.0182 5.77539 4.77686 21.0831 4.77686 39.4999C4.77686 57.9492 20.0507 73.2245 38.5 73.2245ZM38.5014 67.6042C22.8932 67.6042 10.4268 55.1052 10.4268 39.4999C10.4268 23.9256 22.8594 11.3957 38.4661 11.3957C54.039 11.3957 66.569 23.9271 66.6028 39.4999C66.6353 55.1067 54.0714 67.6042 38.4986 67.6042M28.9763 57.9492H47.9221C51.5914 57.9492 53.4098 56.0645 53.4098 52.3628V36.457H40.3198C38.0387 36.457 36.9482 35.399 36.9482 33.1179V19.7922H28.9777C25.3423 19.7922 23.49 21.677 23.49 25.3801V52.36C23.49 56.097 25.3423 57.9478 28.9777 57.9478M40.5836 33.7781H53.2137C53.115 33.0516 52.5846 32.325 51.7254 31.4645L41.9379 21.4795C41.1112 20.6189 40.3508 20.0899 39.6243 19.9912V32.8202C39.6243 33.448 39.9544 33.7781 40.5836 33.7781Z"
                  fill="#128949"
                />
              </svg>
            }
          />
        </div>
      </section>
      <section className="mt-8 mb-28 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-primary font-bold text-3xl lg:text-5xl md:text-4xl my-4">About Us</h1>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-center items-stretch max-w-[1520px] w-full gap-12  px-12">
          <div className="flex-1">
            <Image
              src={Image4}
              alt="Home image"
              className="w-full h-full aspect-auto object-cover object-right lg:min-w-[500px]"
            />
          </div>
          <div className="flex flex-col justify-start flex-1 gap-4">
            <h1 className="text-secondaryText font-bold text-3xl lg:text-5xl md:text-4xl mb-4 lg:mb-0">
              Waypoint Offers
            </h1>
            <ul className="custom-circle-list w-fit h-full flex flex-col justify-center gap-8 lg:gap-12">
              {offers.map((offer: string, index: number) => (
                <li key={index} className="lg:text-3xl md:text-2xl text-xl font-medium">
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative grid  min-h-[400px] w-full place-items-center object-cover">
        <div className="absolute inset-0 bg-[#1F60B2] z-[2] "></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">Products We Offer</h1>
        </div>
      </section>
      <section className="bg-secondaryBg flex justify-center items-center py-5 px-10  pt-12 pb-24">
        <ProductsCarousel />
      </section>
      <section className="bg-[#FDFFFC] p-1 mx-5">
        <h4 className="flex flex-col justify-center items-center my-6 text-center">
          <p className="text-secondaryText lg:text-5xl md:text-3xl text-2xl py-2">
            We know what it takes to be your partner
          </p>
          <p className="text-secondaryText lg:text-5xl md:text-3xl text-2xl py-2">
            in guiding you to success in achieving your
          </p>
          <p className="text-secondaryText lg:text-5xl md:text-3xl text-2xl py-2">
            your
            <span className="text-primary lg:text-5xl font-bold md:text-3xl text-2xl"> Long-Term Goals</span>
          </p>
        </h4>
      </section>
      <section className="flex lg:flex-row flex-col justify-center items-center gap-y-6 gap-x-5 bg-[#FDFFFC] my-8 mx-5 px-5">
        <div className="lg:w-[520px] lg:h-[300px] md:w-[480px] md:h-[280px] w-[300px] h-[200px] group bg-primaryText shadow-lg rounded-md flex flex-row lg:p-10 md:p-8 p-6 hover:bg-darkBlue hover:cursor-pointer">
          <div className="flex flex-col justify-between">
            <h5 className="font-bold lg:text-4xl md:text-3xl text-2xl text-primary group-hover:text-primaryText">
              I am an Agent
            </h5>
            <div>
              <p className="text-[#000000B5] lg:text-base md:text-base text-sm group-hover:text-primaryText">
                We are committed to providing our customers with exceptional Service
              </p>
              <button
                onClick={() => router.push("/agents")}
                className="bg-primary text-primaryText font-medium text-sm lg:text-base px-4 py-2 lg:px-5 lg:py-3 rounded-md mt-4 hover:bg-[#0D5F37] group-hover:border-2 group-hover:border-primaryText group-hover:bg-darkBlue"
              >
                Explore {">"}
              </button>
            </div>
          </div>
          <div className="group-hover:brightness-0 group-hover:contrast-100 group-hover:invert">
            <svg viewBox="0 0 87 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-20 md:w-16 w-14">
              <path
                d="M71.3483 0.167777C74.1185 0.18711 76.7689 1.2969 78.7224 3.25552C80.6758 5.21413 81.7742 7.86295 81.7783 10.6252L81.8203 36.5463C81.8221 37.9242 81.5511 39.2889 81.023 40.5622C80.4949 41.8355 79.72 42.9924 78.7428 43.9665L76.8574 45.8465C74.8086 43.1874 72.2143 40.995 69.2479 39.4156C66.2814 37.8363 63.011 36.9063 59.6553 36.688C56.2995 36.4697 52.9357 36.968 49.7886 38.1496C46.6414 39.3312 43.7834 41.1689 41.4055 43.5399C39.0276 45.9109 37.1845 48.7607 35.9995 51.8988C34.8145 55.0368 34.3147 58.3909 34.5337 61.737C34.7527 65.083 35.6853 68.3439 37.2692 71.3018C38.8532 74.2597 41.052 76.8465 43.7187 78.8893C41.7318 80.7662 39.0887 81.7956 36.352 81.7585C33.6153 81.7213 31.0012 80.6205 29.0663 78.6903L3.0753 52.7797C2.09941 51.8064 1.32549 50.6507 0.797813 49.3789C0.270131 48.1071 -0.000972873 46.7441 2.6232e-06 45.3678C0.000978119 43.9914 0.274013 42.6288 0.803497 41.3577C1.33298 40.0867 2.10853 38.9322 3.0858 37.9602L38.1781 3.05837C39.161 2.08079 40.3284 1.30717 41.613 0.782253C42.8975 0.257335 44.2737 -0.0084704 45.6619 0.000205745L71.3483 0.167777ZM55.4879 20.9256C55.4879 22.3144 56.0412 23.6464 57.0261 24.6284C58.011 25.6105 59.3468 26.1622 60.7397 26.1622C62.1326 26.1622 63.4684 25.6105 64.4533 24.6284C65.4382 23.6464 65.9915 22.3144 65.9915 20.9256C65.9915 19.5368 65.4382 18.2048 64.4533 17.2228C63.4684 16.2407 62.1326 15.689 60.7397 15.689C59.3468 15.689 58.011 16.2407 57.0261 17.2228C56.0412 18.2048 55.4879 19.5368 55.4879 20.9256ZM72.8345 71.1758C75.6175 67.4649 76.8875 62.8406 76.3889 58.2336C75.8903 53.6266 73.6602 49.3789 70.1473 46.3454C66.6344 43.3119 62.0995 41.7177 57.4553 41.8837C52.8112 42.0497 48.4024 43.9635 45.1164 47.2401C41.8303 50.5166 39.9109 54.9126 39.7444 59.5434C39.578 64.1741 41.1768 68.6959 44.2191 72.1986C47.2614 75.7014 51.5214 77.9251 56.1418 78.4222C60.7621 78.9194 65.3998 77.653 69.1215 74.8781L82.5135 88.2314C82.7573 88.4748 83.0468 88.668 83.3655 88.7999C83.6842 88.9317 84.0258 88.9997 84.3708 89C84.7158 89.0002 85.0575 88.9327 85.3764 88.8013C85.6952 88.6698 85.985 88.4771 86.2292 88.234C86.4733 87.9909 86.667 87.7022 86.7993 87.3845C86.9316 87.0667 86.9998 86.7261 87 86.3821C87.0002 86.0381 86.9325 85.6973 86.8007 85.3794C86.6689 85.0615 86.4756 84.7725 86.2318 84.5291L72.8345 71.1758ZM71.2432 60.2C71.2432 63.672 69.86 67.0019 67.3977 69.457C64.9355 71.9121 61.596 73.2914 58.1138 73.2914C54.6317 73.2914 51.2922 71.9121 48.8299 69.457C46.3677 67.0019 44.9844 63.672 44.9844 60.2C44.9844 56.7279 46.3677 53.398 48.8299 50.9429C51.2922 48.4878 54.6317 47.1085 58.1138 47.1085C61.596 47.1085 64.9355 48.4878 67.3977 50.9429C69.86 53.398 71.2432 56.7279 71.2432 60.2Z"
                fill="#128949"
              />
            </svg>
          </div>
        </div>
        <div className="lg:w-[520px] lg:h-[300px] md:w-[480px] md:h-[280px] w-[300px] h-[200px] group bg-primaryText shadow-lg rounded-md flex flex-row lg:p-10 md:p-8 p-6 hover:bg-darkBlue hover:cursor-pointer">
          <div className="flex flex-col justify-between">
            <h5 className="font-bold lg:text-4xl md:text-3xl text-2xl text-primary group-hover:text-primaryText">
              I am a Dealer
            </h5>
            <div>
              <p className="text-[#000000B5] lg:text-base md:text-base text-sm group-hover:text-primaryText">
                We are committed to providing our customers with exceptional Service
              </p>
              <button
                onClick={() => router.push("/dealers")}
                className="bg-primary text-primaryText font-medium text-sm lg:text-base px-4 py-2 lg:px-5 lg:py-3 rounded-md mt-4 hover:bg-[#0D5F37] group-hover:border-2 group-hover:border-primaryText group-hover:bg-darkBlue"
              >
                Explore {">"}
              </button>
            </div>
          </div>
          <div className="group-hover:brightness-0 group-hover:contrast-100 group-hover:invert">
            <svg viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-20 md:w-16 w-14">
              <path
                d="M55.9999 5.13086C27.9054 5.13086 5.13086 27.9054 5.13086 55.9999C5.13086 84.0944 27.9054 106.869 55.9999 106.869C84.0944 106.869 106.869 84.0944 106.869 55.9999C106.869 27.9054 84.0944 5.13086 55.9999 5.13086ZM60.3924 83.5799V90.7444H53.5394V83.6604C42.2939 82.1204 37.3694 72.8804 37.3694 72.8804L44.3694 67.0249C44.3694 67.0249 48.8389 74.8054 56.9239 74.8054C61.3899 74.8054 64.7779 72.4149 64.7779 68.3304C64.7779 58.7824 39.0529 59.9409 39.0529 42.2274C39.0529 34.5274 45.1429 28.9799 53.5359 27.6674V20.5099H60.3889V27.6674C66.2409 28.4374 73.1709 31.5174 73.1709 38.1429V43.2249H64.0849V40.7609C64.0849 38.2199 60.8474 36.5259 57.2249 36.5259C52.6049 36.5259 49.2204 38.8359 49.2204 42.0699C49.2204 51.8489 74.9454 49.4619 74.9454 68.0224C74.9454 75.6524 69.2474 82.2674 60.3924 83.5799Z"
                fill="#128949"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
