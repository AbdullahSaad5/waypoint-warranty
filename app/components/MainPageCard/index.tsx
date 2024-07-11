import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ image, title, description, icon }) => {
  return (
    <div className="lg:w-[450px] w-[300px] md:w-[400px] h-max rounded-xl overflow-hidden shadow-lg bg-white relative">
      <div className="relative z-[1] w-full h-60">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="relative z-[2]">
        <div className="triangle"></div>
        <div className="triangle-1"></div>
        <div className="w-28 h-28 relative z-[3] bg-white rounded-full mx-auto flex items-center justify-center -mt-14 border-4 border-white shadow-lg">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-center">
          <h2 className="text-4xl font-medium mt-2 text-left text-secondaryText">
            {title}
          </h2>
          <div className="border-[3px] border-primary w-[40px] rounded-lg mt-1"></div>
          <p className="text-gray-700 text-base mt-2 text-left">
            {description}
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 mb-4 text-left">
        <button className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-primary rounded-full shadow">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
