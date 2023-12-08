import getPosts from '../../services/getPosts';

function useGetPosts() {
  const query = getPosts();
  return query;
}

export default useGetPosts;
