import React from "react";

interface CardProps {
  number: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, icon, title, description }) => {
  return (
    <div>
      <div className="card rounded-md bg-base-100 w-96 shadow-md h-[320px]">
        <div className="flex justify-between items-center p-2 mx-3">
          <span className="font-normal text-4xl text-gray-400">{number}</span>
          <span>{icon}</span>
        </div>
        <div className="border border-gray-300 mx-6"></div>
        <div className="card-body mt-0 pt-5 text-center flex justify-center items-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-400 font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
