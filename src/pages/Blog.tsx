import { FC, ReactElement } from 'react';
import Filters from '../components/filters/Filters';
import CardsPagesBlog from '../domain/blog/components/CardsPagesBlog';
import usePostsController from '../domain/blog/hooks/usePostsController';
import { PostsController, PostsType } from '../domain/blog/types/posts';

type BlogProps = {
  BlogData: PostsType[];
};

const Blog: FC<BlogProps> = ({ BlogData }: BlogProps): ReactElement => {
  const posts_controller: PostsController = usePostsController(BlogData);

  return (
    <div className="flex h-full w-full flex-row overflow-y-auto scroll-smooth">
      <div className="h-full basis-0 lg:basis-1/4 justify-center hidden lg:flex">
        <Filters multi_card_controller={posts_controller} />
      </div>
      <div className="flex h-fit basis-full lg:basis-3/4 justify-center">
        <div className="flex basis-full lg:basis-2/3 items-center justify-center pt-8">
          <CardsPagesBlog posts_controller={posts_controller} />
        </div>
        <div className="flex h-full basis-0 lg:basis-1/3 justify-center"></div>
      </div>
    </div>
  );
};

export default Blog;
