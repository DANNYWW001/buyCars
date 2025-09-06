import React from "react";

const Rent = () => {
  return (
    <div className="zero h-screen max-h-[359px] bg-no-repeat bg-cover rounded-[16px] max-w-[1220px] mx-auto">
      <div className="items-center justify-center flex flex-col gap-9 lg:gap-18">
        <p className="text-center w-[345px] lg:w-[691px] px-auto  h-[114px] text-[22px] lg:text-[42px] font-black text-[#ffffff] py-30 lg:py-20">
          Rent a vehicle that gives you the confidence as you ride.
        </p>
        <button className="bg-[#fdfdfd] w-[169px] h-[42px] px-[28px] py-[10px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
          Rent a car now
        </button>
      </div>
    </div>
  );
};

export default Rent;
