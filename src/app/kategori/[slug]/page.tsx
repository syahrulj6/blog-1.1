import { getPosts, getPostsByCategory } from '@/lib/data';
import PostCategory from '@/components/postCategory/PostCategory';

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;
  const posts: any = await getPosts();

  // Find the post with matching slug
  const post = posts.find((post: any) => post.category === slug);

  if (!post) return null;

  return {
    title: post.category,
    description: post.category,
  };
};

const KategoriPage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const posts: any = await getPosts();

  // Find the post with matching slug
  const post = posts.find((post: any) => post.category === slug);

  if (!post) return null;

  // Fetch all posts belonging to the category of the current post
  const categoryPosts = await getPostsByCategory(post.category);

  return <PostCategory category={post.category} posts={categoryPosts} />;
};

export default KategoriPage;
