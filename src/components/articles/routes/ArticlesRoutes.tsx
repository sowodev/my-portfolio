import { Route, Routes, createRoutesFromElements } from "react-router-dom";
import { ArticlesData } from "../ArticlesData";
import ArticlePrototype from "../article/ArticlePrototype";
import Articles from "../../../pages/Articles";

const ArticlesRoutes = function articlesRoutes() {
  return (
    <Routes>
      <Route index element={<Articles />} />
      {ArticlesData.map((article, index) => {
        const link: string = article.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
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
    </Routes>
  );
};

export default ArticlesRoutes;
