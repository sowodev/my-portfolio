import { NavLink } from 'react-router-dom';
import { PostsController } from '../../utils/MultiCardsIntetrfaces';
import PostCard from './PostCard';

const CardsPagesBlog = function cardsPagesBlog({
  posts_controller,
}: {
  posts_controller: PostsController;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 md:gap-10 lg:gap-6">
      {posts_controller.showingPosts().map((post, index) => {
        const link =
          '/blog/' +
          post.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .trim()
            .replaceAll(' ', '-');
        return (
          <NavLink key={index} to={link} className="flex w-[95%] md:w-[85%] snap-center">
            <PostCard post={post} />
          </NavLink>
        );
      })}
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="fixed bottom-8 flex h-12 w-52 flex-row">
          <button
            className={`${
              posts_controller.checkDisabledBtn() ? 'hidden' : 'flex'
            } h-full w-52 items-center  justify-center rounded bg-gradient-to-b from-sky-400 to-cyan-400 shadow-lg transition duration-300 ease-linear  hover:scale-110 hover:from-sky-500 hover:to-cyan-500`}
            onClick={() => posts_controller.addMorePosts()}
            hidden={posts_controller.checkDisabledBtn()}
          >
            <span className="font-[Lexend] text-lg text-white">+ Show More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsPagesBlog;
