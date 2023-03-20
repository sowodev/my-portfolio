import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
