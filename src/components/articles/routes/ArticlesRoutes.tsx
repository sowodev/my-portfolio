import { Route, Routes } from "react-router-dom";
import ArticlePrototype from "../article/ArticlePrototype";
import Articles from "../../../pages/Articles";
import NotFound from "../../../pages/NotFound";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingComponent from "../../loading/LoadingComponent";

type PostsDTO = {
  title: string;
  leading_content: string;
  md_name: string;
  author: string;
  name_img: string;
  img_credits: string;
  tags: string;
  created_at: string;
  updated_at: string;
};

type PostsType = {
  img_path: string;
  title: string;
  leading: string;
  content_path: string;
  published_date: string;
  updated_date: string;
  tags: string[];
  author: string;
  img_credits: string;
};

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
