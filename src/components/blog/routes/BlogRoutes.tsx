import { Route, Routes } from "react-router-dom";
import PostPrototype from "../post/PostPrototype";
import Blog from "../../../pages/Blog";
import NotFound from "../../../pages/NotFound";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingComponent from "../../loading/LoadingComponent";
import { PostsType, PostsDTO } from "../../../utils/MultiCardsIntetrfaces";

const BlogRoutes = function blogRoutes() {
  const query = useQuery({
    queryKey: ["blog"],
    queryFn: () =>
      axios.get(import.meta.env.VITE_DATABASE_POSTS).then((res) => {
        const posts_temp: PostsType[] = [];

        res.data.forEach((post: PostsDTO) => {
          const post_temp: PostsType = {
            img_path: post.name_img,
            title: post.title,
            leading: post.leading_content,
            content_path: post.md_name,
            published_date: post.created_at,
            updated_date: post.updated_at,
            tags: post.tags.split(","),
            author: post.author,
            img_credits: post.img_credits,
            thumb_img_path: post.thumb_img_path,
          };

          post_temp.tags.forEach((tag, index) => {
            post_temp.tags[index] = tag.trim();
          });

          posts_temp.push(post_temp);
        });

        return posts_temp;
      }),
  });

  if (query.isLoading) return <LoadingComponent />;

  return (
    <Routes>
      <Route index element={<Blog BlogData={query.data ?? []} />} />
      {query.data &&
        query.data.length > 0 &&
        query.data.map((post: PostsType, index) => {
          const link: string = post.title
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
              element={<PostPrototype BlogData={query.data} post={post} />}
            />
          );
        })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default BlogRoutes;
