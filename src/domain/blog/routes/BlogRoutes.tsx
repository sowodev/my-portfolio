import Blog from '@pages/Blog';
import NotFound from '@pages/NotFound';
import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingComponent from '../../../components/loading/LoadingComponent';
import useGetPosts from '../hooks/api/useGetPosts';
import PostPrototypePage from '../pages/PostPrototypePage';
import { PostsType } from '../types/types';

function BlogRoutes(): ReactElement {
  const query = useGetPosts();

  if (query.isLoading) return <LoadingComponent />;

  return (
    <Routes>
      <Route index element={<Blog BlogData={query.data ?? []} />} />
      {query.data &&
        query.data.length > 0 &&
        query.data.map((post: PostsType, index: number): ReactElement => {
          const link: string = post.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replaceAll(' ', '-');

          return (
            <Route
              key={index}
              path={link}
              element={<PostPrototypePage BlogData={query.data} post={post} />}
            />
          );
        })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BlogRoutes;
