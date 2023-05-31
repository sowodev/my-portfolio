import React, { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className="flex h-16 w-16 animate-[spin_7s_linear_infinite] items-center justify-center overflow-hidden bg-orange-300"></div>
  );
};

const Test = function test() {
  const [translate, setTranslate] = useState("0");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Loading />
    </div>
  );
};

export default Test;
