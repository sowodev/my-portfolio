import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="flexw-full h-screen">
      <Navbar />
      <div className="flex w-full h-screen justify-items-center items-center place-content-center"></div>
    </div>
  );
}

export default App;
