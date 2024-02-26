import PostCategory from '@/components/postCategory/PostCategory';

export const metadata = {
  title: 'Art',
  description: 'Art Description',
};

const Art = async () => {
  return (
    <>
      <PostCategory category="art" />
    </>
  );
};

export default Art;
