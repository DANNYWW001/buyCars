import React from "react";

const Experience = () => {
  return (
    <div className="layout mt-12">
      <h1 className="font-bold text-[38px] text-[#1d1d1d]">
        Experience luxury
        <br />
        without compromises
      </h1>
      <div className=" flex-col lg:flex-row flex gap-[26px]">
        <div className="experienced">
          <h1 className="textlay">Confort</h1>
          <p className="textp">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="experienced">
          <h1 className="textlay">Insurance</h1>
          <p className="textp">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="experienced">
          <h1 className="textlay">Commitment</h1>
          <p className="textp">
            Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between layout my-10">
        <p className="text-[24px] font-normal ">
          Trusted by customers since{" "}
          <span className="font-medium text-[24px]">1990</span>
        </p>
        <div className=" flex gap-[52px]">
          <div>
            <p className="textpp">
              Trusted customers <br />{" "}
              <span className="font-medium text-[19px] lg:text-[38px]">2000+</span>
            </p>
          </div>
          <div>
            <p className="textpp">
              Available cars <br />{" "}
              <span className="font-medium  text-[19px] lg:text-[38px]">134+</span>
            </p>
          </div>
          <div>
            <p className="textpp">
              Total reservation
              <br />
              <span className="font-medium text-[19px] lg:text-[38px]">134+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
