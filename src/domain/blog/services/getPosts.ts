import { useQuery } from '@tanstack/react-query';
import { PostsDTO, PostsType } from '@utils/MultiCardsIntetrfaces';
import axios from 'axios';

function getPosts() {
  const query = useQuery({
    queryKey: ['blog'],
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
            tags: post.tags.split(','),
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

  return query;
}

export default getPosts;
