import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import { ArticilesData } from "./components/articles/ArticlesData";
import ArticlePrototype from "./components/articles/article/ArticlePrototype";

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex sticky top-0 w-full h-[4.5rem]">
        <Navbar />
      </div>
      <div className="flex w-full h-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles">
            <Route index element={<Articles />} />
            {ArticilesData.map((article, index) => {
              const link: string = article.title
                .toLowerCase()
                .trim()
                .replaceAll(" ", "-");

              return (
                <Route
                  key={index}
                  path={link}
                  element={<ArticlePrototype article={article} />}
                />
              );
            })}
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
