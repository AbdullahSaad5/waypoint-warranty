import React from "react";

interface ProductCardProps {
  number: string;
  icon: JSX.Element;
  title: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  number,
  icon,
  title,
  onClick,
}) => {
  return (
    <div>
      <div
        className="card group rounded-sm bg-base-100 lg:w-[310px] shadow-md lg:h-[220px] hover:bg-darkBlue hover:cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-between items-center p-2 mx-2">
          <span className="group-hover:brightness-0 group-hover:contrast-100 group-hover:invert">
            {icon}
          </span>
          <span className="font-normal text-4xl text-gray-400 group-hover:bg-clip-text group-hover:bg-white group-hover:fill-transparent group-hover:text-primaryText">
            {/* <span className="font-normal text-4xl text-gray-400 group-hover:bg-clip-text group-hover:bg-white group-hover:fill-blue group-hover:stroke-white group-hover:stroke-2"> */}
            {number}
          </span>
        </div>
        <div className="border border-gray-300 group-hover:border-white"></div>
        <div className="card-body pt-5 flex justify-center">
          <h2 className="card-title group-hover:text-primaryText">{title}</h2>
          <p className="text-[#128949] font-semibold group-hover:text-primaryText">
            Read More {">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
