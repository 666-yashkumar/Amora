import React from "react";
import Know from "./Img/Know.jpg";

const Details = () => {
  return (
    <div className="w-full my-6 p-5">
      <div className=" md:grid grid-cols-2 gap-2  ">
        <div className="left col-span-1 md:w-[80%]">
          <img src={Know} alt="" />
        </div>
        <div className="right p-2 col-span-1 flex flex-col  justify-center">
          <h1 className="text-orange-400 font-bold shadow-lg inline-block text-3xl py-2 underline">
            Learn from us
          </h1>
          <p className="text-lg py-2 px-2 leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. eligendi
            quibusdam magnam sunt cum eveniet reiciendis rem veritatis. Debitis
            alias, amet quasi molestias 
            provident illo cupiditate quas 
            perferendis. Dolore.
          </p>
          <button className="bg-pink-500 rounded-lg px-6 py-2">Learn</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
