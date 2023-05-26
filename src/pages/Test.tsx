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
    <div className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-[#f2f2f2]">
      <div className="animate-marquee left-0 flex items-center gap-4 whitespace-nowrap bg-cyan-200">
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
      <div className="animate-marquee2 absolute left-0 flex items-center gap-4 whitespace-nowrap bg-cyan-200">
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-48">
      <div className="h-12">
        <Ticker />
      </div>
      <div className="flex h-12 w-full flex-col items-center justify-center bg-orange-400">
        <div
          className={`flex w-[12rem] bg-sky-300 transition translate-x-${translate} duration-500 ease-in-out`}
        >
          Test
        </div>
      </div>
      <button
        className="h-10 w-24 rounded bg-pink-300"
        onClick={() => setTranslate((c) => (c === "0" ? "80" : "0"))}
      >
        Change
      </button>
    </div>
  );
};

export default Test;
