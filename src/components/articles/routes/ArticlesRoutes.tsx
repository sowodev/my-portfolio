import { Route, Routes } from "react-router-dom";
import ArticlePrototype from "../article/ArticlePrototype";
import Articles from "../../../pages/Articles";
import NotFound from "../../../pages/NotFound";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingComponent from "../../loading/LoadingComponent";
import { PostsType, PostsDTO } from "../../../interfaces/MultiCardsIntetrfaces";

const ArticlesRoutes = function articlesRoutes() {
  const [posts, setPosts] = useState<PostsType[]>([]);

  const query = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      axios.get(import.meta.env.VITE_DATABASE_POSTS).then((res) => {
        const posts_temp: PostsType[] = [];

        res.data.forEach((post: PostsDTO) => {
          const tags: string[] = post.tags.split(",");
          const post_temp: PostsType = {
            img_path: post.name_img,
            title: post.title,
            leading: post.leading_content,
            content_path: post.md_name,
            published_date: post.created_at,
            updated_date: post.updated_at,
            tags: tags,
            author: post.author,
            img_credits: post.img_credits,
            thumb_img_path: post.thumb_img_path,
          };

          posts_temp.push(post_temp);
        });

        setPosts(posts_temp);

        return res.data;
      }),
  });

  if (query.isLoading) return <LoadingComponent />;

  return (
    <Routes>
      <Route index element={<Articles ArticlesData={posts} />} />
      {posts.map((article, index) => {
        const link: string = article.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replaceAll(" ", "-");

        return (
          <Route
            key={index}
            path={link}
            element={
              <ArticlePrototype ArticlesData={posts} article={article} />
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ArticlesRoutes;
