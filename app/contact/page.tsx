"use client";

import ContactBanner from "@/public/contact-banner.png";
import Image from "next/image";
import MapImage from "@/public/lancaster-map.png";

export default function Contact() {
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={ContactBanner}
          alt="Contact Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#05122380] z-[2] opacity-90"></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">CONTACT US</h1>
        </div>
      </main>
      <section className="bg-primaryBg p-1">
        <h4 className="flex flex-col justify-center items-center my-6 ">
          <p className="text-primary lg:text-2xl md:text-2xl text-xl font-bold font-[Inter]">
            GET IN TOUCH
          </p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            We Want To Share Our
          </p>
          <p className="text-secondaryText lg:text-4xl md:text-3xl text-2xl py-2">
            Location To Find
            <span className="text-primary lg:text-4xl font-bold md:text-3xl text-2xl">
              {" "}
              Us Easily.
            </span>
          </p>
        </h4>
      </section>
      <section>
        <form className="lg:px-[120px] md:px-[60px] px-[30px]">
          <div className="grid grid-cols-2 col-span-1 lg:gap-x-9 lg:gap-y-5 gap-4">
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                First Name<span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                required
                className="rounded-xl w-full p-3 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Email Address <span className="text-red-600"> *</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="rounded-xl w-full p-3 pr-16  border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Phone Number<span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                required
                className="rounded-xl w-full p-3 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 md:col-span-1">
              <label className="font-semibold ml-3">
                Your Website<span className="text-red-600"> *</span>
              </label>
              <input
                type="url"
                placeholder="Your Website"
                required
                className="rounded-xl w-full p-3 pr-16  border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <label className="font-semibold ml-3">Your Comment</label>
              <textarea
                placeholder="Your Comment"
                rows={6}
                className="rounded-xl w-full p-4 pr-16 border border-gray-400 mt-2 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <button
              type="submit"
              className="bg-primary text-primaryText py-3 px-3 rounded-md hover:bg-[#0D5F37]"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
      <section className="bg-primaryBg">
        <div className="flex lg:flex-row justify-center flex-col items-center lg:justify-around box-content my-10 mx-6 gap-x-3 gap-y-5">
          <div className="lg:w-80 lg:h-[180px] w-72 h-[150px] border border-gray-300 flex flex-row justify-between items-center">
            <div className="mx-5">
              <svg
                width="75"
                height="60"
                viewBox="0 0 84 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.561 4.4375C33.9856 4.44513 26.7231 7.01895 21.3666 11.5944C16.01 16.1698 12.9967 22.3732 12.9878 28.8438C12.9808 34.1312 15.0028 39.275 18.744 43.4875C18.744 43.4875 19.5233 44.3639 19.6506 44.4904L41.561 66.5625L63.4818 44.4793C63.5961 44.3617 64.378 43.4875 64.378 43.4875L64.3806 43.4808C68.1193 39.2699 70.1402 34.1287 70.1342 28.8438C70.1252 22.3732 67.112 16.1698 61.7554 11.5944C56.3988 7.01895 49.1363 4.44513 41.561 4.4375ZM41.561 37.7188C39.506 37.7188 37.4971 37.1982 35.7885 36.223C34.0798 35.2478 32.7481 33.8618 31.9616 32.2401C31.1752 30.6184 30.9695 28.8339 31.3704 27.1123C31.7713 25.3907 32.7609 23.8094 34.214 22.5682C35.6671 21.327 37.5184 20.4817 39.5339 20.1393C41.5495 19.7968 43.6386 19.9726 45.5372 20.6443C47.4357 21.316 49.0585 22.4536 50.2001 23.9131C51.3418 25.3726 51.9512 27.0884 51.9512 28.8438C51.9478 31.1966 50.852 33.4523 48.9042 35.1161C46.9564 36.7798 44.3156 37.7158 41.561 37.7188Z"
                  fill="#128949"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="lg:text-xl text-secondaryText font-semibold font-[Inter]">
                Office Address
              </p>
              <p className="lg:text-lg">
                2173 Embassy Drive Lancaster, PA 17603
              </p>
            </div>
          </div>
          <div className="lg:w-80 lg:h-[180px] w-72 h-[150px] border border-gray-300 flex flex-row justify-center items-center">
            <div className="mr-6">
              <svg
                width="75"
                height="60"
                viewBox="0 0 84 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_272_2239)">
                  <path
                    d="M23.309 39.9821L20.0118 41.9346C16.015 44.3338 11.8382 47.0702 8.58255 50.6262C8.02333 51.2415 7.66787 51.9738 7.55333 52.7466C7.43879 53.5194 7.56937 54.3043 7.93143 55.0193C9.1058 57.3605 10.8687 59.4524 13.0953 61.1467C15.3218 62.841 17.9575 64.0961 20.8153 64.8232L21.9444 65.0806C23.0527 65.3173 24.3688 65.5214 25.7957 65.474L26.5473 65.4445L27.8842 65.3439L28.3829 65.2965L29.4566 65.1723L30.6272 65.0066L31.8948 64.7907L32.5598 64.6635L33.9521 64.3676C39.452 63.1162 46.7078 60.504 54.4451 55.0962L41.9872 44.458C40.8096 45.174 39.6459 45.8248 38.5757 46.3869L37.0587 47.159C36.6865 47.3384 36.2481 47.3893 35.8333 47.3013C35.4185 47.2133 35.0589 46.993 34.8283 46.6857L30.4298 40.9642C29.6211 40.0467 28.4282 39.432 27.1008 39.249C25.7735 39.0659 24.4146 39.3286 23.309 39.9821ZM64.3782 6.76C63.5675 6.46152 62.6799 6.34822 61.8025 6.4312C60.9251 6.51419 60.0881 6.7906 59.3735 7.23333C55.5291 9.62662 52.516 12.869 49.9288 15.9989L48.4291 17.8567L46.7251 20.0045C45.3398 21.7321 45.558 24.0544 47.2308 25.5661L47.6118 25.8797L54.3689 30.1663C54.6945 30.3676 54.9237 30.6628 55.0141 30.9973C55.1045 31.3317 55.05 31.6829 54.8607 31.9857C53.7745 33.6551 52.5632 35.2628 51.2345 36.7989L50.5764 37.5385L27.6694 17.9721C27.0462 17.4415 26.2098 17.1335 25.3303 17.1105C24.4508 17.0876 23.594 17.3515 22.934 17.8486C22.274 18.3457 21.8602 19.0387 21.7768 19.7869C21.6933 20.5352 21.9464 21.2825 22.4847 21.8771L22.7722 22.1581L69.3031 61.9033C69.925 62.4395 70.7632 62.7525 71.6463 62.7781C72.5294 62.8037 73.3905 62.54 74.0535 62.041C74.7164 61.542 75.131 60.8455 75.2124 60.0939C75.2938 59.3424 75.0359 58.5927 74.4913 57.9983L74.2004 57.7173L62.927 48.0879C69.7153 41.4908 73.1752 35.2103 74.9208 30.3054L75.3225 29.1072L75.4992 28.5304L75.8074 27.4269L76.0533 26.3885L76.2507 25.4212L76.4031 24.5277L76.514 23.7112L76.5902 22.9746L76.6386 22.3238C76.704 21.3203 76.6073 20.3139 76.3512 19.3329L76.1364 18.5578C75.3717 15.9514 73.9127 13.5309 71.8732 11.4851C69.8337 9.43922 67.2687 7.82025 64.3782 6.76Z"
                    fill="#128949"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_272_2239">
                    <rect
                      width="83.1219"
                      height="71"
                      fill="white"
                      transform="matrix(-1 0 0 1 83.1221 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="lg:text-2xl text-secondaryText font-semibold font-[Inter]">
                Phone Number
              </p>
              <p className="lg:text-lg">(408) 389-5470</p>
            </div>
          </div>
          <div className="lg:w-80 lg:h-[180px] w-72 h-[150px] border border-gray-300 flex justify-center flex-col items-center">
            <div className="flex flex-row justify-between">
              <svg
                width="lg:65"
                height="60"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 62.5C10.7812 62.5 9.31042 61.8885 8.0875 60.6656C6.86458 59.4427 6.25208 57.9708 6.25 56.25V18.75C6.25 17.0312 6.8625 15.5604 8.0875 14.3375C9.3125 13.1146 10.7833 12.5021 12.5 12.5H62.5C64.2188 12.5 65.6906 13.1125 66.9156 14.3375C68.1406 15.5625 68.7521 17.0333 68.75 18.75V56.25C68.75 57.9687 68.1385 59.4406 66.9156 60.6656C65.6927 61.8906 64.2208 62.5021 62.5 62.5H12.5ZM37.5 40.625L62.5 25V18.75L37.5 34.375L12.5 18.75V25L37.5 40.625Z"
                  fill="#128949"
                />
              </svg>
              <p className="lg:text-2xl text-secondaryText font-semibold font-[Inter]">
                Mail Address
              </p>
            </div>
            <div className="lg:text-md text-sm md:text-md ">
              <p>Info@Waypointwarrantysolutions.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primaryBg ">
        <div className="flex justify-center items-center my-10 mx-10">
          <div className="h-[40vw] w-[80vw] lg:h-[80vh] border border-gray-500">
            <Image
              src={MapImage}
              alt="Lancaster Map"
              className="h-[40vw] lg:h-[80vh] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
