"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  icon: JSX.Element;
  path: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, icon, path }) => {
  const router = useRouter();
  return (
    <div className="lg:w-[450px] w-[280px] md:w-[420px] lg:h-[655px] md:h-[600px] h-[670px] rounded-xl overflow-hidden shadow-lg bg-white relative">
      <div className="relative z-[1] w-full h-60">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-xl object-cover" />
      </div>
      <div className="relative z-[2]">
        <div className="triangle"></div>
        <div className="triangle-1"></div>
        <div className="w-28 h-28 relative z-[3] bg-white rounded-full mx-auto flex items-center justify-center -mt-14 border-4 border-white shadow-lg -translate-y-1/4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center absolute">{icon}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-center">
          <h2 className="text-4xl font-medium mt-2 text-left text-secondaryText">{title}</h2>
          <div className="border-[3px] border-primary w-[40px] rounded-lg mt-1"></div>
          <p className="text-gray-700 text-base mt-2 text-left">{description}</p>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 px-6 pt-4 my-4 text-left">
        <button
          onClick={() => router.push(path)}
          className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-primary rounded-full shadow"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
