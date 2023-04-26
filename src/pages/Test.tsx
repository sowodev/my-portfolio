import React, { useState, useEffect } from "react";

const tickerItems = [
  "Mecados de Capitais API.",
  "Mecados de Capitais API.",
  "Mecados de Capitais API.",
  "Mecados de Capitais API.",
  "Mecados de Capitais API.",
];

const Ticker = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTickerIndex((prevIndex) =>
        prevIndex === tickerItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex relative w-full h-[50px] overflow-hidden bg-[#f2f2f2] justify-center items-center">
      <div className="flex left-0 items-center animate-marquee whitespace-nowrap gap-4 bg-cyan-200">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className={`ticker-item ${
              index === tickerIndex ? "ticker-item-active" : ""
            } hover:bg-gray-500`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex absolute left-0 items-center animate-marquee2 whitespace-nowrap gap-4 bg-cyan-200">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className={`ticker-item ${
              index === tickerIndex ? "ticker-item-active" : ""
            } hover:bg-gray-500`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const Test = function test() {
  const [translate, setTranslate] = useState("0");
  return (
    <div className="flex flex-col gap-48 h-full w-full justify-center items-center">
      <div className="h-12">
        <Ticker />
      </div>
      <div className="flex flex-col w-full h-12 justify-center items-center bg-orange-400">
        <div
          className={`flex w-[12rem] bg-sky-300 transition translate-x-${translate} duration-500 ease-in-out`}
        >
          Test
        </div>
      </div>
      <button
        className="h-10 w-24 bg-pink-300 rounded"
        onClick={() => setTranslate((c) => (c === "0" ? "80" : "0"))}
      >
        Change
      </button>
    </div>
  );
};

export default Test;
