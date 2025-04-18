import React from "react";
import { IoStar } from "react-icons/io5";
import gear from "../assets/gear.png";
import door from "../assets/door.png";
import passenger from "../assets/passenger.png";

const SingleCar = ({
  image,
  rentPrice,
  title,
  rating,
  type,
  numOfDoors,
  numOfPassengers,
}) => {
  return (
    <div className="w-full max-w-[295px] h-[413px] border rounded-[14px] border-[#f1f1f1] shadow-lg mt-[40px] mx-auto md:mx-0">
      <img
        src={image}
        alt={title}
        className="w-full h-[248px] object-cover rounded-t-[14px]"
      />
      <hr className="text-[#f1f1f1]" />
      <div className="p-2">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg text-[#1d1d1d]">{title} </h1>
          <p className="flex items-center gap-1.5">
            <IoStar  className="text-yellow-500"/>
            <span className="font-medium text-xs text-[#1d1d1d1]">
              {rating}
            </span>
          </p>
        </div>
        <p className="font-normal text-xs text-[#5c5c5c] mt-1">
          <div className="flex items-center justify-between text-[11px] my-3">
            <div className="flex items-center gap-1">
              <img src={gear} alt="" />
              <p className="capitalize">{type}</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={door} alt="" />
              <p>{numOfDoors} Doors</p>
            </div>
            <div className="flex items-center gap-1">
              <img src={passenger} alt="" />
              <p>{numOfPassengers} Passengers</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[16px]">
              ${rentPrice}
              <span className="font-medium text-xs">/hour</span>
            </h1>
            <button className="bg-[#1d1d1d] text-white rounded-[23px] py-1.5 px-3">
              Rent Now
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default SingleCar;
