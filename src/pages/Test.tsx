import React, { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className="flex h-20 w-20 animate-[spin_5s_linear_infinite] items-center justify-center overflow-hidden">
      <img src="/imgs/loading.svg" alt="loading" />
    </div>
  );
};

const Test = function test() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Loading />
    </div>
  );
};

export default Test;
