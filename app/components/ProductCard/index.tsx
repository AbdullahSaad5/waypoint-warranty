import React from "react";

interface ProductCardProps {
  number: string;
  icon: JSX.Element;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ number, icon, title }) => {
  return (
    <div>
      <div className="card group rounded-sm bg-base-100 w-[310px] shadow-md h-[220px] hover:bg-blue">
        <div className="flex justify-between items-center p-2 mx-2">
          <span className="group-hover:brightness-0 group-hover:contrast-100 group-hover:invert">
            {icon}
          </span>
          <span className="font-normal text-4xl text-gray-400 group-hover:bg-clip-text group-hover:bg-white group-hover:text-blue">
            {number}
          </span>
        </div>
        <div className="border border-gray-300"></div>
        <div className="card-body pt-5 flex justify-center">
          <h2 className="card-title ">{title}</h2>
          <p className="text-[#128949] font-semibold">Read More {">"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
