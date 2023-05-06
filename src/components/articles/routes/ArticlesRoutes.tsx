import { Route, Routes } from "react-router-dom";
import { ArticlesData } from "../ArticlesData";
import ArticlePrototype from "../article/ArticlePrototype";
import Articles from "../../../pages/Articles";
import NotFound from "../../../pages/NotFound";

const ArticlesRoutes = function articlesRoutes() {
  return (
    <Routes>
      <Route index element={<Articles ArticlesData={ArticlesData} />} />
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
            element={
              <ArticlePrototype ArticlesData={ArticlesData} article={article} />
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ArticlesRoutes;
