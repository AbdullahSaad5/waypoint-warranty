import React from "react";

interface CardProps {
  number: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, icon, title, description }) => {
  return (
    <div className="mx-5 h-full">
      <div className="card group rounded-md bg-base-100 lg:w-96 shadow-md min-h-[320px] h-full md:w-[310px] w-[300px] hover:bg-darkBlue">
        <div className="flex justify-between items-center p-2 mx-3">
          <span className="font-normal text-4xl text-gray-400 group-hover:text-primaryText">{number}</span>
          <span className="group-hover:brightness-0 group-hover:contrast-100 group-hover:invert">{icon}</span>
        </div>
        <div className="border border-gray-300 mx-6 group-hover:border-white"></div>
        <div className="card-body mt-0 pt-5 text-center flex justify-center items-center ">
          <h2 className="card-title group-hover:text-primaryText">{title}</h2>
          <p className="text-gray-400 font-medium group-hover:text-primaryText">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
