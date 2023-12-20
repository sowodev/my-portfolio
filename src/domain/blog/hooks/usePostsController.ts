import { useEffect, useState } from 'react';
import { PostsController, PostsType } from '../types/types';

function usePostsController(posts: PostsType[]): PostsController {
  const [filtered_posts, setFilteredPosts] = useState(posts);
  const [cutEnd, setCutEnd] = useState(4);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const tags_aux: string[] = [];

    setFilteredPosts(posts);

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tags_aux.some((t) => t === tag)) {
          tags_aux.push(tag);
        }
      });
    });

    setTags(tags_aux);
  }, [posts]);

  function showingPosts(): PostsType[] {
    if (filtered_posts.length > 0) {
      return filtered_posts.slice(
        0,
        filtered_posts.length < cutEnd ? filtered_posts.length : cutEnd,
      );
    } else {
      return posts.slice(0, posts.length < cutEnd ? posts.length : cutEnd);
    }
  }

  function addMorePosts(): void {
    if (cutEnd < posts.length)
      setCutEnd((c) => (posts.length - c < 4 ? c + (posts.length - c) : c + 4));
  }

  function checkDisabledBtn(): boolean {
    return cutEnd >= posts.length;
  }

  function filterMultiCardsByText(text: string): void {
    const filtered = posts.filter((post) => {
      return post.title.toLowerCase().includes(text) || post.leading.toLowerCase().includes(text);
    });
    setFilteredPosts(filtered);
  }

  function filterMultiCardsByTag(l_tags: string[]): void {
    const filtered = posts.filter((post) => {
      return l_tags.some((tag) => post.tags.includes(tag));
    });
    setFilteredPosts(filtered);
  }

  function getPosts(): PostsType[] {
    return posts;
  }

  function getTags(): string[] {
    return tags;
  }

  return {
    showingPosts,
    addMorePosts,
    checkDisabledBtn,
    filterMultiCardsByText,
    filterMultiCardsByTag,
    getPosts,
    getTags,
  };
}

export default usePostsController;
