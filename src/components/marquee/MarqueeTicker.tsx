import { useEffect, useState } from "react";
import { MockedTickerData } from "./MockedData";

const Ticker = () => {
  return (
    <div className="flex relative w-full h-full gap-8 overflow-x-hidden justify-center items-center">
      <div className="flex animate-marquee whitespace-nowrap">
        {MockedTickerData.map((ticker_item, index) => (
          <div className="flex flex-row h-full w-full justify-center items-center mx-8 gap-2">
            <img
              className="h-5 w-5"
              src={ticker_item.img_path}
              alt={ticker_item.stock}
            />
            <span
              key={index}
              className={`w-fit h-full font-[Lexend] font-light text-lg text-center`}
            >
              {ticker_item.stock}: {ticker_item.price}
            </span>
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee2 whitespace-nowrap">
        {MockedTickerData.map((ticker_item, index) => (
          <div className="flex flex-row h-full w-fit justify-center items-center mx-8 gap-2">
            <img
              className="h-5 w-5"
              src={ticker_item.img_path}
              alt={ticker_item.stock}
            />
            <span
              key={index}
              className={`w-fit h-full font-[Lexend] font-light text-lg`}
            >
              {ticker_item.stock}: {ticker_item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MarqueeTicker: React.FC = function marqueeTicker() {
  return (
    <div className="flex w-full h-[45px] bg-amber-300 justify-center items-center">
      <Ticker />
    </div>
  );
};

export default MarqueeTicker;
