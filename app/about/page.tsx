import Image from "next/image";
import AboutBanner from "@/public/about-banner.png";
import AboutBanner1 from "@/public/about1-banner.png";

export default function About() {
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={AboutBanner1}
          alt="About Banner"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#05122380] z-[2] opacity-95"></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">ABOUT US</h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} About Us
        </span>
      </main>
      <section className="bg-primaryBg p-1">
        <div className="flex flex-col lg:flex-row justify-center items-center m-10 gap-y-4 gap-x-8">
          <div
            className="flex flex-col group hover:bg-darkBlue min-h-max w-[250px] h-[400px] pb-5 px-5 rounded-2xl lg:px-8 lg:w-[410px] lg:h-[460px]"
            style={{
              boxShadow:
                "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span className="flex justify-center items-center mt-8 mb-4">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[120px] lg:w-[140px] lg:h-[140px] group-hover:brightness-0 group-hover:contrast-100 group-hover:invert"
              >
                <path
                  d="M97.5756 110.518C99.5709 108.824 101.499 107.067 103.349 105.273C104.45 104.201 106.208 105.12 106.092 106.681C105.545 114.273 102.558 121.535 97.4722 127.205C93.7675 131.334 89.1321 135.869 83.8397 139.718C82.9454 140.365 81.7106 139.839 81.4672 138.735L78.5047 125.15C78.2857 124.154 78.7541 123.139 79.6301 122.683C83.0063 120.932 91.2126 115.941 97.5756 110.518Z"
                  fill="#1F60B2"
                />
                <path
                  d="M45.0895 73.9661C50.4974 68.6955 57.4141 65.5877 64.647 64.9915C66.1435 64.871 67.0134 66.6913 66.0036 67.8456C58.2657 76.7061 51.4221 88.4397 49.3538 92.6067C48.9158 93.4946 47.9486 93.9513 47.0118 93.7356L34.0241 90.6532C32.9656 90.4058 32.4668 89.112 33.0873 88.186C36.7737 82.6617 41.1232 77.8287 45.0895 73.9661Z"
                  fill="#1F60B2"
                />
                <path
                  d="M108.58 38.4291C114.097 36.2093 119.968 34.611 126.185 33.9006C131.252 33.3234 135.559 37.9788 134.859 43.2431C133.983 49.8519 132.365 56.0358 130.23 61.8202C129.877 62.7715 128.691 63.0316 127.997 62.3085C123.94 58.0718 112.516 46.1606 107.984 41.4418C107.089 40.5031 107.393 38.9048 108.58 38.4291Z"
                  fill="#1F60B2"
                />
                <path
                  d="M109.303 60.076C113.981 64.9534 113.981 72.8688 109.303 77.7461C104.619 82.6298 97.0336 82.6298 92.3495 77.7461C87.6715 72.8688 87.6715 64.9534 92.3556 60.076C97.0336 55.1986 104.619 55.1986 109.303 60.076ZM95.1235 74.8603C98.2746 78.1394 103.378 78.1394 106.53 74.8603C109.681 71.5749 109.681 66.2472 106.53 62.9682C103.378 59.6828 98.2746 59.6828 95.1235 62.9682C91.9724 66.2536 91.9785 71.5749 95.1235 74.8603Z"
                  fill="#1F60B2"
                />
                <path
                  d="M106.53 62.968C109.681 66.247 109.681 71.5747 106.53 74.8601C103.379 78.1392 98.2753 78.1392 95.1242 74.8601C91.9792 71.5747 91.9731 66.2534 95.1242 62.968C98.2753 59.6826 103.379 59.6826 106.53 62.968Z"
                  fill="#1F60B2"
                />
                <path
                  d="M102.801 41.0167C103.476 40.6742 104.297 40.8264 104.832 41.3845L127.851 65.3844C128.253 65.8094 128.368 66.4563 128.131 67.0018C122.857 78.951 115.411 88.9784 107.783 97.0461C104.279 100.756 100.738 104.048 97.3561 106.928C88.4016 114.551 80.5603 119.264 77.4518 121.014C76.8861 121.338 76.2291 121.357 75.6573 121.128C75.3835 121.014 75.128 120.856 74.909 120.627L68.5703 114.019C68.4577 113.901 68.5142 113.698 68.6361 113.59L90.6403 94.1349C92.9519 92.1116 93.2682 86.3844 89.0708 82.0081C84.9464 77.7079 79.6904 78.285 77.6769 80.378L63.3047 96.5828C60.3402 99.9252 55.1547 100.028 52.0604 96.805C51.8658 96.6021 51.7198 96.3611 51.6163 96.1074C51.3548 95.4795 51.373 94.7501 51.7076 94.1222C54.1044 89.6507 61.97 75.8939 74.5684 62.6128C82.2637 54.4881 91.7352 46.5536 102.801 41.0167ZM92.3496 77.7459C97.0337 82.6296 104.62 82.6296 109.304 77.7459C113.982 72.8686 113.982 64.9532 109.304 60.0758C104.62 55.1984 97.0337 55.1984 92.3557 60.0758C87.6716 64.9532 87.6716 72.8686 92.3496 77.7459Z"
                  fill="#1F60B2"
                />
                <path
                  d="M85.8774 93.4118L62.9558 114.076C61.508 115.382 59.3363 115.3 57.9797 113.892C56.5988 112.452 56.5441 110.137 57.8581 108.634L78.2247 85.2427C80.3295 82.8199 83.949 82.7311 86.1694 85.0397C88.4202 87.3928 88.2864 91.2427 85.8774 93.4118Z"
                  fill="#1F60B2"
                />
                <path
                  d="M65.8581 123.12C66.801 122.492 68.0968 122.631 68.9119 123.481C69.0336 123.614 69.1431 123.754 69.2404 123.913C69.9765 125.105 69.648 126.697 68.5043 127.471L53.8924 136.42C52.9556 137.048 51.6599 136.902 50.8447 136.052C50.7231 135.925 50.6075 135.779 50.5162 135.627C49.7802 134.435 50.1087 132.836 51.2523 132.069L65.8581 123.12Z"
                  fill="#1F60B2"
                />
                <path
                  d="M48.3138 102.088C48.4598 102.19 48.5997 102.304 48.7214 102.437C49.5365 103.287 49.6764 104.638 49.0499 105.646L40.509 120.811C39.7486 122.035 38.2217 122.384 37.072 121.617C36.926 121.515 36.7861 121.401 36.6644 121.268C35.8493 120.418 35.7094 119.067 36.3359 118.059L44.8768 102.894C45.6372 101.663 47.1702 101.321 48.3138 102.088Z"
                  fill="#1F60B2"
                />
                <path
                  d="M52.6444 119.15C53.6056 120.152 53.6056 121.788 52.6444 122.79L40.7517 135.183C39.7905 136.192 38.2272 136.192 37.2599 135.183C36.2988 134.181 36.2988 132.551 37.2599 131.543L49.1526 119.15C50.1138 118.147 51.6833 118.147 52.6444 119.15Z"
                  fill="#1F60B2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M81.8565 14.0237C89.3145 15.8821 94.6799 22.77 94.8989 30.7552C94.8989 30.8376 94.9597 30.9011 95.0327 30.9074C95.1057 30.9201 95.1787 30.8694 95.1909 30.7869C96.9733 23.0174 103.58 17.4233 111.245 17.195C111.318 17.1886 111.378 17.1316 111.391 17.0554C111.397 16.973 111.348 16.9032 111.275 16.8842C103.817 15.0259 98.4515 8.14427 98.2325 0.152753C98.2325 0.0766438 98.1717 0.00687658 98.0987 0.000534107C98.0257 -0.00580837 97.9527 0.0449314 97.9405 0.121041C96.1581 7.89691 89.5518 13.491 81.8869 13.7193C81.8139 13.7193 81.7531 13.7764 81.747 13.8588C81.7348 13.9349 81.7835 14.0047 81.8565 14.0237Z"
                  fill="#1F60B2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.116094 97.1668C7.56805 99.0251 12.9395 105.913 13.1585 113.898C13.1585 113.981 13.2133 114.044 13.2924 114.05C13.3654 114.063 13.4323 114.012 13.4505 113.936C15.2329 106.16 21.8393 100.566 29.4981 100.338C29.5772 100.338 29.638 100.275 29.6441 100.199C29.6502 100.116 29.6015 100.046 29.5285 100.027C22.0765 98.1689 16.7051 91.2873 16.4921 83.2958C16.4861 83.2197 16.4313 83.1563 16.3583 83.1436C16.2792 83.1373 16.2123 83.188 16.1941 83.2641C14.4117 91.04 7.80529 96.634 0.14651 96.8624C0.073511 96.8624 0.0065955 96.9194 0.000512276 97.0019C-0.00557095 97.078 0.0430949 97.1478 0.116094 97.1668Z"
                  fill="#1F60B2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M110.472 106.992C117.93 108.85 123.295 115.738 123.514 123.723C123.514 123.805 123.569 123.869 123.648 123.875C123.721 123.882 123.788 123.831 123.806 123.755C125.588 115.985 132.195 110.385 139.854 110.156C139.933 110.156 139.993 110.099 140 110.017C140.006 109.941 139.957 109.871 139.884 109.852C132.432 107.994 127.067 101.106 126.848 93.1205C126.842 93.0381 126.787 92.9747 126.714 92.9683C126.635 92.962 126.568 93.0127 126.55 93.0888C124.767 100.858 118.167 106.452 110.502 106.681C110.429 106.687 110.368 106.744 110.356 106.82C110.35 106.903 110.399 106.972 110.472 106.992Z"
                  fill="#1F60B2"
                />
              </svg>
            </span>
            <p className="text-center text-[#605B5B] group-hover:text-primaryText">
              Waypoint was founded by Dealers and Agents, for Dealers and Agents
              A guide to help you select the right products, structures and
              services for your customers.
            </p>
          </div>
          <div
            className="flex flex-col group hover:bg-darkBlue min-h-max w-[250px] pb-5 px-5 shadow-md rounded-2xl lg:px-8 lg:w-[410px] lg:h-[460px]"
            style={{
              boxShadow:
                "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span className="flex justify-center items-center mt-8 mb-4">
              <svg
                width="90"
                height="124"
                viewBox="0 0 90 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[70px] lg:w-[90px] lg:h-[124px] group-hover:brightness-0 group-hover:contrast-100 group-hover:invert"
              >
                <path
                  d="M57.3562 102.75H32.6442C31.4769 102.75 30.5308 103.694 30.5308 104.86C30.5308 106.026 31.4769 106.976 32.6442 106.976H57.3562C58.5234 106.976 59.4683 106.027 59.4683 104.86C59.4683 103.694 58.5234 102.75 57.3562 102.75Z"
                  fill="#1F60B2"
                />
                <path
                  d="M57.3562 109.932H32.6442C31.4769 109.932 30.5308 110.877 30.5308 112.042C30.5308 113.208 31.4769 114.153 32.6442 114.153H57.3562C58.5234 114.153 59.4683 113.208 59.4683 112.042C59.4683 110.877 58.5234 109.932 57.3562 109.932Z"
                  fill="#1F60B2"
                />
                <path
                  d="M31.9781 57.9683C28.68 57.9683 25.9961 60.6521 25.9961 63.9515C25.9961 67.2473 28.68 69.931 31.9781 69.931C35.2804 69.931 37.9601 67.2539 37.9601 63.9515C37.9601 60.6519 35.2762 57.9683 31.9781 57.9683Z"
                  fill="#1F60B2"
                />
                <path
                  d="M47.8145 96.4523V76.9722C47.8145 75.4178 46.5544 74.1577 45 74.1577C43.4456 74.1577 42.1855 75.4178 42.1855 76.9722V96.4523C42.1855 98.0067 43.4456 99.2668 45 99.2668C46.5544 99.2668 47.8145 98.0067 47.8145 96.4523Z"
                  fill="#1F60B2"
                />
                <path
                  d="M64.004 63.951C64.004 60.6517 61.3201 57.9678 58.022 57.9678C54.7239 57.9678 52.04 60.6517 52.04 63.951C52.04 67.2534 54.7197 69.9305 58.022 69.9305C61.3201 69.9307 64.004 67.2468 64.004 63.951Z"
                  fill="#1F60B2"
                />
                <path
                  d="M86.4621 27.4826C84.1953 22.1251 80.9512 17.3129 76.8199 13.1803C72.6873 9.04773 67.8751 5.80366 62.5164 3.5369C56.9667 1.18986 51.074 0 45.0001 0C38.9263 0 33.0323 1.18986 27.4839 3.5369C22.1251 5.80366 17.3129 9.04773 13.1803 13.1803C9.04902 17.3129 5.80495 22.1251 3.53819 27.4826C1.19115 33.0323 0 38.9252 0 44.9988C0 60.3253 10.0654 70.3228 19.7979 79.9976C21.4764 81.6661 23.2128 83.3901 24.8628 85.1088C26.3756 86.687 28.8961 93.4618 30.2028 97.7688C30.473 98.6584 31.2946 99.2664 32.2256 99.2664C35.3926 99.2664 37.96 96.6991 37.96 93.532V80.1394C37.96 76.8356 35.2818 74.1574 31.978 74.1574C26.3491 74.1574 21.7706 69.5788 21.7706 63.9512C21.7706 58.3223 26.3491 53.7424 31.978 53.7424C37.607 53.7424 42.1855 58.3223 42.1855 63.9512V67.1161C42.1855 68.6705 43.4456 69.9306 45 69.9306C46.5544 69.9306 47.8145 68.6705 47.8145 67.1161V63.9512C47.8145 58.3223 52.393 53.7424 58.022 53.7424C63.6509 53.7424 68.2295 58.3223 68.2295 63.9512C68.2295 69.5788 63.6509 74.1574 58.022 74.1574C54.7182 74.1574 52.04 76.8356 52.04 80.1394V93.532C52.04 96.6991 54.6074 99.2664 57.7744 99.2664C58.7054 99.2664 59.526 98.6584 59.7959 97.7688C61.1026 93.4618 63.6244 86.687 65.1359 85.1088C66.7869 83.3899 68.522 81.6661 70.2021 79.9976C79.9346 70.3228 90 60.3253 90 44.9988C90.0003 38.9252 88.8091 33.0323 86.4621 27.4826ZM28.9113 20.1914C23.9068 21.2693 19.8244 25.1644 18.2602 30.3587C17.9838 31.2722 17.1457 31.8628 16.2373 31.8628C16.0364 31.8628 15.8315 31.8339 15.628 31.7722C14.511 31.4353 13.8777 30.2568 14.2145 29.14C16.2237 22.4733 21.5145 17.4625 28.0217 16.0616C29.1627 15.8166 30.2872 16.5415 30.5321 17.6825C30.7781 18.8232 30.052 19.9464 28.9113 20.1914Z"
                  fill="#1F60B2"
                />
                <path
                  d="M44.79 123.044C45.8474 123.044 46.8583 122.832 47.7859 122.447C51.4957 120.906 48.8083 116.626 44.7913 116.626C40.7734 116.626 38.086 120.908 41.797 122.448C42.7238 122.832 43.7337 123.044 44.79 123.044Z"
                  fill="#1F60B2"
                />
              </svg>
            </span>
            <p className="text-center text-[#605B5B] group-hover:text-primaryText">
              Our participation programs, for both dealer and agent partners,
              are the most revolutionary in the industry. Let us show you how to
              truly grow wealth like a participation program should with the
              elimination of unnecessary taxes and fees, coupled with maximizing
              investment income.
            </p>
          </div>
          <div
            className="flex flex-col group hover:bg-darkBlue min-h-max w-[250px] pb-5 px-5 shadow-md rounded-2xl lg:px-8 lg:w-[410px] lg:h-[460px]"
            style={{
              boxShadow:
                "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span className="flex justify-center items-center mt-8 mb-4">
              <svg
                width="146"
                height="120"
                viewBox="0 0 146 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[100px] lg:w-[140px] lg:h-[120px] group-hover:brightness-0 group-hover:contrast-100 group-hover:invert"
              >
                <g clipPath="url(#clip0_486_72)">
                  <path
                    d="M76.7829 65.4837C76.7829 64.9044 76.5555 64.3488 76.1507 63.9391C75.7458 63.5295 75.1968 63.2993 74.6243 63.2993H70.3069C69.7344 63.2993 69.1853 63.5295 68.7805 63.9391C68.3757 64.3488 68.1483 64.9044 68.1483 65.4837V78.5902C68.1483 79.1695 68.3757 79.7251 68.7805 80.1348C69.1853 80.5444 69.7344 80.7746 70.3069 80.7746H74.6243C75.1968 80.7746 75.7458 80.5444 76.1507 80.1348C76.5555 79.7251 76.7829 79.1695 76.7829 78.5902V74.2214C76.7829 73.642 76.5555 73.0864 76.1507 72.6767C75.7458 72.2671 75.1968 72.0369 74.6243 72.0369H68.1483M53.0376 63.2993H58.4343C59.293 63.2993 60.1166 63.6445 60.7239 64.259C61.3311 64.8735 61.6723 65.7069 61.6723 66.5759V68.7603C61.6723 69.6293 61.3311 70.4628 60.7239 71.0773C60.1166 71.6917 59.293 72.0369 58.4343 72.0369M58.4343 72.0369H55.1963M58.4343 72.0369C59.293 72.0369 60.1166 72.3822 60.7239 72.9966C61.3311 73.6111 61.6723 74.4445 61.6723 75.3136V77.498C61.6723 78.367 61.3311 79.2004 60.7239 79.8149C60.1166 80.4294 59.293 80.7746 58.4343 80.7746H53.0376M53.0376 87.3278C53.0376 90.9474 61.737 93.881 72.4656 93.881C83.1942 93.881 91.8936 90.9474 91.8936 87.3278M83.2589 67.6681V76.4058C83.2589 77.5644 83.7138 78.6757 84.5234 79.495C85.3331 80.3143 86.4312 80.7746 87.5762 80.7746C88.7213 80.7746 89.8194 80.3143 90.6291 79.495C91.4387 78.6757 91.8936 77.5644 91.8936 76.4058V67.6681C91.8936 66.5094 91.4387 65.3982 90.6291 64.5789C89.8194 63.7596 88.7213 63.2993 87.5762 63.2993C86.4312 63.2993 85.3331 63.7596 84.5234 64.5789C83.7138 65.3982 83.2589 66.5094 83.2589 67.6681Z"
                    stroke="#1F60B2"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <path
                  d="M110.209 48.5549C107.006 47.5249 103.658 46.6421 100.164 45.9064C99.4358 42.5223 98.5623 39.1382 97.5432 35.7541C92.0109 17.6564 82.9845 7.35693 72.7934 7.35693C62.6023 7.35693 53.5759 17.6564 48.0436 35.7541C42.3658 54.5874 41.4922 75.7749 44.404 95.3439C41.7834 94.7554 39.3084 94.1669 36.979 93.284H36.8334C21.838 88.5757 12.8116 81.2189 12.8116 73.5679C12.8116 65.9169 21.838 58.5601 36.8334 53.8517C38.2893 53.4103 39.1628 51.939 38.7261 50.4676C38.2893 48.9963 36.8334 48.1135 35.3776 48.5549C17.4704 54.146 7.2793 63.2684 7.2793 73.5679C7.2793 83.8674 17.4704 92.9898 35.3776 98.5809H35.5232C38.5805 99.6109 41.929 100.347 45.4231 101.082C46.151 104.466 47.0245 107.85 48.0436 111.235C53.5759 129.479 62.6023 139.779 72.7934 139.779C82.9845 139.779 92.0109 129.479 97.5432 111.382C97.98 109.91 97.252 108.439 95.7962 107.85C94.3403 107.409 92.8844 108.145 92.3021 109.616C87.6433 125.065 80.3639 134.188 72.7934 134.188C65.2229 134.188 57.9436 125.065 53.1392 109.763C52.4113 107.409 51.8289 104.908 51.2466 102.259C68.2802 104.908 85.7507 104.319 102.639 100.641C124.914 95.4911 138.308 85.3387 138.308 73.5679C138.308 63.2684 128.116 54.146 110.209 48.5549ZM101.328 95.3439C84.4404 99.0223 67.1155 99.4637 50.0819 96.521C46.879 77.2463 47.6069 56.2059 53.1392 37.5197C57.9436 22.0705 65.2229 12.9481 72.7934 12.9481C80.3639 12.9481 87.6433 22.0705 92.4477 37.3726C93.1756 39.7267 93.7579 42.228 94.3403 44.8765C82.6933 43.1109 70.7552 42.8166 58.9627 43.8465C57.5068 43.9937 56.3421 45.3179 56.4877 46.7892C56.6333 48.2606 57.9436 49.4377 59.3994 49.2905C71.3376 48.1135 83.4213 48.5549 95.3594 50.6148C95.9417 53.7046 96.3785 56.9416 96.6697 60.1786C97.5432 69.1538 97.5432 78.1291 96.6697 86.9572C96.5241 88.4286 97.5432 89.8999 98.9991 90.0471C100.455 90.1942 101.911 89.1643 102.056 87.6929V87.5458C102.93 78.2762 102.93 69.0067 102.056 59.7372C101.765 57.0887 101.474 54.4403 101.037 51.939C139.909 59.8843 145.441 85.1916 101.328 95.3439Z"
                  fill="#1F60B2"
                />
                <defs>
                  <clipPath id="clip0_486_72">
                    <rect
                      x="46.5615"
                      y="57.334"
                      width="51.808"
                      height="27.6785"
                      rx="12"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p className="text-center text-[#605B5B] group-hover:text-primaryText">
              Our full suite of products that can accompany or replace
              traditional OEM offerings, give you the tools, technology and
              claims experience to provide additional revenue opportunities and
              increased customer loyalty throughout vehicle ownership.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primaryBg">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:px-16 px-10 gap-y-5 gap-x-9 my-10">
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-[700px]">
            <h2 className="font-bold text-4xl mb-4 text-center lg:text-left">
              <p className="my-1">Waypoint&apos;s Commitment </p>{" "}
              <p>
                {" "}
                To <span className="text-secondaryText">Excellence</span>{" "}
              </p>
            </h2>
            <p className="text-[#656262] md:text-md lg:text-left text-center">
              As the industry has changed around us, Waypoint Warranty Solutions
              has continued to ask, &quot;How do we meet this change to better
              serve our partners&quot;? Guiding the way as &quot;True
              North&quot; on your compass in the warranty and product
              administration industry is a great responsibility. Waypoint has
              embraced this role, and whether you&apos;re looking for superior
              products and ease of doing business, or the most profitable and
              innovative participation programs in the industry, Waypoint will
              be your partner, your compass and guide through an ever-changing
              landscape.
            </p>
          </div>
          <div className="my-5 ">
            <Image
              src={AboutBanner}
              alt="About Us Banner"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
