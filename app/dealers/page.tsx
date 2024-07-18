"use client";

import DealerBanner from "@/public/dealer-banner.png";
import Image1 from "@/public/image-1.png";
import Image2 from "@/public/image-2.png";
import Image3 from "@/public/image-3.png";
import Image from "next/image";
import Card from "../components/Card";
import Form from "../components/Form";
import { useRouter } from "next/navigation";

export default function Dealer() {
  const router = useRouter();
  type CardProps = {
    number: string;
    icon: JSX.Element;
    title: string;
    description: string;
  };
  const cards: CardProps[] = [
    {
      number: "01",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_251_943)">
            <path
              d="M48 13.2222C41.3193 13.2222 34.7888 15.2032 29.234 18.9147C23.6793 22.6263 19.3499 27.9017 16.7934 34.0737C14.2368 40.2458 13.5679 47.0374 14.8712 53.5897C16.1745 60.1419 19.3916 66.1605 24.1155 70.8844C28.8394 75.6084 34.858 78.8254 41.4102 80.1287C47.9625 81.432 54.7541 80.7631 60.9262 78.2066C67.0982 75.65 72.3736 71.3206 76.0852 65.7659C79.7967 60.2111 81.7777 53.6806 81.7777 46.9999C81.7777 38.0415 78.219 29.45 71.8845 23.1155C65.5499 16.7809 56.9584 13.2222 48 13.2222ZM64.15 58.8011C62.0389 65.1344 56.5289 66.9077 51.6944 67.2455V71.4677C51.6944 72.1676 51.4164 72.8388 50.9215 73.3337C50.4266 73.8286 49.7554 74.1066 49.0555 74.1066C48.3556 74.1066 47.6844 73.8286 47.1895 73.3337C46.6947 72.8388 46.4166 72.1676 46.4166 71.4677V67.2455C41.5688 66.791 36.9706 64.8855 33.2222 61.7777C32.9685 61.5407 32.764 61.256 32.6204 60.9399C32.4767 60.6239 32.3967 60.2826 32.385 59.9356C32.3732 59.5886 32.4299 59.2427 32.5518 58.9177C32.6737 58.5926 32.8585 58.2947 33.0955 58.0411C33.3326 57.7874 33.6172 57.5829 33.9333 57.4392C34.2494 57.2956 34.5906 57.2156 34.9376 57.2038C35.2846 57.1921 35.6305 57.2488 35.9556 57.3707C36.2806 57.4926 36.5785 57.6774 36.8322 57.9144C39.5945 60.1403 42.9192 61.5578 46.4377 62.0099V48.7522C43.6335 48.322 40.9508 47.3079 38.5633 45.7755C36.5556 44.5163 35.0527 42.5933 34.316 40.3408C33.5793 38.0883 33.6554 35.6488 34.5311 33.4466C35.7766 30.2588 39.64 26.6277 46.4377 26.0366V22.1944C46.4377 21.4945 46.7158 20.8233 47.2107 20.3284C47.7055 19.8335 48.3768 19.5555 49.0766 19.5555C49.7765 19.5555 50.4477 19.8335 50.9426 20.3284C51.4375 20.8233 51.7155 21.4945 51.7155 22.1944V26.1211C55.4892 26.5391 59.0715 28.0013 62.06 30.3433C62.4742 30.8306 62.6973 31.4518 62.6878 32.0913C62.6784 32.7308 62.437 33.3451 62.0086 33.82C61.5802 34.2948 60.9939 34.5979 60.3587 34.673C59.7235 34.748 59.0828 34.5897 58.5555 34.2277C56.5398 32.7535 54.1894 31.8032 51.7155 31.4622V44.4033C52.9822 44.6777 54.3333 44.9733 55.7477 45.4166C57.3838 45.8246 58.9191 46.5632 60.2588 47.5871C61.5986 48.611 62.7145 49.8984 63.5377 51.3699C64.7134 53.6694 64.9335 56.3402 64.15 58.8011Z"
              fill="#1F60B2"
            />
            <path
              d="M54.1643 50.4624C53.3199 50.2091 52.4966 49.998 51.6943 49.8291V61.9891C55.9166 61.5669 58.1754 60.0891 59.1466 57.1335C59.4703 56.022 59.357 54.8288 58.8299 53.798C58.3138 52.9591 57.6352 52.2319 56.8339 51.6591C56.0327 51.0863 55.1251 50.6794 54.1643 50.4624Z"
              fill="#1F60B2"
            />
            <path
              d="M39.4289 35.3469C38.9884 36.4413 38.9595 37.6584 39.3477 38.7724C39.7359 39.8865 40.5148 40.8221 41.54 41.4058C43.0318 42.3635 44.6951 43.0231 46.4378 43.348V31.2725C42.0045 31.8002 39.9567 33.9958 39.4289 35.3469Z"
              fill="#1F60B2"
            />
          </g>
          <defs>
            <clipPath id="clip0_251_943">
              <rect
                width="76"
                height="76"
                fill="white"
                transform="translate(10 9)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: " Investment Advantage",
      description:
        "Waypoint has industry leading participation programs that have been called the most transparent in the industry for dealers",
    },
    {
      number: "02",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_251_951)">
            <path
              d="M49.5 18.5V78.625"
              stroke="#1F60B2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M49.5 25H76.3799L80.625 31.5L76.3799 38H49.5V25ZM49.5 47.75H22.6201L18.375 54.25L22.6201 60.75H49.5V47.75Z"
              stroke="#1F60B2"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M35.6667 80.25H63.3334"
              stroke="#1F60B2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_251_951">
              <rect width="95" height="95" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Guided Partnership",
      description:
        "Our programs eliminate unnecessary taxes and fees and allow for cost basis investing, allowing for far greater investment income than any other programs available today",
    },
    {
      number: "03",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_251_970)">
            <path
              d="M50.3449 8.99978C51.6549 8.99978 52.9449 9.08478 54.1449 9.28478C55.3272 9.43707 56.4935 9.69476 57.6299 10.0548C58.7632 10.3948 59.8866 10.8331 60.9999 11.3698C62.0849 11.8848 63.1999 12.5148 64.3149 13.1998C66.1999 14.3998 68.0549 15.3698 69.9449 16.1448C73.6647 17.637 77.5996 18.5232 81.5999 18.7698C83.6232 18.9198 85.7182 18.9964 87.8849 18.9998V38.9998C87.8849 42.7964 87.3999 46.4064 86.4299 49.8298C85.498 53.2108 84.174 56.4712 82.4849 59.5448C80.8031 62.6142 78.8128 65.5041 76.5449 68.1698C74.2436 70.8973 71.7506 73.4572 69.0849 75.8298C66.3816 78.2064 63.5382 80.4187 60.5699 82.4548C57.5966 84.5214 54.6066 86.4264 51.5999 88.1698L50.3999 88.8848L49.1999 88.1698C46.1156 86.3847 43.1033 84.4782 40.1699 82.4548C37.1857 80.4406 34.3409 78.2272 31.6549 75.8298C28.9909 73.457 26.4996 70.8972 24.1999 68.1698C21.9397 65.4915 19.9406 62.6034 18.2299 59.5448C16.5712 56.4569 15.2486 53.1999 14.2849 49.8298C13.3152 46.3022 12.8341 42.6582 12.8549 38.9998V18.9998C15.0216 18.9964 17.1182 18.9198 19.1449 18.7698C21.1435 18.6339 23.1291 18.3481 25.0849 17.9148C26.9999 17.4848 28.9149 16.9148 30.7999 16.1448C32.7554 15.3543 34.6307 14.3782 36.3999 13.2298C38.5999 11.7998 40.8299 10.7448 43.0299 10.0498C45.3994 9.32422 47.867 8.97003 50.3449 8.99978ZM82.8549 23.9148C79.0702 23.7295 75.3208 23.0968 71.6849 22.0298C68.0696 20.9485 64.6254 19.3611 61.4549 17.3148C59.8099 16.2378 58.0249 15.3916 56.1499 14.7998C54.2758 14.2346 52.3273 13.9548 50.3699 13.9698C48.3979 13.9578 46.435 14.2374 44.5449 14.7998C42.6677 15.374 40.8852 16.2214 39.2549 17.3148C36.0777 19.3702 32.625 20.9645 28.9999 22.0498C25.4566 23.0798 21.7416 23.7098 17.8549 23.9398V39.0248C17.8549 42.3348 18.2849 45.5148 19.1449 48.5648C20.0218 51.593 21.2291 54.5155 22.7449 57.2798C24.2795 60.0725 26.0885 62.7055 28.1449 65.1398C30.2299 67.5948 32.4549 69.8798 34.8549 72.0498C37.2549 74.2198 39.7699 76.2298 42.3999 78.0798C45.0566 79.9331 47.7132 81.6281 50.3699 83.1648C53.0897 81.5842 55.7405 79.8876 58.3149 78.0798C60.9654 76.2348 63.494 74.2207 65.8849 72.0498C68.2849 69.8798 70.5149 67.5948 72.5999 65.1398C74.6563 62.7055 76.4653 60.0725 77.9999 57.2798C79.5081 54.5186 80.6974 51.5948 81.5449 48.5648C82.432 45.463 82.873 42.2508 82.8549 39.0248V23.9148Z"
              fill="#1F60B2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.9849 32.5448L66.7849 30.6548L64.7549 30.8298L42.9549 56.5698L35.5299 45.9698L33.5299 45.6298L31.2149 47.2848L30.8699 49.2848L40.4149 62.9148L41.4999 63.5148L43.7849 63.6548L44.9549 63.1448L69.1299 34.5698L68.9849 32.5448Z"
              fill="#1F60B2"
            />
          </g>
          <defs>
            <clipPath id="clip0_251_970">
              <rect
                width="80"
                height="80"
                fill="white"
                transform="translate(10 9)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Trusted Expertise",
      description:
        "With Waypoint, you will always have a guide with you every step of the way, working with you to maximize your opportunities to grow your business and your wealth, as a true partner should",
    },
    {
      number: "04",
      icon: (
        <svg
          viewBox="0 0 95 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 lg:w-20"
        >
          <path
            d="M39.3748 84.9374V79.8749H54.5673V84.9374H39.3748ZM74.8123 41.9061C74.8154 46.0131 73.9064 50.0695 72.1511 53.7824C70.3957 57.4953 67.8378 60.7721 64.662 63.3762C61.6295 65.8771 59.6248 69.4158 59.6248 73.3493V74.8124H34.3123V73.6784C34.3123 69.8815 32.7783 66.1353 29.7864 63.7913C25.746 60.631 22.6585 56.4147 20.8653 51.6088C19.0722 46.8029 18.6432 41.5947 19.626 36.5601C21.6307 25.7669 30.2167 16.9328 40.9644 14.6901C45.0345 13.7971 49.2529 13.828 53.3095 14.7804C57.3661 15.7329 61.1575 17.5827 64.4048 20.1937C67.6521 22.8048 70.2728 26.1107 72.0739 29.8682C73.875 33.6257 74.8107 37.7393 74.8123 41.9061ZM31.781 44.4374C31.781 33.9732 37.7851 26.7186 46.9685 26.7186V21.6561C34.7527 21.6561 26.7185 31.366 26.7185 44.4374H31.781Z"
            fill="#1F60B2"
          />
        </svg>
      ),
      title: "Subject Matter Expertise",
      description:
        "With partnerships with some of the most trusted and respected providers across industries, you can be certain that Waypoint will always act in your best interest, giving you access to the subject matter expertise and guidance that you need to focus on your business, your family, and sustainable growth",
    },
  ];
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[420px] w-full place-items-center object-cover">
        <Image
          src={DealerBanner}
          alt="Dealer Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-[2] opacity-95"></div>
        <div className="container z-[3] flex h-full items-center text-center lg:text-left flex-col lg:items-start text-primaryText px-4 pt-11 font-[Inter] lg:pl-10">
          <h1 className="lg:text-4xl text-3xl font-semibold">
            Become a Waypoint Dealer
          </h1>
          <span className="max-w-lg text-sm lg:text-base mt-4">
            As an administrative partner who was founded by dealers, we
            understand the specific needs of a dealer, and the ever-changing and
            demanding needs of your customers. We offer products and a claims
            experience that will allow you to provide your customers with the
            products they want, and claims that allows you to focus on your
            growth. Fill out the form below if you are interested in becoming a
            trusted partner with Waypoint Warranty Solutions and learn more
            about us.
          </span>
          <span className="font-semibold absolute text-xl bottom-5">
            Home {">"} Dealers
          </span>
        </div>
      </main>
      <section className="bg-secondaryBg p-1">
        <div className="flex flex-col justify-center items-center my-3">
          <h1 className="text-primary font-bold text-3xl lg:text-5xl my-4">
            Benefits For Dealers
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-3 my-10 flex flex-col justify-center items-center lg:items-stretch">
          <div className="flex justify-center items-center lg:mb-9 mb-5">
            <Card
              number={cards[0].number}
              icon={cards[0].icon}
              title={cards[0].title}
              description={cards[0].description}
            />
          </div>
          <div className=" lg:mb-9 mb-5 h-[90%]">
            <Card
              number={cards[1].number}
              icon={cards[1].icon}
              title={cards[1].title}
              description={cards[1].description}
            />
          </div>
          <div className="flex justify-end items-center lg:mb-9 mb-5">
            <Card
              number={cards[2].number}
              icon={cards[2].icon}
              title={cards[2].title}
              description={cards[2].description}
            />
          </div>
          <div className="flex justify-center items-center lg:mb-9 mb-5">
            <Card
              number={cards[3].number}
              icon={cards[3].icon}
              title={cards[3].title}
              description={cards[3].description}
            />
          </div>
        </div>
      </section>
      <section className="bg-secondaryBg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary font-bold text-3xl lg:text-5xl my-4">
            Our Products
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-around">
          <div className="flex flex-col items-center md:items-end lg:items-start justify-start lg:w-[400px] mx-10">
            <p className="lg:text-left text-center">
              Waypoint Warranty Solutions specializes in customized service
              contracts, protection and maintenance plans, and a wide range of
              ancillary products to meet your customers&apos; needs, which are
              tried-and-true marketing tools that can help boost your bottom
              line. Our goal was to transform the automotive consumer experience
              by enhancing products and creating a roadmap for what&apos;s next.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="bg-primary text-primaryText text-sm lg:text-base px-3 py-3 lg:px-5 lg:py-4 rounded-full my-4 hover:bg-[#0D5F37]"
            >
              View Products
            </button>
          </div>
          <div className="flex flex-col space-y-5 items-center px-10 py-5 lg:flex-row lg:items-end lg:space-x-8">
            <div>
              <Image
                src={Image1}
                alt="Car Image"
                className="object-cover w-[370px] h-[220px] lg:w-[270px] lg:h-[415px]"
              />
            </div>
            <div>
              <Image
                src={Image2}
                alt="Car Image"
                className="object-cover w-[430px] h-[220px] lg:w-[270px] lg:h-[480px]"
              />
            </div>
            <div>
              <Image
                src={Image3}
                alt="Car Image"
                className="object-cover w-[510px] h-[220px] lg:w-[270px] lg:h-[550px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primaryBg ">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mt-6 lg:text-5xl md:text-4xl text-3xl font-semibold">
            Signup as a Dealer
          </h2>
        </div>
        <Form />
      </section>
    </>
  );
}
